import { 
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from '@ionic/react';
import './Page.css';
import {Fragment} from 'react'


const Page: React.FC = () => {

  let name = window.location.pathname.slice(1).replaceAll('%20', ' ')

  console.log(name)
  let one = name.split('', 1)
  let two = [one[0], name.slice(1)]
  one[0] = one[0].toUpperCase();
  name = one[0]+two[1]

  return (
    <Fragment>
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
      </IonContent>
    </Fragment>
  )
};

export default Page;
