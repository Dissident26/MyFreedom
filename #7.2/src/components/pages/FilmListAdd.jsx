import React, { useState } from "react";

const FilmListAdd = function(props){

    const[id, setId] = useState('');
    const[title, setTitle] = useState('');
    const[year, setYear] = useState('');
    const[director, setDirector] = useState('');
    const[rating, setRating] = useState('');
    const[status, setStatus] = useState('');

    async function addItem(e, onSave){
        e.preventDefault();
        const item = {
            id : id,
            title : title,
            year : year,
            director : director,
            rating : rating,
            status : status
        };
        try {
            const addItem = await fetch('http://localhost:3005/films', {
                method : 'POST',
                body : JSON.stringify(item),
                headers : {
                    "content-type": "application/json"
                }
            })
        } catch(error){
            return `Error: ${error.message}`
        } finally{
            onSave('list');
        };

        
    }
    return(
        <form className="form">
            <p>Название: <input type="text" onChange={(e)=>setTitle(e.target.value)}></input></p>
            <p>Год выпуска: <input type="text" onChange={(e)=>setYear(e.target.value)} maxLength="4"></input></p>
            <p>Режиссер: <input type="text" onChange={(e)=>setDirector(e.target.value)}></input></p>
            <p>Рейтинг: <input type="text" onChange={(e)=>setRating(e.target.value)} maxLength="1"></input></p>
            <p>Статус: <input type="text" onChange={(e)=>setStatus(e.target.value)}></input></p>
            <input type="submit" className="add-button" onClick={(e)=> addItem(e, props.onSave)}></input>
        </form>
    )
}

export default FilmListAdd;