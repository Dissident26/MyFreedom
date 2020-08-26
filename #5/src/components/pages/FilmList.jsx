import React from "react";
import FilmListItem from "./FilmListItem";

export default class FilmList extends React.Component{
    state={
        films: null,
        loading: true,
        error: null,
        editId: null
    };
    componentDidMount(){
        this.loadData();
    };
    loadData = async () =>{
        try {
            this.setState({ loading : true });
            const filmsResponse = await fetch("http://localhost:3005/films");
            const films = await filmsResponse.json();
            this.setState({ films, loading : false });
        } catch(error){
            this.setState({ error, loading : false});
        };
    };
    async deleteItem(id){
        await fetch(`http://localhost:3005/films/${id}`,{
            method : 'DELETE'
        });

        this.setState({ films : this.state.films.filter((item) => item.id !== id)});
    };
    render(){
        if(this.state.loading){
            return 'Loading...';
        } if(this.state.error){
            return `Error: ${this.state.error.message}`;
        }

        return(
            <ol>
                {this.state.films.map((film, i)=>

                    <FilmListItem 
                    key={i}
                    title={film.title}
                    year={film.year}
                    director={film.director}
                    rating={film.rating}
                    status={film.status}
                    delete={() => this.deleteItem(film.id)}
                    onEdit={this.props.onEdit}
                    filmId={film.id}
                    />

                )}
            </ol>
        )
    }
};