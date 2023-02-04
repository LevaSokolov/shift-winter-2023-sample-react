import React from 'react';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='MainPage' element={<MainPage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
// function App() {
//   return <LandingPage></LandingPage>;
// }

export default App;
