import { 
    IonContent,
    IonNote,
    IonLabel
} from '@ionic/react';
import './Projects.css';
import {Fragment} from 'react'

const Page: React.FC = () => {
    return (
        <Fragment>
                <hr></hr>
            <IonContent data-type='content1'>
                <IonLabel id='title' className='padding-custom'>
                    This is the <strong>Projects</strong> Page. 🪐
                </IonLabel> <br></br>
                <IonNote id='sub' className='padding-custom'>
                    Welcome to the Projects route of my <strong>testing</strong> site built in react.
                </IonNote>
            </IonContent>
        </Fragment>
    );
  };
  
  export default Page;