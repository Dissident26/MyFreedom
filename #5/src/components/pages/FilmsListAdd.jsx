import React from "react";

export default class FilmsListAdd extends React.Component{
    state={
        id : '',
        title : '',
        year : '',
        director : '',
        rating : '',
        status : ''
    };
    async addItem(e, onSave){
        e.preventDefault();
        const item = {
            id : this.state.id,
            title : this.state.title,
            year : this.state.year,
            director : this.state.director,
            rating : this.state.rating,
            status : this.state.status
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
        }
    };
    render(){
        return(
            <form className="form">
                <p>Название: <input type="text" onChange={(e)=>this.setState({title : e.target.value})}></input></p>
                <p>Год выпуска: <input type="text" onChange={(e)=>this.setState({year : e.target.value})} maxLength="4"></input></p>
                <p>Режиссер: <input type="text" onChange={(e)=>this.setState({director : e.target.value})}></input></p>
                <p>Рейтинг: <input type="text" onChange={(e)=>this.setState({rating : e.target.value})} maxLength="1"></input></p>
                <p>Статус: <input type="text" onChange={(e)=>this.setState({status : e.target.value})}></input></p>
                <input type="submit" className="add-button" onClick={(e)=>this.addItem(e, this.props.onSave)}></input>
            </form>
        )
    };
};