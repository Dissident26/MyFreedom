import React from 'react';
import ListItems from './ListItems';

const items = ['Sample Task #1', 'Sample Task #2', 'Sample Task #3', 'Sample Task #4', 'Sample Task #5'];

export default ()=>{
    return(
        
        <ul>
        {items.map(item => (
            <li>{item}</li>
        ))}
        </ul>
    )
}

