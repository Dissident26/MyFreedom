import React from "react";

function Album(props){
    return(
        <li><span>Album: </span>{props.title}; <span> Author: </span>{props.userName};</li>
    )
}

export default Album;