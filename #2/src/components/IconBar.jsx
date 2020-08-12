import React from "react";
import "./IconBar.css";
function IconBar(props){
    let className = "";
    switch(props.orientation){
        case "horizontal" : className += ''; break;
        case "vertical" : className += '-v'; break;
        default : className += '';
    }
    return(
        <div className={"icon-bar"+className}>
            <a className="active" href="#"><i className={"fa fa-home"+className}></i></a>
            <a href="#"><i className={"fa fa-search"+className}></i></a>
            <a href="#"><i className={"fa fa-envelope"+className}></i></a>
            <a href="#"><i className={"fa fa-globe"+className}></i></a>
            <a href="#"><i className={"fa fa-trash"+className}></i></a>
        </div>
    )
}

export default IconBar;