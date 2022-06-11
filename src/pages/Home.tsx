import { 
    IonContent,
    IonNote,
    IonLabel,
    IonItem,
    IonIcon,
    IonHeader,
} from '@ionic/react';
import './Home.css';
import {useState} from 'react'
import { folderOpenOutline, folderOpenSharp } from 'ionicons/icons';
import Typewriter from '../components/Typewriter'


const Page: React.FC = () => {


    const [imageToggle1, setImageToggle1] = useState(false)
    const [imageToggle2, setImageToggle2] = useState(false)



    return (
        <>
            <hr></hr>

            <IonContent data-type='content1'>
                <IonHeader className='header-home'>
                    I'm a <Typewriter />
                    <div className='header-blink'></div>
                </IonHeader>
                <div className="text-rot">
                    <IonLabel id='title' className='padding-custom'>
                        This is the <strong>Home</strong> Page. 🌺
                    </IonLabel> <br></br>
                    <IonNote id='sub' className='padding-custom'>
                        Welcome to the Home route of my <strong>testing</strong> site built in react.
                        <br />
                        (This site is <strong>entirely experimental</strong> and many changes are inevitable.)
                    </IonNote>
                </div>
                <div className='gluta'>
                    <img src='./images/gluta-1.png' alt='' width='724px' height='944px' id='gluta1' className={imageToggle1 ? "flipped" : ""} onClick={() => {setImageToggle1(!imageToggle1); console.log(imageToggle1)}}/>
                    <img src='./images/gluta-2.png' alt='' width='724px' height='944px' id='gluta2' className={imageToggle2 ? "flipped" : ""} onClick={() => {setImageToggle2(!imageToggle2); console.log(imageToggle2)}}/>
                </div>

                <div id='content-project'>
                    <IonLabel id='gluta' className='margin-custom'>
                        This is a MacOS Application called <strong>Gluta</strong>.
                    </IonLabel> <br></br>
                    <IonNote id='gluta-sub' className='margin-custom'>
                        You can discover more including the <strong>Source Code</strong> for this Application in the <strong>Projects</strong> tab.
                        <br />
                        <IonItem  routerLink={'/projects'} routerDirection="forward" lines="inset" detail={true} button={true} type='button' className='margin-custom' id='projTab'>
                            <IonIcon slot="start" ios={folderOpenOutline} md={folderOpenSharp} />
                            <IonLabel>Take me there</IonLabel>
                        </IonItem>
                    </IonNote>
                </div>
            </IonContent>
        </>
    );
  };
  
  export default Page;