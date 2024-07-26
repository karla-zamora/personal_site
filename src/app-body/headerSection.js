import "bootstrap/dist/css/bootstrap.min.css"
import './headerSection.css'
import profilepic from "../images/karlazamora-black.png";
import linkedinLogo from "../images/linkedin-logo.png"
import githubLogo from "../images/github-logo.png"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function HeaderSection() {
    return (
        <Stack>
            <div className="p-4">
                <img src={profilepic} className="App-logo" alt="karla zamora" />
            </div>
            <p>Karla I. Zamora<br></br>Aspiring Software Engineer</p>

            <div>
                <a
                    href="https://www.linkedin.com/in/karla-itzel-zamora/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2"
                >
                    <img src={linkedinLogo} className="SocialIcon" alt="karla zamora linkedin"></img>
                </a>

                <a
                    href="https://github.com/karla-zamora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2"
                >
                    <img src={githubLogo} className="SocialIcon" alt="karla zamora github"></img>
                </a>
            </div>

        </Stack>
    );
}

export default HeaderSection;