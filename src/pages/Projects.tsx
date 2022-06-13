import { 
    IonContent,
    IonNote,
    IonLabel,
} from '@ionic/react';
import './Projects.css';
import ProjectsContainer from '../components/ProjectsCard';
import {Fragment} from 'react'
import { logoNodejs } from 'ionicons/icons';

interface Projects {
    project: string;
    languageUsed: string;
    url: string;
    description: string;
    languageImgIos: string;
    languageImgMd: string;
    projectImg: string;
}

const projectsList: Projects[] = [
    {
        project: 'Gluta',
        languageUsed: 'JavaScript',
        url: 'https://github.com/acquitelol/gluta/',
        description: "This program is a custom discord Rich Presence previewer and creator which resembles Discord's layout perfectly but is instead recreated by hand. It is built in Electron with JS.",
        languageImgIos: logoNodejs,
        languageImgMd: logoNodejs,
        projectImg: "./images/gluta.png"
    },
    {
        project: 'Gluta',
        languageUsed: 'JavaScript',
        url: 'https://github.com/acquitelol/gluta/',
        description: "This program is a custom discord Rich Presence previewer and creator which resembles Discord's layout perfectly but is instead recreated by hand. It is built in Electron with JS.",
        languageImgIos: logoNodejs,
        languageImgMd: logoNodejs,
        projectImg: "./images/gluta.png"
    },
    {
        project: 'Gluta',
        languageUsed: 'JavaScript',
        url: 'https://github.com/acquitelol/gluta/',
        description: "This program is a custom discord Rich Presence previewer and creator which resembles Discord's layout perfectly but is instead recreated by hand. It is built in Electron with JS.",
        languageImgIos: logoNodejs,
        languageImgMd: logoNodejs,
        projectImg: "./images/gluta.png"
    }
]


const Page: React.FC = () => {
    return (
        <Fragment>
                <hr></hr>
            <IonContent data-type='content1'>
                <div className='mainTitle'>
                <IonLabel id='title' className='padding-custom'>
                    This is the <strong>Projects</strong> Page. 🪐
                </IonLabel> </div> <br></br>
                <div className='subTitle'> 
                    <div className='pos'>
                        <IonNote id='sub' className='padding-custom'>
                            Welcome to the Projects route of my <strong>testing</strong> site built in react.
                        </IonNote> 
                    </div> 
                </div>
                <div className={`projects-cards`}>
                    {projectsList.map((project, index) => {
                        return (
                            <div key={index} className={`${index===1 ? 'rotation' : 'rotation-flipped'}`} >
                                <ProjectsContainer 
                                    key={index} 
                                    project={project.project} 
                                    languageUsed={project.languageUsed} 
                                    url={project.url} 
                                    description={project.description}
                                    iosIcon={project.languageImgIos}
                                    mdIcon={project.languageImgMd}
                                    projectIcon={project.projectImg}
                                />
                            </div>
                        )
                    })}
                </div>
            </IonContent>

           
        </Fragment>
    );
  };
  
  export default Page;