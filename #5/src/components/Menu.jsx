import React from "react";

function Menu({activeItem, itemClick, items}){
    return(
        <ul className="menu">
            {items.map((el, i) => 
                <li key={i} className={(el.mode === activeItem) ? 'active-item' : ''} onClick={() => itemClick(el.mode)}>{el.name}</li>
            )}
        </ul>
    )
};

export default Menu;