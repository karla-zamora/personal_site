import './App.css';
import TabSection from './app-body/tabSection.js';
import HeaderSection from './app-body/headerSection.js';

import "bootstrap/dist/css/bootstrap.min.css"
import Stack from 'react-bootstrap/Stack';



function App() {
  return (
    <div className="App">
      <Stack className="App-stack">
        <div className="App-header p-4" align="center">
            <HeaderSection/>
        </div>

        <div id='tab-section'>
          <TabSection />
        </div>

        <div className='Free-zone'>
          <br></br>
          <br></br>
        </div>
      </Stack>

    </div>
  );
}

export default App;
