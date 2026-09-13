import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonToolbar,
} from "@ionic/react";

import { register } from 'swiper/element/bundle';
register(); 

import {  } from 'ionicons/icons';

import '../styles/Dashboard.css';
import '../styles/colorPalette.css';

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="[--background:#fff]">
          <IonButtons slot="start">
            <IonMenuButton menu="main-menu" className="[--color:#e89a9f]" />
          </IonButtons>
          <div
            className="
              pointer-events-none
              absolute left-1/2 top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
          >
            <img
              src="/ScentTop1.png"
              alt="ScenTop"
              className="h-15 w-15 object-contain"
            />
          </div>
        </IonToolbar>
      </IonHeader>

      <IonContent className="body">
        <div className="title">
          <h1>
            ScenTop
          </h1>
        </div>

        <swiper-container
          slides-per-view="1"
          space-between="10"
          pagination="true"
          navigation="true"
          loop="true"
          className="dashboard-carousel"
          autoplay="true"
        >
          <swiper-slide>
            <img
              src="./public/Top3-perfumes.png"
              alt="Top3-perfumes.png"
              className="w-full"
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="./public/ScenTop-Store.png"
              alt="ScenTop-Store.png"
              className="w-full"
            />
          </swiper-slide>

          <swiper-slide>
            <img
              src="./public/ScenTop-Perfumer.png"
              alt="ScenTop-Perfumer.png"
              className="w-full"
            />
          </swiper-slide>
        </swiper-container>

        <div className="descriptor">
          <h1><strong>Experience the Essence of <br /> Luxury Perfumes</strong></h1>
        </div>

        
        <div className="shop-section">

          <h3 className="shop-title"><strong>SHOP FOR</strong></h3>
        
          <div className="divider"></div>

          <div className="shopcard-container">

            {/* Men */}
            <div className="shopcard">
              <img
                src="./public/PerfumeMen.png"
                alt="Men's Perfume"
              />

              <div className="shopcard-title">
                <h3>Men's Perfume</h3>
              </div>
            </div>

            {/* Women */}
            <div className="shopcard">
              <img
                src="./public/PerfumeWomen.png"
                alt="Women's Perfume"
              />

              <div className="shopcard-title">
                <h3>Women's Perfume</h3>
              </div>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
