import {useState} from 'react'

// const delay = (ms:number) => new Promise(
//     resolve => setTimeout(resolve, ms)
// );


const Typewriter: React.FC = () => {
  const [typewriterContent] = useState("front-end developer.")
  return (
    <strong className='header-strong'> {typewriterContent} </strong>
  );
};

export default Typewriter;


