import React, { Component } from 'react'


class Task extends Component {
    render() {
        return (
            <div className="Task">
                <span
                    className="task-input"
                    style={{ textDecoration: this.props.passingToTask.done ? 'line-through' : 'none' }}
                >
                    {this.props.passingToTask.value}
                </span>
                <div className="Button">
                    <button
                        className="task-button"
                        onClick={() => this.props.handleClick(this.props.index)} // this is being call from List.js coponent
                    >
                        {this.props.passingToTask.done ? 'Undo' : 'Done'}
                    </button>
                    <button
                        className="delete-button"
                        onClick={() => this.props.handleDelete()}
                    >X</button>
                </div>
            </div>
        )
    }
}

export default Task;