import React, { useState, useEffect } from "react";

export default function FilmsListEdit(props){
    const[id, setId] = useState('');
    const[title, setTitle] = useState('');
    const[year, setYear] = useState('');
    const[director, setDirector] = useState('');
    const[rating, setRating] = useState('');
    const[status, setStatus] = useState('');
    async function getData(){
        const request = await fetch(`http://localhost:3005/films/${props.filmId}`);
        const film = await request.json();
            setId(film.id);
            setTitle(film.title);
            setYear(film.year);
            setDirector(film.director);
            setRating(film.rating);
            setStatus(film.status);
    };
    useEffect(()=>{getData()},[]);

    async function addItem(e, onSave){
        e.preventDefault();
        try{
            const request = await fetch(`http://localhost:3005/films/${id}`, {
            method : "PATCH",
            headers : {
                "content-type": "application/json"
            },
            body : JSON.stringify({
                id : id,
                title : title,
                year : year,
                director : director,
                rating : rating,
                status : status
            })
        });
        } catch(error){
            return `Error: ${error.message}`;
        } finally{
            onSave('list');
            };
        };

        return(
            <form className="form">
                <p>Название: <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input></p>
                <p>Год выпуска: <input type="text" value={year} onChange={(e)=>setYear(e.target.value)} maxLength="4"></input></p>
                <p>Режиссер: <input type="text" value={director} onChange={(e)=>setDirector(e.target.value)}></input></p>
                <p>Рейтинг: <input type="text" value={rating} onChange={(e)=>setRating(e.target.value)} maxLength="1"></input></p>
                <p>Статус: <input type="text" value={status} onChange={(e)=>setStatus(e.target.value)}></input></p>
                <input type="submit" className="add-button" onClick={(e)=>addItem(e, props.onSave)}></input>
            </form>
        )
    };