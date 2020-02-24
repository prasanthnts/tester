import React from 'react'
import Button from 'react-bootstrap/Button';

// class NewButton  extends React.Component{
//     render(){
//         return(
//       <Button variant={this.props.variant}>{this.props.ButtonName}</Button>
//         )
//     }
// }

const NewButton = (props) => {
    return  (
<div>
    <Button variant={props.variant}>{props.ButtonName}</Button>
{props.children}

    </div>
    )
}

export default NewButton