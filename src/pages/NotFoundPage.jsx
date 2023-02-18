import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className='main' style={{ marginTop: '260px' }}>
    <div style={{ fontSize: '40px' }}>PAGE NOT FOUND...</div>
    <Link to='/'>
      <button style={{ width: '200px', height: '100px', fontSize: '40px' }}>GO BACK</button>
    </Link>
  </div>
);
export default NotFoundPage;
