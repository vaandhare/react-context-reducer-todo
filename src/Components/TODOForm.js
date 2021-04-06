import React, { useContext, useState } from 'react'
import { FormGroup, Input, Button, Form, InputGroup, InputGroupAddon} from 'reactstrap'

import {v4} from 'uuid'
import {TodoContext} from './../Context/TodoContext'
import {ADD_TODO} from './../Context/action.types'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TodoForm = () => {

    const [todoString, setTodoString] = useState("");  
    const {dispatch} = useContext(TodoContext)

    const handleOnClick = e => {
        e.preventDefault();
        if(todoString === "")
            return toast("Empty Todo", {type: "error"}) 

        const todo = {
            todoString,
            id: v4(),
        }

        dispatch({
            type: ADD_TODO,
            payload: todo,
        })

        setTodoString("");
    }

    return(
        <Form onSubmit={handleOnClick}>
            <ToastContainer position="bottom-right"/>
            <FormGroup>
                <InputGroup>
                <Input type="text" name="todo" id="todo" placeholder="Type Something Interesting..." value={todoString} onChange={e => setTodoString(e.target.value)}/>
                <InputGroupAddon addonType="prepend">
                    <Button color="warning">Add</Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;