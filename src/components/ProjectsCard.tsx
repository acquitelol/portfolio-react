interface Props {
    language: string;
    timeUsed: string;
    project: string;
    description: string;
}

const ProjectsContainer: React.FC<Props> = ( { language, timeUsed, project, description}) => {
    return (
        <div className='projects-card'>
            <div id='projects-card'>
                <div className={`projects-title three`}>{language}</div>
                <div className={`projects-time three`}>{timeUsed}</div>
                <div className={`projects-desc three`}>{description}</div>
                <input 
                    className={`projects-btn three`}
                    type='button'
                    onClick={() => {document.location.href = project}}
                    value="GitHub"
                >
                </input>
            </div>
        </div>
    );
  };
  
  export default ProjectsContainer;