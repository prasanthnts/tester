import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Condition from './Conditions'
import NewButton from './Bootstrap/Button'

class App extends React.Component{
  render(){
    return (
    <div className="container">
       <div className="row">
         <div className='col-md-12'>

              <NewButton ButtonName = 'Primary'/>
              <NewButton ButtonName = 'Danger' variant='danger'/>
              <NewButton ButtonName = 'Success' variant='success'/>
              <NewButton ButtonName = 'Info' variant='info'/>
              <NewButton ButtonName = 'Dark' variant='dark'/>



         </div>
      </div>
    </div>
    )
  }
}


export default App;
