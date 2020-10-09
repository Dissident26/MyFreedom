import React from 'react';

export default function CounterItem({el, onIncrease, onDecrease, onEdit}){
    return(
        <li>
            {el.title}
            <span className='counter-buttons'>
                <button onClick={()=>onIncrease(el.id)} className='counter-button_green'>+</button>
                    <span className='counter-counter'>{el.count}</span>
                <button onClick={()=>onDecrease(el.id)} className='counter-button_red'>-</button>
                <button className='edit-button' onClick={()=>onEdit(el.id)}>&#9998;</button>
            </span>
        </li>
    )
};