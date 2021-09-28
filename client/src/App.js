import React from 'react'

import Router from './routes/index';
import ScrollToTop from './Components/ScrollToTop';
import NotistackProvider from './Components/NotistackProvider';
function App() {
  return (
    <NotistackProvider>
    <>
        <ScrollToTop/>
        <Router/>
    </>
    </NotistackProvider>
  )
}

export default App
