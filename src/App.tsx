import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import { LEVELS } from './constants/level';
import PageWrapper from './PageWrapper';
import React from 'react';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {LEVELS.map((level) => (
        <Route
          key={level.key}
          path={level.path}
          element={
            <PageWrapper pageKey={level.key}>
              {React.createElement(level.page)}
            </PageWrapper>
          }
        />
      ))}
    </Routes>
  );
}

export default App;
