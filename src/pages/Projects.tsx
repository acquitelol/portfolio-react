import { 
    IonContent,
    IonNote,
    IonLabel
} from '@ionic/react';
import './Projects.css';
import ProjectsContainer from '../components/ProjectsCard';
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
        url: 'https://github.com/acquitelol/',
        description: "I have built many projects with JS including this website with React, a Rich Presence Graphical Application built for mac, and many more."
    },
    {
        language: "Python",
        timeUsed: '2 years',
        url: 'https://github.com/acquitelol/',
        description: "I've used Python for building simple programs such as Base64 Decoders and Session Request Senders. I have a good undestanding of the syntax as a result."
    },
    {
        language: "Breathing air",
        timeUsed: '14 years',
        url: 'https://github.com/acquitelol/',
        description: "I very much enjoy breathing air. It is my life hobby. I have always enjoyed to breathe air, and have done it my entire life. Breathing air is extremely healthy for you."
    }
]


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

            <div className={`about-cards`}>
                    {languagesList.map((language, index) => {
                        return (
                            <div key={index} className={`${index===1 ? 'rotation' : 'rotation-flipped'}`} >
                                <ProjectsContainer 
                                    key={index} 
                                    language={language.language} 
                                    timeUsed={language.timeUsed} 
                                    project={language.url} 
                                    description={language.description}
                                />
                            </div>
                        )
                    })}
            </div>
        </Fragment>
    );
  };
  
  export default Page;