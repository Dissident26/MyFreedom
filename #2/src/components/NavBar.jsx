import React from "react";

import "./NavBar.css";

class NavBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            itemsArray : props.items, initActive : props.initActive
        };
    };
    addActive(e){
        if(e.target.tagName !== 'A') return;
        let collection = document.querySelectorAll('.nav-bar_item');
        collection.forEach(el => el.classList.remove('active-tab'));
        e.target.parentNode.classList.add('active-tab');
    };
    render(){
        return(
            <ul className="nav-bar_main">
                {this.state.itemsArray.map((item,index)=>
                    <li key={index} className={(item === this.state.initActive) ? "active-tab nav-bar_item" : "nav-bar_item"} onClick={this.addActive}><a href={"#"}>{item}</a></li>
                )}
            </ul>
        )
    }
}

export default NavBar;