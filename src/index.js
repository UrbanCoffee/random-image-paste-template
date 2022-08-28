import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*const images = {};
const centerText = {};
fetch('images/data.json')
  .then(res => res.json())
  .then(data => {
    //console.log(data)
    centerText.txt = data.centerText;
    images.files = data.files;
  }) */
  
const root = ReactDOM.createRoot(document.getElementById('root'));
  
fetch('images/data.json')
  .then(res => res.json())
  .then(data => {
    const images = {
      pfp: data.profilePic,
      files: data.files
    }

    root.render(
      <React.StrictMode>
        <App centerText={data.centerText} images={images}/>
      </React.StrictMode>
    );
  })

/*root.render(
  <React.StrictMode>
    <App centerText={centerText} images={images}/>
  </React.StrictMode>
);*/
