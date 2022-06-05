
interface Props {
    language: string;
    timeUsed: string;
    project: string;
    description: string;
}

const Page: React.FC<Props> = ( { language, timeUsed, project, description}) => {
    return (
        <div className='about-card'>
            <div id='about-card'>
                <div className={`about-title`}>{language}</div>
                <div className={`about-time`}>{timeUsed}</div>
                <div className={`about-desc`}>{description}</div>
                <input 
                    className={`about-btn`}
                    type='button'
                    onClick={() => {document.location.href = project}}
                    value="GitHub"
                >
                </input>
            </div>
        </div>
    );
  };
  
  export default Page;