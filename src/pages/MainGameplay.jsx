import React from 'react';
import GameplayButtons from '../components/GameplayButtons';
import Preloader from '../components/Preloader';
import '../styles/mainGameplay.css';

function MainGameplay() {
  return (
    <div>
      <div className='body-title'>Ваш выбор:</div>
      <GameplayButtons />
      <Preloader />
      {/* <div className='body-title'>Выбор противника:</div> */}
      {/* <GameplayButtons /> */}
    </div>
  );
}

export default MainGameplay;

// {isLoading && <Preloader />}
