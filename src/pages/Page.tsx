import { 
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonPage
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer'
import './Page.css';


const Page: React.FC = () => {

  let { name } = useParams<{ name: string; }>();

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
          <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  )
};

export default Page;
