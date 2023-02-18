import React from 'react';
import '../styles/preloader.css';

function Preloader() {
  return (
    <div className='loader-container'>
      <div className='circle'></div>
      <div className='square'></div>
      <div className='circle'></div>
    </div>
  );
}

export default Preloader;
