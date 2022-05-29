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
import './Contact.css';

const Page: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle>Contact</IonTitle>
            </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Contact</IonTitle>
                </IonToolbar>
                </IonHeader>
                <hr></hr>
                <IonContent data-type='content1'>
                <IonLabel id='title'>
                    This is the <strong>Contact</strong> Page. 🤦‍♂️
                </IonLabel> <br></br>
                <IonNote id='sub'>
                    Welcome to the Contact route of my <strong>testing</strong> site built in react.
                </IonNote>
            </IonContent>
            </IonContent>
        </IonPage>
    );
  };
  
  export default Page;