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

const getName = () => {
  let name = window.location.pathname
  let formatted = name.slice(1).replaceAll('%20', ' ')

  if (formatted==='') return "Invalid"


  let one = formatted.split('', 1)
  let two = [one[0], formatted.slice(1)]
  console.log(one[0])
  one[0] = one[0].toUpperCase();
  console.log(one[0])
  let final = one[0]+two[1]

  return final
}

const Page: React.FC = () => {

  let name = getName()

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
