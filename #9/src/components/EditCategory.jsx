import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import {setItem} from '../functions';

export default function EditExpenses(props){
    const history = useHistory();

    const[category, setCategory] = useState(null);

        return(
        <>
            <h1>Редактировать элемент</h1>
            <button onClick={()=>setItem(selectedCategory, inputContent, inputSumm, props.element.id, ()=>history.push('/'))}>Изменить</button>
            <select defaultValue={props.categories.filter(el => el.id === props.element.categoryId)[0].name} onChange={e => setSelectedCategory(props.categories.find(category => category.name === e.target.value).id)}>
                {props.categories.map(el => <option key={el.id} value={el.name}>{el.name}</option>)}
            </select>
            <input onChange={e => setInputContent(e.target.value)} type='text' placeholder='описание' value={inputContent}></input>
            <input onChange={e => setInputSumm(e.target.value)} type='text' placeholder='сумма' value={inputSumm}></input>
            <button onClick={()=>props.onSave()}>Отмена</button>
        </> 
    )
}