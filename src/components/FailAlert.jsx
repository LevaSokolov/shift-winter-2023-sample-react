import React from 'react';
import '../styles/resultAlert.css';

function FailAlert() {
  return (
    <div className='result-container'>
      <div className='fail-logo'></div>
      <div className='result-title'>К сожалению, вы проиграли</div>
      <div className='result-button-container'>
        <button className='play-again-button'>Играть ещё раз</button>
        <button className='watch-stat-button'>Смотреть статистику</button>
      </div>
    </div>
  );
}

export default FailAlert;
