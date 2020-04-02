import React, { Component } from 'react'

import Task from './Task'

export default class List extends Component {

    // state = {
    // * moved to App.js
    // * todos: [
    // *    { value: "From List passing to Task 1", done: false },
    // *    { value: "From List mapping to Task 2", done: true }
    // * ]
    // }

    render() {
        return (
            // * App.js component needs to access a function to List.js 
            // * by using "props" instead of "state"
            <div className="List">
                {this.props.todosPassToList.map((todo, i) => {
                    return (
                        <Task
                            // * when you use map it needs a unique key id 
                            key={i}
                            index={i} // this property is passing to Task.js component onClick
                            // create a function to pass Task using "props" to Task.js component
                            passingToTask={todo} // receiver
                            handleClick={this.props.handleClick} // this is now passing the method to App.js component
                            handleDelete={this.props.handleDelete}
                        />
                    )
                })}
            </div>
        )
    }
}

