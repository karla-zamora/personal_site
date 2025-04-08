import { useState, useEffect } from 'react';
import resumePic from '../../images/resume-pic.jpg';

export default function Resume({ resumeFile }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <p>Current resume:</p>
      <div className="text-center d-flex flex-column align-items-center">
        {!isMobile ? (
          <iframe 
            title="resume"
            width="100%"
            style={{
              height: "75rem",
              width: "55rem",
              maxWidth: "90vw",
              border: "none",
            }}
            alt="karla zamora resume" 
            className="Resume-pic p-2 w-screen h-screen" src={resumeFile ? `${resumeFile}?#zoom=100&scrollbar=1&toolbar=1&navpanes=0` : ""} />
        ) : (
          <img src={resumePic} width="90%" alt="karla zamora resume" />
        )}
        <button onClick={() => window.open(resumeFile, '_blank')}>Open Resume</button>
      </div>
    </div>
  );
}
