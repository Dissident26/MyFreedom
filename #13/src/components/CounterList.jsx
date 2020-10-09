import React from 'react';
import CounterItem from './CounterItem';
import { connect } from 'react-redux';

function CounterList({state, onIncrease, onDecrease, onEdit, history}){
    return(
        <div className="counter-list">
            <h1>Main App</h1>
            <button onClick={()=>history.push('/add')}>Добавить</button>
             <ul>
                {state.counters.map(el => <CounterItem key={el.id} el={el} onIncrease={onIncrease} onDecrease={onDecrease} onEdit={onEdit}/>)}
             </ul>
        </div>
    )
};

export default connect(
    state => ({state}),
    (dispatch, {history}) => ({
        onIncrease: (id) => dispatch({
            type: 'increase',
            payload: {
                id: id,
            }
        }),
        onDecrease: (id) => dispatch({
            type: 'decrease',
            payload: {
                id: id,
            }
        }),
        onEdit : (id) => {
            dispatch({
            type: 'edit',
            payload: {
                id: id,
            }
        }) 
        history.push(`/edit`);
    },
    
    })
)(CounterList);