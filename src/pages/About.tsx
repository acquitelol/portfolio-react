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
import './About.css';

const Page: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>About</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">About</IonTitle>
                </IonToolbar>
                </IonHeader>
                <IonContent data-type='content1'>
                <IonLabel id='title'>
                    This is the <strong>About</strong> Page. 🔥
                </IonLabel> <br></br>
                <IonNote id='sub'>
                    Welcome to the About route of my <strong>testing</strong> site built in react.
                </IonNote>
            </IonContent>
            </IonContent>
        </IonPage>
    );
  };
  
  export default Page;