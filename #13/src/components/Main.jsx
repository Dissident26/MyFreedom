import React from 'react';
import CounterList from './CounterList';
import AddCounter from './AddCounter';
import EditItem from './EditItem';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//redux stuff
const sampleState = {
    counters: [
        {id: 0, title: 'Выучить React', count: 3}, 
        {id: 1, title: 'Изучить Redux', count: 5}, 
        {id: 2, title: 'Повторить JS', count: 7},
        {id: 3, title: 'Установить react-router', count: 1},
        {id: 4, title: 'Сделать доклад', count: 4}
    ],
    edited: null
};
function counterReducer(state = sampleState, {type, payload}){

    switch(type){
        case 'add' : {
            return addItem(state, payload);
        }
        case 'delete' : {
            return deleteItem(state, payload);
        }
        case 'increase' : {
            return changeValue(state, payload, 'increase');
        }
        case 'decrease' : {
            return changeValue(state, payload, 'decrease');
        }
        case 'edit' : {
            return itemEdit(state, payload);
        }
        case 'change' : {
            return changeItem(state, payload)
        }
        default: return state;
    }
    function changeValue(state, payload, params){
        const changed = state.counters.find((item)=>item.id === payload.id);
        const index = state.counters.indexOf(changed);
        const length = state.counters.length;
        return {
            counters: [...state.counters.slice(0, index),
            {
                id: changed.id, 
                title: changed.title, 
                count: (params === 'increase') ? changed.count+1 : changed.count-1
            },
            ...state.counters.slice(index+1, length)
            ]
        }
    };
    function addItem(state, payload){
        return {
            counters: [...state.counters, 
                { 
                    id: state.counters.length, 
                    title: payload.title, 
                    count: payload.count 
                }
            ]
        }
    };
    function deleteItem(state, payload){
        return {
            counters: [...state.counters.filter((el)=> el.id !== payload.id)]
        }
    };
    function itemEdit(state, payload){
        return {
            counters: [...state.counters],
            edited: payload.id
        }
    };
    function changeItem(state, payload){
        const changed = state.counters.find((item)=>item.id === payload.id);
        const index = state.counters.indexOf(changed);
        const length = state.counters.length;
        return {
            counters: [...state.counters.slice(0, index),
            {
                id: changed.id, 
                title: payload.title, 
                count: payload.count
            },
            ...state.counters.slice(index+1, length)
            ]
        }
    };
};
const store = createStore(counterReducer);

//store.subscribe(()=>console.log(store.getState()))

//end of redux stuff

export default function Main(){

    return(
        <BrowserRouter>
            <Provider store={store}>

                <Switch>
                    <Route exact path='/'>
                        <Redirect to='/list'/>
                    </Route>
                    <Route path='/list'>
                        {({history}) => <CounterList history={history}/>}
                    </Route>
                    <Route path='/add'>
                        {({history}) => <AddCounter history={history}/>}
                    </Route>
                    <Route path='/edit'> 
                        {({history}) => <EditItem history={history}/>}
                    </Route>
                </Switch>
                
            </Provider>
        </BrowserRouter>
        
    )
};