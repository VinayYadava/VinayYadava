import React from "react";
import Image from "next/image";
import "/styles/globals.css";
import "/styles/AppHomeContent.css";
import PageHeader from '../Header/PageHeader'

const AppHomeSection = () => {
  return (
    <section className="home">
      <div className="header-margin"><PageHeader /></div>
      <section className="main">

        <section className="main1">
          <div className="main1-content">
            <div className="main-content-dash">
              <h1>Hi, I'm Vinay Kumar Yadav</h1>
              <h3>Deep Learning Engineer</h3>
              <p>
                I am a results-driven deep learning engineer with a strong foundation in machine learning and computer vision. My expertise lies in optimizing algorithms, developing modular software, and leveraging cloud technologies for scalable solutions. I excel in collaborative environments, am a quick learner, and am committed to delivering excellence. Let's connect and explore how I can contribute to your team's success.
              </p>
            </div>
          </div>
          <div>
            <div className="btn-box">
              <a href="#">Hire Me</a>
              <a href="#">Let's Talk</a>
            </div>
            <div className="resume">
              <div className="resume-con">
                <a href="https://drive.google.com/file/d/1_piKkDchG7EDNnTpotnlzZ59uUMsgB22/view" target="_blank" rel="noopener noreferrer"><>Download My Resume</></a>
              </div>
            </div>
            <div className="home-sci">
              <div className="home-sci-icon"><a href="https://www.linkedin.com/in/vky18" target="_blank" rel="noopener noreferrer" title="LinkedIn Profile"><i className='bx bxl-linkedin'></i></a></div>
              <div className="home-sci-icon"><a href="https://www.github.com/VinayYadava" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github' title="GitHub Profile"></i></a></div>
            </div>
          </div>



        </section>

        <section className="main2">

          <Image
            className="main2-img"
            src="/VinayKumarYadav.png"
            width={500}
            height={500}

            alt="My Image"

          />
          <span className="home-mgHover">
          </span>
        </section>
      </section>
      <section className="tech-stack">gfgh</section>
    </section>
  );
};

export default AppHomeSection;
