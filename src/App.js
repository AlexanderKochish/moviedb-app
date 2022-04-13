import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Movie from './components/Movies/Movie';
import Treiler from './components/Treiler/Treiler';

function App() {

return (
    <div className="App">
      <Header/>
      <Treiler/>
      <Movie/>
    </div>
  )
}

export default App;
