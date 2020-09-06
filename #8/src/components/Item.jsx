import React, { useState } from 'react';
import { useEffect } from 'react';
import { getData } from './functions';

export default function Item(props) {

    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    const url = ` https://dog.ceo/api/breed/${props.selected}/images`;

    useEffect(()=>{getData(url, setLoading, setData, setError)},[url]);

    return(
        <>
            <h2>{props.selected}</h2>
            <ul className="image-list">
                {(loading) ? 'Loading Data...' : (error) ? `Error has occured! Error: ${error.message}` :
                data.map((el,i)=>(i > props.count -1) ? null : <li key={i}><img src={el} alt={el}></img></li>)}
            </ul>
        </>
    )
};