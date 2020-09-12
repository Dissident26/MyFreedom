import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { firestore, collectionToObj, docToObj } from '../firebase';
import EditItem from './EditItem';

export default function Expenses(){

    const history = useHistory();

    const[data, setData] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[categories, setCategories] = useState(null);
    
    const[selectedCategory, setSelectedCategory] = useState(null);
    const[inputContent, setInputContent] = useState(null);
    const[inputSumm, setInputSumm] = useState(null);
    const[editItem, setEditItem] = useState(null);

    useEffect(()=>{ async function getData(){
        setLoading(true);
        const getExpenses = async () => {
            const snapshot = await firestore.collection('expenses').get();
            const toObj = await collectionToObj(snapshot);
        setData(toObj);
        }
        const getCategories = async () => {
            const snapshot = await firestore.collection('categories').get();
            const toObj = await collectionToObj(snapshot);
        setCategories(toObj);
        setSelectedCategory(toObj[0].id); //первый выбран по умолчанию
        }
        await Promise.all([getExpenses(), getCategories()]);
        setLoading(false);

    } getData() },[]);
    
    async function addData(selectedCategory, inputContent, inputSumm){
        await firestore.collection('expenses').add({
              categoryId: selectedCategory,
              content: inputContent,
              summ: inputSumm
        });
        history.push('/');
    };

    async function deleteData(id){
        await firestore.doc(`/expenses/${id}`).delete();
        history.push('/');
    };
    if(loading){
        return 'Loading Data...';
    }  if (error){
       return `Error occured! Error: ${error.message}`;
    } if(editItem){
        const editedElement =  data.find((el)=>el.id === editItem);
        return(
            <EditItem element={editedElement} categories={categories} onSave={()=>setEditItem(null)}/>
        )
    }
    function findCategory(categoryId){
        const search = categories.find(category => category.id === categoryId);
        return (search) ? search.name : '(!)Категория не найдена(!)';
    }

    return(
        <>
            <ul>
                {data.map((el,i) => 
                <li key={el.id}>
                    {/* тут */}
                    <span className='category-name'>{findCategory(el.categoryId)}</span> 
                    {el.content + ' = ' + el.summ + 'р. '}
                    <button onClick={()=>deleteData(el.id)}>Удалить</button>
                    <button onClick={()=>setEditItem(el.id)}>Редактировать</button>
                </li>)}
            </ul>
            <button 
                disabled={(!inputContent || !inputSumm) ? true : false} 
                onClick={()=>addData(selectedCategory, inputContent, inputSumm)}>
                Добавить
            </button>
            <select onChange={e => setSelectedCategory(categories.find(category => category.name === e.target.value).id)}>{
                categories.map(el => <option key={el.id}>{el.name || 'Без категории'}</option>)}</select>
            <input onChange={e => setInputContent(e.target.value)} type='text' placeholder='описание'></input>
            <input onChange={e => setInputSumm(e.target.value)} type='text' placeholder='сумма'></input>
        </>
    )
}