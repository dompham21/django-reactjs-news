import React from 'react'

import Router from './routes/index';
import ScrollToTop from './Components/ScrollToTop';
import NotistackProvider from './Components/NotistackProvider';
import NotiToastContainer from './Components/NotiToastContainer';

function App() {
  return (
    <NotistackProvider>
        <ScrollToTop/>
        <Router/>
        <NotiToastContainer/>
    </NotistackProvider>
  )
}

export default App
