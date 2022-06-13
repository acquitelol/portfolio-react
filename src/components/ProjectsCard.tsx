import { 
    IonIcon
} from '@ionic/react';
import {useState} from 'react';

interface Props {
    project: string;
    languageUsed: string;
    url: string;
    description: string;
    iosIcon: string;
    mdIcon: string;
    projectIcon: string;
}

const ProjectsContainer: React.FC<Props> = ( { project, languageUsed, url, description, iosIcon, mdIcon, projectIcon}) => {
    const [clicked, setClicked] = useState(false)
    return (
        <div className='projects-card'>
            <div id='projects-card'>
                <div className={`projects-title three`}>{project}</div>
                <div className={`projects-time three`}>
                    {languageUsed}
                    <div>
                    <IonIcon slot="start" ios={iosIcon} md={mdIcon} className="project-icon" />
                    </div>
                </div>
                <div className={`projects-desc three`}>{description}</div>
                <div className='projects-btn-container'>
                    <button 
                        onClick={() => {
                            setClicked(!clicked)
                            setTimeout(() => window.open(url, "blank"), 350)
                            
                        }}
                        className={`three ${clicked ? 'clicked' : 'projects-btn'}`}
                        type='button'
                    >
                        <div id='github'>GitHub</div>
                        <div>
                            <img src={projectIcon} alt='project-type' id='project-img'></img>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
  };
  
  export default ProjectsContainer;