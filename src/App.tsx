import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import { LEVELS } from './constants/level';
import PageWrapper from './PageWrapper';
import React from 'react';

import './App.scss';

const Logo = () => {
  const navigate = useNavigate();
  return <img src="/logo.png" className='w-32 h-32 mb-4 cursor-pointer' onClick={() => {
    navigate('/')
  }} />
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {LEVELS.map((level, index) => (
        <Route
          key={level.path}
          path={level.path}
          element={
            <PageWrapper pageKey={level.path} activeLevel={index}>
              <div className='flex flex-1 flex-col items-center justify-center px-4 py-2 w-full h-full min-h-[100vh]'>
                <Logo />
                <div className='text-lg mb-16'>
                  Level {index + 1}: {level.title}
                </div>
                {React.createElement(level.page)}
              </div>
            </PageWrapper>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
