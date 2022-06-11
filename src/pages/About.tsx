import { 
    IonContent,
    IonNote,
    IonLabel,
} from '@ionic/react';
import './About.css';
import {Fragment} from 'react'


const Page: React.FC = () => {
    return (
        <>
            <hr></hr>
            <IonContent data-type='content1'>
                <div className='text-rot'>
                    <IonLabel id='title' className='large' data-scale='title'>
                        Hi, I'm <strong>Acquite.</strong> 🔥
                    </IonLabel>
                </div> <br />
                <div className='about'>
                    <IonLabel id='title-about' className='padding-custom' data-scale='sub'>
                        I am a <strong>14 year old</strong> Developer. 
                    </IonLabel> <br />
                    <IonNote id='sub-about' className='padding-custom'>
                        I focus mostly on <strong>JavaScript</strong> such as React but I have a good undestanding of other languages such as <strong>Python</strong> and <strong>Lua</strong>.
                    </IonNote>
                </div>
            </IonContent>
        </>
    );
  };

export default Page;