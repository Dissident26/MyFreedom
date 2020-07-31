import React from 'react';

import Header from './components/Header';
import AddButton from './components/AddButton';
import ChangeButton from './components/ChangeButton';
import DeleteButton from './components/DeleteButton';
import Input from './components/Input';
import List from './components/List';

export default () => {
  return(
    <div id="to-do">
      <Header/>
      <List/>
      <Input/>
      <AddButton/>
      <ChangeButton/>
      <DeleteButton/>
    </div>
  )
};