//import resumePic from '../images/karla-zamora-resume.jpg';
//carousel image size: 848 x 480

import './TabSection.css'
import { useEffect, useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ContactForm from './ContactForm';

// Sections
import Background from './Sections/Background';
import Resume from './Sections/Resume';
import Projects from './Sections/Projects';

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
          <Projects/>
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
