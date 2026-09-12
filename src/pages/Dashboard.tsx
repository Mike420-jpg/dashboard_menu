import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

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

      <IonContent className="[--background:#fffafa]"></IonContent>
    </IonPage>
  );
};

export default Dashboard;
