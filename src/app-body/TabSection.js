//import resumePic from '../images/karla-zamora-resume.jpg';
//carousel image size: 848 x 480
import eraserBotVid from '../images/eraser-bot/eraser-bot-video.gif';
import eraserBotPCB from '../images/eraser-bot/eraser-bot-pcb-real.png';
import ereaserBotBase from '../images/eraser-bot/eraser-bot-base.png';

import './TabSection.css'
import { useEffect, useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';
import ContactForm from './ContactForm';
import Container from 'react-bootstrap/Container'

// Sections
import Background from './Sections/Background';
import Resume from './Sections/Resume';

function TabSection() {
  // return to top of tab when switching tabs
  const [activeKey, setActiveKey] = useState(null);
  const tabsRef = useRef(null);
  useEffect(() => {
    if (tabsRef.current) {
      tabsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeKey]);

  // Resume file link: 
  const resumeFile = "https://karla-zamora-bucket.s3.us-east-2.amazonaws.com/Karla+Zamora+Resume.pdf"


  return (
    <div>
      <div id="start-of-tabs-reference" ref={tabsRef}></div>
      <Tabs
        id="main-tabs"
        className="mb-3 sticky-tabs"
        justify
        activeKey={activeKey}
        onSelect={(k) => setActiveKey(k)}
      >
        <Tab eventKey="background" title="Background" className="Tab">
          <Background />
        </Tab>

        <Tab eventKey="resume" title="Resume" className="Tab">
          <Resume resumeFile={resumeFile} />
        </Tab>

        <Tab eventKey="projects" title="Projects" className="Tab">
          <br></br>

          {/* Annotator */}
          <Container>
            <h2 className='p-2'>AI Transcript Annotator - Hackathon Winner &#127942;</h2>
            <div>
              <p>Next.js, React, Typescript, DynamoDB, Gemini AI, shadcn/Tailwind CSS</p>
            </div>
            <div style={{ width: '80%', margin: '0 auto', maxWidth: '848px' }}>
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/1uHQf6Az5bU?si=ePAwadKahHun9guH"
                title="Annotator"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </Container>
          <br></br>
          <br></br>


          {/* Projourney */}
          <Container>
            <h2 className='p-2'>{"ProJourney - DSA learning platform (in progress)"}</h2>
            <div>
              <p>Next.js, React, Javascript, Postgres, Tailwind CSS</p>
            </div>
            <div style={{ width: '80%', margin: '0 auto', maxWidth: '848px' }}>
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/JHTNLbtLkgE?si=4nWJkJa1cxusrNk9"
                title="Projourney"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </Container>
          <br></br>
          <br></br>

          {/* Eraser Bot */}
          <Container>
            <h2 className='p-2'>Autonomous Whiteboard Eraser Bot</h2>
            <Carousel id="EraserBot" interval={16000}>
              <Carousel.Item>
                <div>
                  <p>C++, Dart (Flutter)</p>
                </div>
                <img src={eraserBotVid} alt='karla zamora eraser bot gif' className='project-image' style={{ width: '80%', height: 'auto', maxWidth: '848px' }} />
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <p>Custom PCB:</p>
                </div>
                <img src={eraserBotPCB} alt='karla zamora eraser bot pcb' className='project-image' style={{ width: '80%', height: 'auto', maxWidth: '848px' }} />
              </Carousel.Item>
              <Carousel.Item>
                <div>
                  <p>3D printed base:</p>
                </div>
                <img src={ereaserBotBase} alt='karla zamora eraser bot pcb' className='project-image' style={{ width: '80%', height: 'auto', maxWidth: '848px' }} />
              </Carousel.Item>
            </Carousel>
            <h3 className="p-2 mt-3" style={{ color: '#5C5470' }}>More coming soon!</h3>
          </Container>


        </Tab>

        <Tab eventKey="contact" title="Contact" className="Tab">
          <ContactForm />
        </Tab>
      </Tabs>
      <div className='Tab-Free-zone'>
        <hr></hr>
      </div>
    </div>
  );
}

export default TabSection;
