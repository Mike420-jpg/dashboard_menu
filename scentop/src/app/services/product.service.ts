import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Product[] = [
  ];

  private nextId = 1;

  constructor() {
    const savedProducts = localStorage.getItem('products');

    if (savedProducts) {
      this.products = JSON.parse(savedProducts);

      if (this.products.length > 0) {
        this.nextId =
          Math.max(...this.products.map(product => product.id)) + 1;
      }
    }
  }


  private saveProducts(): void {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getProducts(): Product[] {
    return [...this.products];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  addProduct(product: Product): void {
    product.id = this.nextId++;

    this.products.push(product);

    this.saveProducts();
  }
  updateProduct(product: Product): void {
    const index = this.products.findIndex(
      p => p.id === product.id
    );

    if (index !== -1) {
      this.products[index] = { ...product };

      this.saveProducts();
    }
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(
      product => product.id !== id
    );

    this.saveProducts();
  }
}