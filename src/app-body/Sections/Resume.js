import { useState } from 'react';

export default function Resume({ resumeFile }) {
  const [isMobile] = useState(window.innerWidth < 992);

  return (
    <div>
      <p>Current resume:</p>
      <div>
        {!isMobile ? (
          <iframe 
            title="resume"
            width="100%"
            style={{
              height: "75rem",
              border: "none",
            }}
            alt="karla zamora resume" 
            className="Resume-pic p-2 w-screen h-screen" src={resumeFile ? `${resumeFile}?#zoom=100&scrollbar=1&toolbar=1&navpanes=0` : ""} />
        ) : (
          <iframe
            title="resume"
            className="w-100"
            style={{
              height: "130vw",
              border: "none",
            }}
            src={`https://docs.google.com/gview?url=${encodeURIComponent(resumeFile)}&embedded=true`}
          />
        )}
      </div>
    </div>
  );
}
