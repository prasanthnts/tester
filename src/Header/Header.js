import React from 'react'

class Header extends React.Component{
    render(){
        const data = {
              name :'Surya',
              addr : 'RJY'
        };
        return(
        <h1>Header component {data.name} from {data.addr} {'2+2'} =  {2+2}</h1>
        )
    }
}

// const Header = () => {
//     return <h1>Header component</h1>
// }
export default Header;