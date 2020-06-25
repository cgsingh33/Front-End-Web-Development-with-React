import React, { Component } from 'react';
import './App.css';
import Main from './components/MainContainer'
import { BrowserRouter } from 'react-router-dom'
 
class App extends Component {
  render(props){
  return (
    <BrowserRouter>
      <div> 
        <Main />
      </div>
    </BrowserRouter>
    
  )
  }
}

export default App;
