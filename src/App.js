import React, { Component } from 'react';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import Quote from './components/Quote';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
