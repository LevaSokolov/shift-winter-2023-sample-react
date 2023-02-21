import React from 'react';
import '../styles/resultAlert.css';

function SuccesAlert() {
  return (
    <div className='result-container'>
      <div className='win-logo'></div>
      <div className='result-title'>Поздравляем с победой!</div>
      <div className='result-button-container'>
        <button className='play-again-button'>Играть ещё раз</button>
        <button className='watch-stat-button'>Смотреть статистику</button>
      </div>
    </div>
  );
}

export default SuccesAlert;
