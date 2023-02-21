import React from 'react';
import FailAlert from '../components/FailAlert';
import GameplayButtons from '../components/GameplayButtons';
import Preloader from '../components/Preloader';
import SuccesAlert from '../components/SuccesAlert';
import '../styles/mainGameplay.css';

function MainGameplay() {
  return (
    <div>
      <div className='body-title'>Ваш выбор:</div>
      <GameplayButtons />
      {/* <Preloader /> */}
      <div className='body-title'>Выбор противника:</div>
      <GameplayButtons />
      {/* <SuccesAlert /> */}
      {/* <FailAlert /> */}
    </div>
  );
}

export default MainGameplay;

// {isLoading && <Preloader />}
