import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className='main'>
    <div>PAGE NOT FOUND...</div>
    <Link to='/'>
      <Button className='button'>GO BACK</Button>
    </Link>
  </div>
);
export default NotFoundPage;
