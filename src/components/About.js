import profileImage from './Assest/profile.png'
import cPlusPlus from './Assest/C++.png'
import html from './Assest/html.png'
import css from './Assest/css-3 (1).png'
import js from './Assest/JS (1).png'
import jQuery from './Assest/jquery-removebg-preview.png'
import react from './Assest/atom.png'
import bootstrap from './Assest/what-is-bootstrap-logo.png'
function About(){
    return(
        
    <div className="about-content">
    <h1>About Me</h1>
   <div className="about-section">
    <div className="about-me">
        <p>Hi Everyone, I am <span>Kshitij Gupta</span> from <span>Bhopal, India</span>.<br/>
           I have done my graduation from Technocrats Institue of Technology specialization with computer
           science engineering.<br/>
           I am fluent in classics like C++, Javascript.<br/><br/>
           Apart from coding, some other activities that i love to do! <br/><br/> 
           <i className="fas fa-hand-point-right"></i> Playing cricket <br/> 
           <i className="fas fa-hand-point-right"></i> Travelling <br/>
           <i className="fas fa-hand-point-right"></i> Listning music
        </p>
    </div>
    <div className="about-img">
        <img src={profileImage} alt="profile"/>
    </div>
   </div>

   <div className="skills-section">
     <h1>Professional <span>Skillset</span></h1>
      <div className="skills">
         <div className="c++ skill">
            <img src={cPlusPlus} alt="C++"/>
         </div>
         <div className="html skill">
            <img src={html} alt="html"/>
         </div>
         <div className="css skill">
            <img src={css} alt="css"/>
         </div>
         <div className="js skill">
            <img src={js} alt="js"/>
         </div>
         <div className="js skill">
            <img src={bootstrap} alt="js"/>
         </div>
         <div className="jquery skill">
            <img src={jQuery} alt="jquery"/>
         </div>
         <div className="react skill">
            <img src={react} alt="react"/>
         </div>
      </div>
   </div>
</div>

    )
} 

export default About;