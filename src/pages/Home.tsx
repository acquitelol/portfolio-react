import { 
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonPage,
    IonNote,
    IonLabel
} from '@ionic/react';
import './Home.css';

const Page: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Home</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonContent data-type='content1'>
                <IonLabel id='title'>
                    This is the <strong>Home</strong> Page. 🌺
                </IonLabel> <br></br>
                <IonNote id='sub'>
                    Welcome to the Home route of my <strong>testing</strong> site built in react.
                </IonNote>
            </IonContent>
            </IonContent>
        </IonPage>
    );
  };
  
  export default Page;