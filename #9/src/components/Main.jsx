import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Expenses from './Expenses';
import ExpensesCategories from './ExpensesCategories';

export default function Main(){
    
    const MenuLinks = ['Expenses', 'Categories'];

    return(
        <>
            <h1>Home Acountant</h1>
            <ul>
                {
                    MenuLinks.map((el,i)=><li key={i}><a href={el}>{el}</a></li>)
                }
            </ul>
            <Switch>
                <Route exact path='/'>
                    <Redirect to='/expenses'/>
                </Route>
                <Route path='/expenses'>
                    <Expenses/>
                </Route>
                <Route exact path='/categories'>
                    <ExpensesCategories/>
                </Route>
            </Switch>
        </>
    )
};