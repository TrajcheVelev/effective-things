import React, { Component } from 'react';
import BusLinesLogo from "./BusLinesLogo.png";
import Contact from "./Contact";


class Header extends Component {
    open() {
        let modal = document.getElementById("myModal");
        modal.style.display = "block";
    }


    render() {

        return (
            <header id="header">

                <ul className="ull">
                    <input type="text" placeholder="Search" className="searchbar">
                    </input>
                    <li className="li4"> <img src={BusLinesLogo} className="BusLinesLogo"></img> </li>
                    <hr className="horizontalrule"></hr>
                    <ul>



                        <li className="li5"> <a href="#" className="a4">Почетна</a> </li>
                        <li className="li5"> <a href="#" onClick={this.open} className="a4">Резервирај билет</a> </li>
                        <li className="li5"> <a href="#" className="a4"><Contact /></a> </li>

                    </ul>
                </ul>


            </header>
        )
    }

}

export default Header;

