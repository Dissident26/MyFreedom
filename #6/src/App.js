import React from 'react';
import './App.css';

const TextInput = ({value, onChange}) => {
  return(
      <input value={value} onChange={(e) => onChange(e)} type="text"/>
  )
};
const NumericInput = ({value, onChange}) => {
  return(
      <input value={value} onChange={(e) => onChange(e)} type="text"/>
  )
};
const WithLocalStorage = (Component, initValue, storageKey) => {

      return(
      class WithLocalStorage extends React.Component{
        constructor(props) {
          super(props);
          const value = localStorage.getItem(storageKey);
          this.state = {
            value: value !== null ? value : initValue,
          };
        }
        onChange = (e) => {
          this.setState({ value: e.target.value });
          localStorage.setItem(storageKey, e.target.value);
        };
        render() {
          return (
            <Component
              {...this.props}
              value={this.state.value}
              onChange={this.onChange}
            />
          );
        }
      }
    )
};

const TextInputWithLocalStorage = WithLocalStorage(TextInput, '123', 'text-input');
const NumericInputWithLocalStorage = WithLocalStorage(NumericInput, 10, 'numeric-input');

function App() {
  return (
    <>
    <TextInputWithLocalStorage />
    <NumericInputWithLocalStorage />
    </>
  );
}

export default App;
