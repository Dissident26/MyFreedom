import React from "react";

export default class FilmsListEdit extends React.Component{
    state={
        id : '',
        title : '',
        year : '',
        director : '',
        rating : '',
        status : ''
    };
    async componentDidMount(){
        const request = await fetch(`http://localhost:3005/films/${this.props.filmId}`);
        const film = await request.json();
        this.setState({
            id : film.id,
            title : film.title,
            year : film.year,
            director : film.director,
            rating : film.rating,
            status : film.status
        })
    };
    async addItem(e, onSave){
        e.preventDefault();
        try{
            const request = await fetch(`http://localhost:3005/films/${this.state.id}`, {
            method : "PATCH",
            headers : {
                "content-type": "application/json"
            },
            body : JSON.stringify({
                id : this.state.id,
                title : this.state.title,
                year : this.state.year,
                director : this.state.director,
                rating : this.state.rating,
                status : this.state.status
            })
        })
        } catch(error){
            return `Error: ${error.message}`;
        } finally{
            onSave('list');
        }
    }
    render(){
        return(
            <form className="form">
                <p>Название: <input type="text" value={this.state.title} onChange={(e)=>this.setState({title : e.target.value})}></input></p>
                <p>Год выпуска: <input type="text" value={this.state.year} onChange={(e)=>this.setState({year : e.target.value})} maxLength="4"></input></p>
                <p>Режиссер: <input type="text" value={this.state.director} onChange={(e)=>this.setState({director : e.target.value})}></input></p>
                <p>Рейтинг: <input type="text" value={this.state.rating} onChange={(e)=>this.setState({rating : e.target.value})} maxLength="1"></input></p>
                <p>Статус: <input type="text" value={this.state.status} onChange={(e)=>this.setState({status : e.target.value})}></input></p>
                <input type="submit" className="add-button" onClick={(e)=>this.addItem(e, this.props.onSave)}></input>
            </form>
        )
    };
};