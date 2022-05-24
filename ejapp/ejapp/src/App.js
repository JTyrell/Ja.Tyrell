import React from 'react';
import Navbar from './Comp/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Comp/Footer';
import Home from './Comp/pages/Home';
import Trips from './Comp/pages/Trips';
import Products from './Comp/pages/Products';
import SignUp from './Comp/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <div>
        <Navbar />
          <Routes>
            <Route path='/homes' exact component={Home} />
            <Route path='/trips' component={Trips} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
          </Routes>
          <Footer />
            </div>
      </Router>
    </>
  );
}

export default App;