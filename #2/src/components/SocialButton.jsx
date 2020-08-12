import React from "react";
import "./SocialButton.css";

function SocialButton(props){
    let className = "fa";
    switch(props.type){
        case "facebook" : className += " fa-facebook"; break;
        case "twitter" : className += " fa-twitter"; break;
    }
    return(
        <a href="#" className={className}>{props.type}</a>
    )
}

export default SocialButton;