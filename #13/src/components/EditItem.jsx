import React, { useState } from 'react';
import { connect } from 'react-redux';

function EditItem({state, history, onChangeItem, onDelete}){
    
    const editedItem = state.counters.find(el => el.id === state.edited);

    const[titleInputData, setTitleInputData] = useState(state.edited !== null ? editedItem.title : null);
    const[countInputData, setCountInputData] = useState(state.edited !== null ? editedItem.count : null);

    const saveExit = () =>{
    const editedItem = state.counters.find(el => el.id === state.edited);
        onChangeItem(editedItem.id, titleInputData, countInputData);
        history.push('/list');
    };
    const exit = () => {
        history.push('/list');
    };
    const deleteItem = () => {
        onDelete(editedItem.id);
        history.push('/list');
    };
    if(state.edited === null){
        return(
            <>
            <h2>Item not found...</h2>
            <button onClick={exit}>Back to list</button>
            </>
        )
    }
    return(
        <div className="edit-item">
            <h1>Edit Item</h1>
            <p>Description: <input value={titleInputData} onChange={(e)=>setTitleInputData(e.target.value)} type="text"/></p>
            <p>Initial count: <input value={countInputData} onChange={(e)=>setCountInputData(e.target.value)} type="number"/></p>
            <div className="add-item-buttons">
                <button onClick={saveExit} className='counter-button_green'>Change Item</button>
                <button onClick={exit} className='counter-button_red'>Back to list</button>
                <button onClick={deleteItem} className='counter-button_red'>Delete Item</button>
            </div>
        </div>
    )
};

export default connect(state => ({state}),
dispatch => ({
    onChangeItem: (id, title, count)=>
        { 
            dispatch({
            type: 'change',
            payload: {
                id: id,
                title: title,
                count: count
            }
        })
    },
    onDelete: (id) => {
        dispatch({
            type: 'delete',
            payload: {
                id: id
            }
        })
    }
}))(EditItem)