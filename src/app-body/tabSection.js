import './tabSection.css'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TabSection() {
    return (
        <div>
            <Tabs
            defaultActiveKey="background"
            id="main-tabs"
            className="mb-3 sticky-tabs"
            justify
          >
            <Tab eventKey="background" title="Background">
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
  