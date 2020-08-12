import React from "react";

import "./CountAppItem.css";

function CountAppItem(props){
    return(
        <li id={props.id}className="item">{props.summ + ' => ' + props.info}<span onClick={props.onClick} className="delete">&#10006;</span></li>
    )
};

export default CountAppItem;