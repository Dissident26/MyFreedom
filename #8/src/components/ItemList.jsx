import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {getData} from './functions';
import Item from './Item';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';

export default function ItemList(){
        //url's
    const urlAll = 'https://dog.ceo/api/breeds/list/all';
        //hooks
    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(()=>{getData(urlAll, setLoading, setData, setError)},[]);

    const ItemWIthSelection = () => {
        const { selected } = useParams();
        return <Item selected={selected} count={10}/>;
    };
        return(
            <Switch>
                <Route exact path={'/'}> 
                    <Redirect to={'/list'} />
                </Route>
                <Route path={'/list'}>
                { (loading) ? 'Loading Data...' : (error) ? `Error has occured! ${error.message}` :
                (<ul className="list">
                {Object.keys(data).map((item, i)=>
                    <li key={i} ><a href={item}>{item}</a></li>
                )}
                </ul>)}
                </Route>
                <Route path={'/:selected'}>
                    <ItemWIthSelection />
                </Route>
            </Switch>
        )
     
};