import React, { useEffect, useState } from 'react';
import { getCollection } from '../functions';
import {firestore} from '../firebase';
import {useHistory} from 'react-router-dom';

export default  function ExpensesCategories (){
    const[categories, setCategories] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[selected, setSelected] = useState(null);
    const[edited, setEdited] = useState(null);
    const[addCatInput, setAddCat] = useState(null);

    const history = useHistory();

    useEffect(()=>{
        getCollection('categories', setLoading, setCategories, setError);
    },[]);
    function setNreset(){
        setSelected(null);
        getCollection('categories', setLoading, setCategories, setError);
    };
    async function editData(selectedElement, editedName){
        await firestore.collection('categories').doc(selectedElement).set({
            name: editedName
        });
        setNreset();
    };
    async function deleteData(id){
        await firestore.doc(`/categories/${id}`).delete();
        setNreset()
    };
    async function addItem(name){
        await firestore.collection('categories').add({
            name: name
        });
        setNreset();
    };
    if(loading){
        return 'Loading Data...';
    }  if (error){
       return `Error occured! Error: ${error.message}`;
    } 
    return(
        <>
            <ul>
                {categories.map((el, i)=> 
                    (selected === el.id) ? 
                    <li>
                    <input 
                        type="text"
                        key={el.id} 
                        value={edited}  
                        onChange={(e)=>setEdited(e.target.value)
                        }>
                    </input> 
                    <button onClick={()=>editData(edited)}>Сохранить</button>
                    </li>
                :
                <li 
                    className='category-name' 
                    key={el.id}>
                    {el.name}
                    <button onClick={()=>deleteData(el.id)}>
                        Удалить
                    </button>
                    <button
                        onClick={()=>{
                            setSelected(el.id);
                            setEdited(el.name);
                        }}>
                        Редактировать
                    </button>
                </li>
                )}
            </ul>
            <button onClick={()=>addItem(addCatInput)}>Добавить</button><input onChange={(e)=>setAddCat(e.target.value)} type='text' placeholder='категорию'></input>
        </>
    )

};