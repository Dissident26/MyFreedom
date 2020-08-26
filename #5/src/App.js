import React from 'react';

import FilmList from "./components/pages/FilmList";
import FilmListAdd from "./components/pages/FilmsListAdd";
import FilmListEdit from "./components/pages/FilmsListEdit";
import Menu from "./components/Menu";
    //db-backup.json - бэкап бд
import './App.css';
    //бэкенд на порту 3005
const menuItems = [{  //представляет собой название пункта меню в 'name' и его тип в 'mode'
  name : 'Список Фильмов',
  mode : 'list'
}, {
  name : 'Добавить Фильм',
  mode : 'add'
}];
const Pages = {
  LIST: 'list',
  EDIT: 'edit',
  ADD: 'add'
};

class App extends React.Component {
  state = {
    page: Pages.LIST,
    id: null
  };
  render(){
    return(
      <div className="film-list-main">
        <Menu
          activeItem={this.state.page}
          itemClick={(page) => this.setState({ page })}
          items={menuItems}
        />
        {this.state.page === Pages.LIST && <FilmList onEdit={(page, id) => this.setState({ page, id })}/>}
        {this.state.page === Pages.EDIT && <FilmListEdit filmId={this.state.id} onSave={(page) => this.setState({ page })}/>}
        {this.state.page === Pages.ADD && <FilmListAdd onSave={(page) => this.setState({ page })}/>}
      </div>
    )
  }; 
};
export default App;
