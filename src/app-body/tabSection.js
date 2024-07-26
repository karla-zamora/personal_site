import resumePic from '../images/karla-zamora-resume.jpg';

import './tabSection.css'
import { useEffect, useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Carousel from 'react-bootstrap/Carousel';


function TabSection() {
  // return to top of tab when switching tabs
  const [activeKey, setActiveKey] = useState(null);
  const tabsRef = useRef(null);
  useEffect(() => {
    if (tabsRef.current) {
      tabsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeKey]);

  // projects array for easier storage
  const projectPic = 'https://colourlex.com/wp-content/uploads/2021/02/vine-black-painted-swatch.jpg';
  const projectAlt = 'tempAlt';

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
                              <p class="card-text mb-2">Graduate as a Computer Engineer. Get my first programming job at Outlier.AI, obtain certifications from Codepath's technical courses, and become a SWE fellow at Headstarter AI.</p>
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
          <div>
            <a href={resumePic} target="_blank"
              rel="noopener noreferrer" align='right'>
              <img src={resumePic} alt="karla zamora resume" className='Resume-pic p-2' />
            </a>
          </div>


        </Tab>
        <Tab eventKey="projects" title="Projects" className="Tab">
          <Carousel id="project-crl">
            <Carousel.Item>
              <img src={projectPic} alt={projectAlt}/>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={projectPic} alt={projectAlt} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Tab>

        <Tab eventKey="contact" title="Contact" className="Tab">
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
          <p>Nice to meet you!</p>
        </Tab>
      </Tabs>
      <div className='Tab-Free-zone'>
        <hr></hr>
      </div>
    </div>
  );
}

export default TabSection;
