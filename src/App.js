import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import List from './components/List';

class App extends Component {
  // * the state is passing the value to Form.js component
  // * value={this.props.inputValue}
  state = {
    inputValue: '',
    todosToList: [
      // you can remove/comment these values 
      { value: "This value from App is passing to List --> passing and receiving by Task 1", done: false },
      { value: "From App to List mapping to Task 2", done: false },
      { value: "Same same", done: true }
    ]
  }
  // * moved from Form.js component
  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  }

  handleClick = (i) => {
    console.log('IT WORKED!!!', i);
    // the copy another todosToList
    const todosToList = this.state.todosToList
    todosToList[i].done = !todosToList[i].done; // this will not work without this.setState()
    this.setState({ todosToList })
  }

  handleSubmit = (e) => {
    // * preventDefault is a method that keep the page from re-rendering
    e.preventDefault();
    const newTodo = {
      value: this.state.inputValue,
      done: false
    };
    // * make another function with any name(todosFromApp) that copy the function todosToList
    const todosFromApp = this.state.todosToList;
    // * create a push method having a value(newTodo) inside with new function(todosFromApp)
    todosFromApp.push(newTodo);
    // * use a setState method to copy todosFromApp and delete inputValue
    this.setState({ todosFromApp, inputValue: '' })
    console.log('YES!!!');
  }

  handleDelete = () => {
    const del = {
      value: this.state.inputValue,
    };
    const todosDelete = this.state.todosToList;
    todosDelete.push(del);
    this.setState({ inputValue: ''})
  }
  render() {
    // const newNumbers = () => {
    //   name = 'Pau'
    // }
    // console.log(newNumbers);
    return (
      <div className="App">
        <Form
          // inputValue needs to pass the value to Form.js component
          // todo -- using "state" to pass a function using "props" to Form.js component
          inputValue={this.state.inputValue}

          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
        />
        <List 
          handleClick={this.handleClick} // this is passing to List.js and then to Task.js compopnents
          handleDelete={this.handleDelete} // this is passing to List.js and then to Task.js compopnents
          todosPassToList={this.state.todosToList}
        />
      </div>
    );
  }
}

export default App;
