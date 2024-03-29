import React, { Component } from 'react';
import './App.css';
import Main from './components/MainContainer'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConfigureStore} from './redux/configureStore'

const store = ConfigureStore();

class App extends Component {
  render(props){
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div> 
        <Main />
      </div>
    </BrowserRouter>
    </Provider>
  )
  }
}

export default App;
