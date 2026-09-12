import React, { useState } from 'react';
import {
  IonPage, IonHeader, IonToolbar, IonButtons, IonButton, IonIcon, IonContent,
} from '@ionic/react';
import {
  menuOutline, searchOutline, arrowBackOutline, shareSocialOutline, diamondOutline,
} from 'ionicons/icons';
import './styles/Products.css';

interface Product {
  id: string;
  name: string;
  size: string;
  price: number;
  imageUrl: string;
  description: string;
  notes: string;
}

const bestSellers: Product[] = [
  {
    id: 'ambre-sucre',
    name: 'Ambre sucré (Sweet Amber)',
    size: '50 ml',
    price: 229,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVQBrx009_rquzelh-6Dm7sSDxYOeXC4A81WZ-ucH6g&s=10',
    description: 'A warm, gourmand amber scent layered with vanilla and soft musk for an inviting everyday signature.',
    notes: 'Amber, Vanilla, Musk',
  },
  {
    id: 'floris-somnium',
    name: 'Floris Somnium',
    size: '50 ml',
    price: 249,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdhSxTugubOB01f3OkVZ9XCMuDq9VUVki9E_7_QJ4pUP85F7F72R9BcVU&s=10',
    description: 'A rich amber-spice blend built for evenings, opening bright before settling into a warm, resinous base.',
    notes: 'Bergamot, Amber, Spices',
  },
];

const justArrived: Product[] = [
  {
    id: 'fresh-breeze',
    name: 'Fresh Breeze',
    size: '50 ml',
    price: 109,
    imageUrl: 'https://i.ebayimg.com/images/g/NV8AAOSwdV9kRM60/s-l1200.jpg',
    description: 'A crisp, airy fragrance with citrus and aquatic accords, made for light everyday wear.',
    notes: 'Citrus, Sea Salt, White Musk',
  },
  {
    id: 'harene-de-lumiere',
    name: 'Harene de Lumiere',
    size: '50 ml',
    price: 219,
    imageUrl: 'https://diynaturally.co.za/wp-content/uploads/2022/06/Clover-30ml-Perfume-Bottle.jpg',
    description: 'A sun-warmed floral scent with a soft, sandy base note, evoking golden light on skin.',
    notes: 'Neroli, Sandalwood, Honey',
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="product-card">
    <div className="product-card__bottle">
      <img src={product.imageUrl} alt={product.name} />
    </div>
    <div className="product-card__name">{product.name}</div>
    <div className="product-card__size">{product.size}</div>
    <p className="product-card__description">{product.description}</p>
    <div className="product-card__notes">Notes: {product.notes}</div>
    <div className="product-card__price">${product.price.toFixed(2)}</div>
  </div>
);

type View = { name: 'home' } | { name: 'all'; section: 'Best Sellers' | 'Just Arrived'; products: Product[] };

const HomeScreen: React.FC<{ onSeeAll: (section: 'Best Sellers' | 'Just Arrived', products: Product[]) => void }> = ({
  onSeeAll,
}) => (
  <>
    <IonHeader className="app-header ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon icon={menuOutline} />
          </IonButton>
        </IonButtons>
        <div className="app-header__logo">
          <IonIcon icon={diamondOutline} />
        </div>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon icon={searchOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent className="app-content" fullscreen>
      <section className="section">
        <div className="section__heading">
          <h1>Best Sellers</h1>
          <button className="pill-btn" onClick={() => onSeeAll('Best Sellers', bestSellers)}>
            see all &gt;
          </button>
        </div>
        <p className="section__subtitle">The Best Parfume Ever</p>
        <div className="product-grid">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <h1>Just Arrived</h1>
          <button className="pill-btn" onClick={() => onSeeAll('Just Arrived', justArrived)}>
            see all &gt;
          </button>
        </div>
        <p className="section__subtitle">Recently Arrived Parfums</p>
        <div className="product-grid">
          {justArrived.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </IonContent>
  </>
);

const AllScreen: React.FC<{ section: string; products: Product[]; onBack: () => void }> = ({
  section,
  products,
  onBack,
}) => (
  <>
    <IonHeader className="app-header ion-no-border">
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton onClick={onBack}>
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
        </IonButtons>
        <div className="app-header__logo">
          <IonIcon icon={diamondOutline} />
        </div>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon icon={shareSocialOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>

    <IonContent className="app-content" fullscreen>
      <section className="section">
        <div className="section__heading">
          <h1>{section}</h1>
        </div>
        <p className="section__subtitle">The Best Parfume Ever</p>
        <div className="product-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <button className="back-link-btn" onClick={onBack}>
          <IonIcon icon={arrowBackOutline} />
          Back to Products
        </button>
      </section>
    </IonContent>
  </>
);

const Scentop_Products: React.FC = () => {
  const [view, setView] = useState<View>({ name: 'home' });

  return (
    <IonPage className="scentop">
      {view.name === 'home' ? (
        <HomeScreen
          onSeeAll={(section, products) => setView({ name: 'all', section, products })}
        />
      ) : (
        <AllScreen
          section={view.section}
          products={view.products}
          onBack={() => setView({ name: 'home' })}
        />
      )}
    </IonPage>
  );
};

export default Scentop_Products;