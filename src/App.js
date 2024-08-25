import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import AikidoKidsPage from './pages/AikidoKidsPage';
import AikidoPage from './pages/AikidoPage';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import HorariosPage from './pages/HorariosPage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/EventosPage';

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aikido" element={<AikidoPage />} />
          <Route path="/aikidoKids" element={<AikidoKidsPage />} />
          <Route path="/horarios" element={<HorariosPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/eventos" element={<NovedadesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

        <Footer />
        
    </div>
  );
}

export default App;
