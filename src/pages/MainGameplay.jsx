import React from 'react';
import '../styles/mainGameplay.css';

function MainGameplay() {
  return (
    <div>
      <div className='body-title'>Ваш выбор:</div>
      <div className='gameplay-buttons-container'>
        <div className='gameplay-button'>
          <div className='button-inner-container '>
            <div className='button-rock'></div>
            <div className='button-sign'>камень</div>
          </div>
        </div>
        <div className='gameplay-button'>
          <div className='button-inner-container '>
            <div className='button-scissors'></div>
            <div className='button-sign'>ножницы</div>
          </div>
        </div>
        <div className='gameplay-button'>
          <div className='button-inner-container '>
            <div className='button-paper'></div>
            <div className='button-sign'>бумага</div>
          </div>
        </div>
      </div>
      <div className='body-title'>Выбор противника:</div>
    </div>
  );
}

export default MainGameplay;
