import { useRef, useEffect } from 'react';

import Box from '@material-ui/core/Box';

import code_image from './images/code_image.jpg';
import foa_image from './images/foa.png';
import hearts_image from './images/hearts.png';
import big_heart_image from './images/big_heart.png';
import ordinary_image from './images/ordinary.png';
import gallery_image from './images/gallery.jpg';
import error_popup_gif from './images/error_popup.gif';
import rant_image from './images/rant.png';
import still_image from './images/still.png';
import './App.css';

function App() {

  const divRef = useRef(null);

  useEffect(() => {
    setTimeout(function() { 
      divRef.current.scrollIntoView({ behavior: 'smooth' });
    }.bind(this), 2000)
  });

  return (
    <div className="App">
        <Box display="flex" justifyContent="center">
          <div style={{ width: '100%' }}>
            <Box display="flex" justifyContent="center" m={1} p={1}>
              <Box p={1}>
                <Box display='flex'>  
                  <Box justifyContent="flex-end" height={1}>
                    <text className="willieText">willie</text>
                  </Box>
                  <img src={code_image} className="code-image"/>
                  <img src={error_popup_gif} className='fish'/>
                </Box>
                <Box mt={30} width="100%" justifyContent="center">
                  <Box display="flex" justifyContent="center" p={1} m={1}>
                    <div ref={divRef}/>
                    <img src={gallery_image} className='gallery-image'/>
                  </Box>
                  <Box display="flex" justifyContent="center">
                    <Box>
                      <text className="infoText">sketches come in hoodies</text>
                      <br/>
                      <text className="infoText">to order text 720.251.6343</text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display="flex"justifyContent="center">
              <Box p={1} width={3/4} mt={5}>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={foa_image} className="design-image-large"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1} >
                  <Box p={1}>
                    <img src={big_heart_image} className="image-large"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={hearts_image} className="App-logo"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={still_image} className="image-large"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={rant_image} className="image-large"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={1}>
                    <img src={ordinary_image} className="design-image"/>
                  </Box>
                </Box>
                <Box display="flex" justifyContent="center" m={1} p={1}>
                  <Box p={5}>
                    <text className="thankYouText">thank you</text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </div>
        </Box>
    </div>
  );
}

export default App;
