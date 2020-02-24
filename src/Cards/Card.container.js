import React from 'react';
import MyCard from './Card.component'

class CardContainer extends React.Component{

  render(){

   const data = {
     cards : [
       {
         title: 'card 1',
         text : 'card1 text',
         button : 'card1 button',
         pic:'https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg'
       },
       {
        title: 'card 2',
        text : 'card2 text',
        button : 'card1 button',
        pic:'https://www.homeinspectionmontreal.com/wp-content/uploads/2017/10/winter-preparation.jpg'
      }, 
       {
        title: 'card 3',
        text : 'card3 text',
        button : 'card3 button',
        pic:'https://cdn.steemitimages.com/DQmcUatrjq6cciKUiSXBntm2EQ27CAVWEyLy3o2GhUzywQy/images.jpg'

      }
     ]
   }

    return (
    <div className="container">
      <div className="row">

  {data.cards.map(card => {
    console.log('card data')
    return( 
      <div className="col-md-4">
          
         <MyCard title={card.title} text={card.text} button={card.button} pic={card.pic}>
           <p>I'm child prop</p>
         </MyCard>

    </div>
    )

})
}
         </div>
      </div>
    )
  }
}


export default CardContainer;
