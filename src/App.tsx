import './styles/styles.scss';
import './wdyr';

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import PopulationTrendPage from './pages/population-trend/population-trend.page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/population-trend" />} />
        <Route path="/population-trend" element={<PopulationTrendPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
