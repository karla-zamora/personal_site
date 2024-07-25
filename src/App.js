import './App.css';
import profilepic from "./images/karlazamora-black.png";
import TabSection from './app-body/tabSection.js';

import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';


function App() {
  return (
    <div className="App">
      <Stack className="Header-area">
        <div className="App-header" align="center">
          <div className="Header-content p-2">
            <Stack>
              <div className="Header-content p-4">
                <img src={profilepic} className="App-logo" alt="karla zamora" />
              </div>
              <p>Karla I. Zamora</p>
              <p>Aspiring Software Engineer</p>
              <a
                className="LinkedIn-button"
                href="https://www.linkedin.com/in/karla-itzel-zamora/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Stack>
          </div>

        </div>

        <div>
          <TabSection />
        </div>

        <div>
          <br></br>
          <br></br>
        </div>
      </Stack>

    </div>
  );
}

export default App;
