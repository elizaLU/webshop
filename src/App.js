import React from 'react';
import './App.css';
import Home from './components/Home'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Webshop</h1>
      <Home />
    </div>
    </Provider>
  );
}

export default App;
