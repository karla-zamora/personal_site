import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

// images
import eraserBotVid from '../../images/eraser-bot/eraser-bot-video.gif';
import eraserBotPCB from '../../images/eraser-bot/eraser-bot-pcb-real.png';
import ereaserBotBase from '../../images/eraser-bot/eraser-bot-base.png';

export default function Projects() {

  return (
    <div>
      {/* Annotator */}
      <Container>
            <h2 className='p-2'>AI Transcript Annotator - Hackathon Winner &#127942;</h2>
            <div>
              <p>Next.js, React, Typescript, DynamoDB, Gemini AI, shadcn/Tailwind CSS</p>
            </div>
            <div style={{ width: '80%', margin: '0 auto', maxWidth: '848px' }}>
              <iframe
                className="embed-responsive-item"
                style={{ aspectRatio: '16/9' , width: '100%'}}
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
                style={{ aspectRatio: '16/9' , width: '100%'}}
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
    </div>
  );
}
