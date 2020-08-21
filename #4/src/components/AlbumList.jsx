import React from "react";
import Album from "./Album";

class AlbumList extends React.Component{
    state = {
        albums : null,
        users : null,
        loading : true,
        error : null,
    }
    componentDidMount(){
       this.loadData();
    };
    loadData = async () =>{
        try {
            this.setState({ loading : true });
            const albumsResponse = await fetch("http://jsonplaceholder.typicode.com/albums");
            const albums = await albumsResponse.json();
            const usersResponse = await fetch("http://jsonplaceholder.typicode.com/users");
            const users = await usersResponse.json();
            this.setState({ users, albums, loading : false }); //albums.userId === users.id
        } catch(error){
            this.setState({ error, loading : false})
        };
    };
    render(){
        
        if(this.state.loading){
            return 'Loading...';
        } if(this.state.error){
            return `Error: ${this.state.error.message}`;
        }
        return(
            <ul>
                {this.state.albums.map((album, i) => <Album 
                    title={album.title} 
                    key={i}
                    userName = {this.state.users.find(user => user.id === album.userId).name}
                    />)}
            </ul>
        )
    }
}

export default AlbumList;