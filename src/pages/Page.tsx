import { 
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonPage
} from '@ionic/react';
import InvalidContainer from '../components/InvalidContainer'
import './Page.css';


const Page: React.FC = () => {

  let name = window.location.pathname.slice(7).replaceAll('%20', ' ')

  console.log(name)
  let one = name.split('', 1)
  let two = [one[0], name.slice(1)]
  one[0] = one[0].toUpperCase();
  name = one[0]+two[1]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonMenuButton />
        </IonButtons>
        <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>


      <IonContent>
          <IonHeader collapse="condense">
          <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
          </IonHeader>
          <InvalidContainer name={name} />
      </IonContent>
    </IonPage>
  )
};

export default Page;
