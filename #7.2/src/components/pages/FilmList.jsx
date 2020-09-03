import React, { useState, useEffect } from "react";
import FilmListItem from "./FilmListItem";

export default function FilmList(props){
    const[films, setFilms] = useState(null);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const[editId, setEditId] = useState(null);

    useEffect(()=>{
        loadData();
    },[]);
    async function loadData(){
        try{
            setLoading(true);
            const filmsResponse = await fetch("http://localhost:3005/films");
            const films = await filmsResponse.json();
            setFilms(films);
            setLoading(false);
        } catch(error){
            setError(error);
            setLoading(false);
        };
        console.log('data loaded')
    };
    async function deleteItem(id){
        await fetch(`http://localhost:3005/films/${id}`,{
            method : 'DELETE'
        });
        setFilms(films.filter((item) => item.id !== id));
    };
    
    if(loading){
        return 'Loading...';
    } if(error){
        return error;
    }

    return(
        <ol>
            {films.map((film, i)=>
                <FilmListItem 
                key={i}
                title={film.title}
                year={film.year}
                director={film.director}
                rating={film.rating}
                status={film.status}
                delete={() => deleteItem(film.id)}
                onEdit={props.onEdit}
                filmId={film.id}
                />
            )}
        </ol>
    )
};