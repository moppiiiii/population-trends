import './styles/styles.scss';
import './wdyr';

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import NotFoundPage from './pages/not-found/NotFound.page';
import PopulationTrendPage from './pages/population-trend/PopulationTrend.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/population-trend" />} />
        <Route path="/population-trend" element={<PopulationTrendPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
