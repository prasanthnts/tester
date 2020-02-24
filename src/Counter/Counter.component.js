import React from 'react'
import {Card, Button} from 'react-bootstrap'
// stateless or dumb component

const Counter = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
    <Card.Title>{props.count}</Card.Title>
       
          <Button variant="primary" onClick = {props.increment}>Increment</Button>   &nbsp;
          <Button variant="primary" onClick = {props.decrement}>Decrement</Button>  
        </Card.Body>
      </Card>
    )
}

export default Counter