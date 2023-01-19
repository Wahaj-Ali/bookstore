import React, { Component } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import BooksContainer from './components/Books/BooksContainer';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path="/" element={(<BooksContainer />)} />
            <Route path="/Categories" element={(<Categories />)} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
