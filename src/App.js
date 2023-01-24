import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import BooksContainer from './components/Books/BooksContainer';
import Categories from './components/Categories/Categories';
import Navbar from './components/Navbar/Navbar';
import store from './redux/configureStore';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Provider store={store}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={(<BooksContainer />)} />
              <Route path="/Categories" element={(<Categories />)} />
            </Routes>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
