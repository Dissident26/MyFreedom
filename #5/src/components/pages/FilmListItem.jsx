import React from "react";

export default function FilmListItem(props){
        return(
            <li>
                <h4>{props.title}. <span className="edit" onClick={() => props.onEdit('edit', props.filmId)}>&#9998;</span><span className="delete" onClick={props.delete}>&#10006;</span></h4>
                <p>Год выпуска: {props.year}.</p>
                <p>Режиссер: {props.director}.</p>
                <p>Рейтинг: {props.rating}.</p>
                <p>Статус: {props.status}.</p>
            </li>
        )
};