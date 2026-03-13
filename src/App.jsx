import { useState } from 'react'
import { HashRouter, Route, Routes } from "react-router-dom";

// Layout
import Header from './features/layout/components/Header';
import { Footer } from './features/layout/components/Footer';
import Content from './features/layout/components/Content';

// Auth
import Myaccount from './features/auth/components/Myaccount';
import Mybuys from './features/auth/components/Mybuys';
import Myfavorities from './features/auth/components/Myfavorities';

// Articles
import Articles from "/src/features/articles/components/Articles.jsx";
import Offers from './features/articles/components/Offers';

// Carrito
import { CartProvider } from './shared/carrito';

function App() {
  return (
    <CartProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/myaccount' element={<Myaccount />} />
          <Route path='/mybuys' element={<Mybuys />} />
          <Route path='/myfavorites' element={<Myfavorities />} />
        </Routes>
        <Footer />
      </HashRouter>
    </CartProvider>
  )
}

export default App