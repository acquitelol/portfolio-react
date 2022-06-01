import { 
    IonContent,
    IonNote,
    IonLabel
} from '@ionic/react';
import './Home.css';
import {Fragment} from 'react'

const Page: React.FC = () => {
    return (
        <Fragment>
                <hr></hr>
                <IonContent data-type='content1'>
                    <IonLabel id='title' className='padding-custom'>
                        This is the <strong>Home</strong> Page. 🌺
                    </IonLabel> <br></br>
                    <IonNote id='sub' className='padding-custom'>
                        Welcome to the Home route of my <strong>testing</strong> site built in react.
                        <br />
                        (This site is <strong>entirely experimental</strong> and many changes are inevitable.)
                    </IonNote>
            </IonContent>
        </Fragment>
    );
  };
  
  export default Page;