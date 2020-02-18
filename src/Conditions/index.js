import React from 'react'

class Condition extends React.Component{
    render(){

        const age = 18;

         if(age >= 18){
             return <h1>Eligible to vote!</h1>
         }else{
             return <h1>not eligible!</h1>
         }

    }
}

export default Condition;