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
          {/* Background section */}
          <section class="bsb-timeline-1 py-5 py-xl-8">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-10 col-md-8 col-xl-6">

                  <ul id="timelineLine" class="timeline">
                    <li class="timeline-item">
                      <div class="timeline-body">
                        <div class="timeline-content">
                          <div class="card border-0">
                            <div class="card-body p-2">
                              <h5 class="card-subtitle text-secondary m-2">2019</h5>
                              <p class="card-text mb-2">Didn't own a laptop at the time. Become interested in programming and start learning C++ on an android compiler.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="timeline-item">
                      <div class="timeline-body">
                        <div class="timeline-content">
                          <div class="card border-0">
                            <div class="card-body p-2">
                              <h5 class="card-subtitle text-secondary m-2">2020</h5>
                              <p class="card-text mb-2">Take my first C++ class as an Electrical Engineering student. Absolutely fall in love with coding and decide to switch majors!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="timeline-item">
                      <div class="timeline-body">
                        <div class="timeline-content">
                          <div class="card border-0">
                            <div class="card-body p-2">
                              <h5 class="card-subtitle text-secondary m-2">2022</h5>
                              <p class="card-text mb-2">Build my first "hangman" website. Start researching web dev and gaming frameworks to build small projects.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="timeline-item">
                      <div class="timeline-body">
                        <div class="timeline-content">
                          <div class="card border-0">
                            <div class="card-body p-2">
                              <h5 class="card-subtitle text-secondary m-2">2023</h5>
                              <p class="card-text mb-2">Get my first CS related job as a Data Structures and Algorithms tutor and become a pro at solving coding challenges.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li class="timeline-item">
                      <div class="timeline-body">
                        <div class="timeline-content">
                          <div class="card border-0">
                            <div class="card-body p-2">
                              <h5 class="card-subtitle text-secondary m-2">Summer 2024</h5>
                              <p class="card-text mb-2">
                                <li><p className='Main-point m-0'>Graduate as a Computer Engineer</p><li>University of Texas Rio Grande Valley</li><li>Magna Cum Laude</li><li>GPA: 3.87</li></li>
                                <br></br><li><p className='Main-point m-0'>Get my first programming job</p><li>AI Training Coder at Outlier.AI</li></li>
                                <br></br><li><p className='Main-point m-0'>Obtain Certifications</p><li>Codepath's Technical Interview Prep</li></li>
                                <br></br><li><p className='Main-point m-0'>Become a Software Engineering Fellow</p><li>Headstarter AI</li></li>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li id="timeline" class="timeline-item">
                      <div class="timeline-body">
                        <div class="timeline-content">
                          <div class="card border-0">
                            <div class="card-body p-2">
                              <h5 class="card-subtitle text-secondary m-2">Fall 2024</h5>
                              <h2 class="card-title mb-3">Next Milestone</h2>
                              <p class="card-text mb-2">Land a Software Engineering role and become an AI Engineer!</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </section>
        </Tab>

        <Tab eventKey="resume" title="Resume" className="Tab">
          <p>Current resume:</p>
          <p style={{fontSize: "10px"}}>This page is still in progress, so resume may not display correctly!</p>
          <div>
            <iframe title="resume" width="100%" height="500px" alt="karla zamora resume" className="Resume-pic p-2 w-screen h-screen" src={resumeFile} />
          </div>
        </Tab>

        <Tab eventKey="projects" title="Projects" className="Tab">
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
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/JHTNLbtLkgE?si=4nWJkJa1cxusrNk9"
                title="Projourney"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </Container>
          <br></br>
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
                width="100%"
                height="480"
                src="https://www.youtube.com/embed/1uHQf6Az5bU?si=ePAwadKahHun9guH"
                title="Annotator"
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
