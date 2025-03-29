import "bootstrap/dist/css/bootstrap.min.css"
import './HeaderSection.css'
import profilepic from "../images/gold ring.png";
import linkedinLogo from "../images/linkedin-logo.png"
import githubLogo from "../images/github-logo.png"


import Stack from 'react-bootstrap/Stack';

function HeaderSection() {
    return (
        <Stack>
            <div className="p-4">
                <img src={profilepic} className="App-logo" alt="karla zamora" />
            </div>
            <h3 className="mb-0">Karla I. Zamora</h3>
            <p className="sm" style={{fontSize: "1rem"}}>Frontend Developer - Aspiring Software Engineer</p>

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
