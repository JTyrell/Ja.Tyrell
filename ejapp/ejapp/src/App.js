import React from 'react';
import Navbar from './comp/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Footer from './comp/Footer';
import Home from './comp/pages/Home';
import Trips from './comp/pages/Trips';
import Products from './comp/pages/Products';
import SignUp from './comp/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <div>
        <Navbar />
          <Routes>
            <Route path='/home' exact component={Home} />
            <Route path='/trips' component={Trips} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;