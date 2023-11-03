import React from 'react'
import '/styles/AppHomeContent.css'
const AppHomeSection = () => {
  return (
    <section className="home">
        <div className="home-content">
            <h1>Hi, I'm Vinay Kumar Yadav</h1>
            <h3>Deep Learning Engineer</h3>
            <p>
            I am a results-driven deep learning engineer with a strong foundation in machine learning and computer vision. My expertise lies in optimizing algorithms, developing modular software, and leveraging cloud technologies for scalable solutions. I excel in collaborative environments, am a quick learner, and am committed to delivering excellence. Let's connect and explore how I can contribute to your team's success.
            </p>
            <div className="btn-box">
                <a href="#">Hire Me</a>
                <a href="#">Let's Talk</a>
            </div>
            <div className="resume">
              <a href="https://drive.google.com/file/d/1_piKkDchG7EDNnTpotnlzZ59uUMsgB22/view"  target="_blank" rel="noopener noreferrer"><>Download My Resume</></a>
            </div> 
        </div>
        <div className="home-sci">
          
            <a href="https://www.linkedin.com/in/vky18" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile"><i className='bx bxl-linkedin'></i></a>
            <a href="https://www.github.com/VinayYadava" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'  title="GitHub Profile"></i></a>
        </div> 
            
        <span className="home-imgHover">
        </span>
    </section>
    

  )
}

export default AppHomeSection