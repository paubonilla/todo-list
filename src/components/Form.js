import React from 'react'



function Form(props) {
    // todo -- copied and pasted state and moving it to App component
    // ! because this code is not working 
    // state = {
    //     inputValue: ''
    // }

    // * handleChange is no longer working because it is trying 
    // * to change Form.js component 
    // * so this function needs to move
    // * to the parent (App.js component)

    /*
    ! this code is not working
     handleChange = (e) => {
         console.log(e.target.value);
         this.setState({ inputValue: e.target.value });
     }
    */

   
        return (
            // todo --  add onSubmit function to form with any value name (handleSubmit)
            // * and handleSubmit receives the function from App.js component using "props"
            <div className="Form">
                <form onSubmit={(e) => props.handleSubmit(e)}>
                    <input
                        className="input"
                        placeholder="Write a task..."
                        // ? if "state" is used replace it with "props"
                        // * add "props" to onChange because App.js is passing handleChange to Form.js
                        onChange={(e) => props.handleChange(e)}
                        // * value={this.state.inputValue}
                        // from "state" it changes "props" because App.js component
                        // todo -- needs to access by passing (inputValue) 
                        // to Form.js component by usig "props"
                        value={props.inputValue} // is receiving from the parent App.js component
                    />
                </form>
            </div>
        );
    }

export default Form;