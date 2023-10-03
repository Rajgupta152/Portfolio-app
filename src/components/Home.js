import { useEffect, useState } from 'react';
import coderImage from '../components/Assest/pngwing.com.png'
function Home(){

    //Typewrite effect
    const [index, setIndex] = useState(0);
    const [textContent, setTextContent] = useState('');
  
    useEffect(() => {
      const texts = ['Web Developer', 'Software Developer', 'Freelancer'];
      let currentIndex = index;
      let text = texts[currentIndex];
      let textIndex = 1;  
      const typeWriter = () => {
        if (textIndex <= text.length) {
          setTextContent(text.slice(0, textIndex));
          textIndex++;
        } else {
          // Pause for a moment before clearing the text
          setTimeout(() => {
            textIndex = 1;
            setTextContent('');
  
            // Move to the next text or loop back to the first one
            currentIndex = (currentIndex + 1) % texts.length;
            text = texts[currentIndex];
  
            // Set the index and trigger the typing animation again
            setIndex(currentIndex);
            typeWriter();
          }, 1000); // Pause for 1 second before switching text
          return; // Exit the function to avoid scheduling multiple timers
        }
  
        setTimeout(typeWriter, 100); // Type one character every 100ms
      };
  
      // Start the typing animation when the component mounts
      typeWriter();
  
      // Clean up the timeout when the component unmounts
    //   return () => clearTimeout(timeoutId);
    }, [index]);

    return(
        <div className="home-content">
        <div className="intro">
            <div className="intro-content">
                <h1 className="gesture-heading heading">Hi There! <span>👋🏻</span></h1>
                <h1 className="name-heading heading">I'M <span>KSHITIJ GUPTA</span></h1>
                <h1 className="profession-heading heading"><span>{textContent}</span></h1>
                <div className='quotes'>
                <p className='quoet'>Programming isn't about what you know it's about what you can figure out. - <span> Chris Pine</span></p>
                </div>
            </div>
            <div className="intro-image">
                <img src={coderImage} alt="coder"/>
            </div>
        </div>

        <div className='social-accounts-section'>
          <div className='social-accounts-heading'>
            FIND ME ON
          </div>
          <div className='social-accounts-desc'>
            Feel free to <span>connect</span> with me
          </div>
        <div className='social-accounts'>
          <div className='social-icons-circle'><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook" style={{color: '#ce2547f3'}}/></a></div>
          <div className='social-icons-circle'><a href="https://www.instagram.com/"><i className="fa-brands fa-instagram" style={{color: '#ce2547f3'}}></i></a></div>
          <div className='social-icons-circle'><a href="https://twitter.com/i/flow/login"><i className="fa-brands fa-twitter" style={{color: '#ce2547f3'}} ></i></a></div>
          <div className='social-icons-circle'><a href="https://www.linkedin.com/"><i className="fa-brands fa-linkedin" style={{color: '#ce2547f3'}} ></i></a></div>
        </div>
        </div>
    </div>
    )
}
export default Home