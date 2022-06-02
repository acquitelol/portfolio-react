import { 
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
} from '@ionic/react';
import './Page.css';
import {Fragment} from 'react'

interface Props {
  name: string;
  object: object;
}

const Page: React.FC<Props> = ({ name, object}) => {

  return (
    <Fragment>
        <IonHeader>
            <IonToolbar>
            <IonButtons slot="start">
                <IonMenuButton />
            </IonButtons>
            <IonTitle className='title'>{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          {object}
    </Fragment>
  )
};

export default Page;
