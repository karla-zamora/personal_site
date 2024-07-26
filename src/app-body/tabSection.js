import './tabSection.css'
import { useEffect, useRef, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabSection() {
  // return to top of tab when switching tabs
  const [activeKey, setActiveKey] = useState('background');
  const tabsRef = useRef(null);
  useEffect(() => {
    if (tabsRef.current) {
      tabsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeKey]);

    return (      
        <div>
          <div id="start-of-tabs-reference" ref = {tabsRef}></div>
            <Tabs
            defaultActiveKey="background"
            id="main-tabs"
            className="mb-3 sticky-tabs"
            justify
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
          >
            <Tab eventKey="background" title="Background" className="Tab">
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
            <Tab eventKey="resume" title="Resume">
              Tab content for Profile
            </Tab>
            <Tab eventKey="projects" title="Projects">
              Tab content for Loooonger Tab
            </Tab>
            <Tab eventKey="contact" title="Contact">
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
        </div>
    );
  }
  
  export default TabSection;
  