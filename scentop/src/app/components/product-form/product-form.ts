import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',

  imports: [ReactiveFormsModule, RouterLink],

  templateUrl: './product-form.html',
})
export class ProductForm implements OnInit {
  productForm: FormGroup;

  isEditMode = false;

  productId: number | null = null;

  constructor(
    private fb: FormBuilder,

    private productService: ProductService,

    private route: ActivatedRoute,

    private router: Router,
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],

      price: [0, [Validators.required, Validators.min(0)]],

      stock: [0, [Validators.required, Validators.min(0)]],

      description: ['', [Validators.required, Validators.minLength(5)]],

      img_url: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEditMode = true;

      this.productId = Number(id);

      const product = this.productService.getProductById(this.productId);

      if (product) {
        this.productForm.patchValue({
          name: product.name,

          price: product.price,

          stock: product.stock,

          description: product.description,

          img_url: product.img_url,
        });
      } else {
        this.router.navigate(['/products']);
      }
    }
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();

      return;
    }

    const value = this.productForm.value;

    if (this.isEditMode && this.productId !== null) {
      const updatedProduct: Product = {
        id: this.productId,

        name: value.name,

        price: Number(value.price),

        stock: Number(value.stock),

        description: value.description,

        img_url: value.img_url,
      };

      this.productService.updateProduct(updatedProduct);
    } else {
      const newProduct: Product = {
        id: 0,

        name: value.name,

        price: Number(value.price),

        stock: Number(value.stock),

        description: value.description,

        img_url: value.img_url,
      };

      this.productService.addProduct(newProduct);
    }

    this.router.navigate(['/products']);
  }

  get name() {
    return this.productForm.get('name');
  }

  get price() {
    return this.productForm.get('price');
  }

  get stock() {
    return this.productForm.get('stock');
  }

  get description() {
    return this.productForm.get('description');
  }

  get img_url() {
    return this.productForm.get('img_url');
  }
}
