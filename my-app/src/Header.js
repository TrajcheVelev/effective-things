import React, { Component } from 'react';


class Header extends Component {
    open()  {
        let modal = document.getElementById("myModal");
        modal.style.display="block";
        }

        
    render(){
        
    return(
<header id="header">
  
   <ul className="ull">
        
        <li className="li4"> <a href="#" className="a4">Возен ред</a> </li>
        <li className="li5"> <a href="#" onClick={this.open} className="a4">Резервирај</a> </li>
        <input type="text" placeholder="Search" className="searchbar"> 
         </input>
        
          </ul>     
 
   </header>
)
    }

}

export default Header;

