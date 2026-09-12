
import { IonPage, IonContent, IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle} from '@ionic/react';

const Dev: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
       <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
           <IonTitle>Dashboard</IonTitle>
    </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <h1>Developers Page</h1>
        <p>This is the Developers page content.</p>
      </IonContent>
    </IonPage>
  );
}

export default Dev;