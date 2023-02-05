import React from 'react';

function GameplayButtons() {
  return (
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
  );
}

export default GameplayButtons;
