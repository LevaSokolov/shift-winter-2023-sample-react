import React from 'react';
import { Link } from 'react-router-dom';
import MainGameplay from './MainGameplay';

function MainPage() {
  return (
    <div className='main'>
      <header className='header'>
        <Link to='/'>
          <div className='logo'></div>
        </Link>
        <div className='submenu'>
          <div className='play'>Играть</div>
          <div className='about'>Об игре</div>
        </div>
      </header>
      <div className='rectrangle-top'>САМЫХ УДАЧЛИВЫХ ждет суперприз в игре за первое место!</div>
      <div className='background_image'>
        <div className='container'>
          <div className='title-container'>
            <div className='title'>Испытай удачу!</div>
            <div className='caption'>В борьбе с искусственным интеллектом</div>
          </div>
          <div className='button-container'>
            <div className='button'>Играть сейчас</div>
            <div className='button'>Читать правила</div>
          </div>
        </div>
      </div>
      <div className='body-container'>
        <MainGameplay />
      </div>
      <footer className='footer'>
        <div className='footer_container'>
          <div className='footer-logo'></div>
          <div className='icon-container'>
            <div className='facebook'></div>
            <div className='instagram'></div>
            <div className='in'></div>
          </div>
        </div>
        <div className='copyright'>
          © 2023 por Rodrigo Oliveira. Orgulhosamente criado com Wix.com
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
