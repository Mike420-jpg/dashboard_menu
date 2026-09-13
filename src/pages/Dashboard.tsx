import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { register } from 'swiper/element/bundle';
register(); 

import {  } from 'ionicons/icons';

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

      <IonContent className="[--background:#fffafa]">
        <swiper-container
          slides-per-view="1"
          space-between="10"
          pagination="true"
          navigation="true"
          loop="true"
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

        <h1>Experience the Essence of <br /> Luxury Perfumes</h1>

      </IonContent>
    </IonPage>
  );
};

export default Dashboard;
