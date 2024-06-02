import './styles/styles.scss';
import './wdyr';

import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DocumentTitleProvider } from './contexts/document-title/document-title.context';
import { LoadingProvider } from './contexts/loading/Loading.context';
import NotFoundPage from './pages/not-found/NotFound.page';
import PopulationTrendPage from './pages/population-trend/PopulationTrend.page';

function App() {
  return (
    <BrowserRouter>
      <DocumentTitleProvider>
        <LoadingProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/population-trend" />} />
            <Route path="/population-trend" element={<PopulationTrendPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/*" element={<Navigate to="/404" />} />
          </Routes>
        </LoadingProvider>
      </DocumentTitleProvider>
    </BrowserRouter>
  );
}

export default App;
