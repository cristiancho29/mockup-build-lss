//Librerias
import React from 'react';

//Referencias
import './styles/App.css';
import Home from './Home';
import Navbar from './Navbar';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
