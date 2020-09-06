import React, { useState } from 'react';
import { useEffect } from 'react';
import { getData } from './functions';

export default function Item(props) {

    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    const url = `https://dog.ceo/api/breeds/image/random`;

    useEffect(()=>{getData(url, setLoading, setData, setError)},[url]);

    return(
        <>
            <h2>{props.selected}</h2>
            <ul className="image-list">
                {(loading) ? 'Loading Data...' : (error) ? `Error has occured! Error: ${error.message}` :
            <li key={data}><img src={data} alt={data}></img></li>}
            </ul>
        </>
    )
};