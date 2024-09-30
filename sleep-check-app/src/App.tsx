import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import SleepCheckSheetPage from './pages/SleepCheckSheetPage';
import Header from './shared/component/Header';
import SleepDairyPage from './pages/SleepDairyPage';
import SleepTipsPage from './pages/SleepTipsPage';
import AISSelfCheckPage from './pages/AISSelfCheckPage';
import Footer from './shared/component/Footer';

function App() {
  return (
    <>
    <Header />
    <div className='w-full'>
      <Routes>
        <Route path='/sleep-check-app' element={<Dashboard />} />
        <Route path='/sleep-check-app/sleep-check-sheet' element={<SleepCheckSheetPage />} />
        <Route path='/sleep-check-app/sleep-dairy' element={<SleepDairyPage />} />
        <Route path='/sleep-check-app/sleep-tips' element={<SleepTipsPage />} />
        <Route path='/sleep-check-app/ais-self-check' element={<AISSelfCheckPage />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
