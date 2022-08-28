import './App.css';
import { useState } from 'react'
import Pfp from './components/pfp.js'
import Img from './components/img.js'

// img = { type: num[0,1], posFromTop: num[5-95], posFromLeft: num[5-95], rotationDeg: num[0-360]};

function App({ centerText, images }) {
  const [ img, AddImg ] = useState([]);

  const newImg = () => {
    let nImg = {};

    if(images.files.length) // no point assigning an image a type of 1 if there are no discord messages
      nImg.type  = Math.floor(Math.random()  + 0.5); // 0 for pfp, 1 for random discord message
    else
      nImg.type = 0;

    nImg.top   = Math.floor((Math.random() * 100))-5;
    nImg.left  = Math.floor((Math.random() * 100))-5;
    nImg.rotat = Math.floor((Math.random() * 360));

    if(nImg.type === 0)
      nImg.image = images.pfp;
    else
      nImg.image = images.files[Math.floor(Math.random() * images.files.length)];
    AddImg([...img, nImg]);
  }

  return (
    <div className="App" onClick={newImg} onContextMenu={e => e.preventDefault()}>
      <p>{centerText}</p>
      {
        img.map((data, index) => {
          if(data.type === 0)
            return <Pfp key={index} data={data} /> 
          return <Img key={index} data={data} />
        })
      }
    </div>
  );
}

export default App;
