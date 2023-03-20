import React from 'react';
import './App.css';

import { Home, About, Cart, Products, SingleProduct, Error, Checkout } from './pages';
import { Navbar, Footer, Sidebar } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<SingleProduct />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
