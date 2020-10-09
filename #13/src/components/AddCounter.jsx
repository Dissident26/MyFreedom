import React, { useState } from 'react';
import { connect } from 'react-redux';

function AddCounter({ history, onAddCounter}){
    const[titleInputData, setTitleInputData] = useState('');
    const[countInputData, setCountInputData] = useState('');
    const saveExit = () =>{
        onAddCounter(titleInputData, Number(countInputData));
        history.push('/list');
    };
    const exit = () => {
        history.push('/list');
    }
    return(
        <div className="add-item">
            <h1>Add Item</h1>
            <p>Description: <input value={titleInputData} onChange={(e)=>setTitleInputData(e.target.value)}type="text"/></p>
            <p>Initial count: <input value={countInputData} onChange={(e)=>setCountInputData(e.target.value)} type="number"/></p>
            <div className="add-item-buttons">
                <button onClick={saveExit} className='counter-button_green'>Add Item</button>
                <button onClick={exit} className='counter-button_red'>Back to list</button>
            </div>
        </div>
    )
};

export default connect(state => ({state}),
dispatch => ({
    onAddCounter: (title, count)=>
        { 
            dispatch({
            type: 'add',
            payload: {
                title: title,
                count: count
            }
        })
    }
}))(AddCounter)