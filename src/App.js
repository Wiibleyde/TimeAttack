import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import Error from './components/Error';
import Live from './components/Live';
// import ListRacer from './components/ListRacer';
// import EditRacer from './components/EditRacer';

function App() {
    return (
        <BrowserRouter>
          <div className="bgColor">
              <Header />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/*" element={<Error />} />
                  <Route path="/live" element={<Live />} />
                  {/* <Route path="/leaderboard" element={<ListRacer />} />
                  <Route path="/addTiming" element={<EditRacer />} /> */}
              </Routes>
              <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;