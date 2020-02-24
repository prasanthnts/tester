import React from 'react'
import CounterComponent from './Counter.component'

// stateful or smart component

class CounterContainer extends React.Component{
     
   constructor(props){
       super(props);
       this.state = {
           counter : 3
       }

   }

   componentWillMount(){
    console.log('component will mount fired..');
   }

   componentDidMount(){
       console.log('component did mount fired..');
   }

   componentWillUpdate(){
    console.log('component will update fired..');
   }

   componentDidUpdate(){
    console.log('component did update fired..');
   }

  incrementState = (e) => {
      console.log('increment button clicked',e)
      this.setState({
          counter : this.state.counter + 1
      })
  }

  decrementState = (e) => {
    console.log('decrement button clicked',e) 
    this.setState({
        counter : this.state.counter  - 1 
    })
}

    render(){
        const {counter} =  this.state;
        return(
     <CounterComponent count={counter}  increment = {this.incrementState} 
            decrement = {this.decrementState}/>
        )
    }
}

export default  CounterContainer


