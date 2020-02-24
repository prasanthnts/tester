import React from 'react'

class Condition extends React.Component{
    render(){

        const age = 18;
        var element = '';

         if(age >= 18){
           element = <h1>Eligible to vote!</h1>
         }else{
            element =  <h1>not eligible!</h1>
         }

         return element

    }
}

export default Condition;