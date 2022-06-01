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

interface Props {
  name: string;
}

const Page: React.FC<Props> = ({ name }) => {

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
