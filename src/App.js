import React from 'react';
import './App.css';

import MyCard from './Cards'
import Clock from './Clock/Clock'
import Header from './Header'
import Counter from './Counter'

class App extends React.Component{

  render(){

  
    return (
    <div className="container">
      <Header/>
      {/* <MyCard/>
      <Clock/> */}
      <Counter/>
    </div>
    )
}
}


export default App;
