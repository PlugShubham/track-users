import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Routes from './components/routes/routes';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends Component {
  render() {
    const initialState = {};
    const middleware = [thunk];
    const store = createStore(rootReducer,initialState,applyMiddleware(...middleware));
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Routes />
            <Footer />
          </div>
        </Router>
      </Provider>      
    );
  }   
}

export default App;
