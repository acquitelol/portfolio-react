import { 
    IonContent,
    IonNote,
    IonLabel,
} from '@ionic/react';
import AboutContainer from '../components/AboutCard';
import './About.css';
import {Fragment} from 'react'



interface Languages {
    language: string;
    timeUsed: string;
    url: string;
    description: string;
}

const languagesList: Languages[] = [
    {
        language: "Javascript",
        timeUsed: '1 year',
        url: 'https://github.com/acquitelol/gluta',
        description: "I have built many projects with JS including this website with React, a Rich Presence Graphical Application built for mac, and many more."
    },
    {
        language: "Python",
        timeUsed: '2 years',
        url: 'https://github.com/acquitelol/portfolio-react',
        description: "I've used Python for building simple programs such as Base64 Decoders and Session Request Senders. I have a good undestanding of the syntax as a result."
    }

]

const Page: React.FC = () => {


    return (
        <>
            <hr></hr>
            
            <IonContent data-type='content1'>
                <IonLabel id='title' className='large' data-scale='title'>
                    Hi, I'm <strong>Acquite.</strong> 🔥
                </IonLabel> <br />
                <div className='about'>
                    <IonLabel id='title-about' className='padding-custom' data-scale='sub'>
                        I am a <strong>14 year old</strong> Developer. 
                    </IonLabel> <br />
                    <IonNote id='sub-about' className='padding-custom'>
                        I focus mostly on <strong>JavaScript</strong> such as React but I have a good undestanding of other languages such as <strong>Python</strong> and <strong>Lua</strong>.
                    </IonNote>
                </div>
                {languagesList.map((language, index) => {
                    return (
                        <div key={index} className={`${index===1 ? 'rotation' : 'rotation-flipped'}`} >
                            <AboutContainer 
                                key={index} 
                                language={language.language} 
                                timeUsed={language.timeUsed} 
                                project={language.url} 
                                description={language.description}
                            />
                        </div>
                    )
                })}
            </IonContent>
        </>
    );
  };
  
  export default Page;