import React, { useEffect, useState } from 'react';
import './TasklistMain.css';
import Aux from '../../../../hoc/Axu';
import TodoMain from '../TodoMain/TodoMain';
import AddTodoMain from '../AddTodoMain/AddTodoMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../axios/axios';

function TaskListMain(props) {

    const [todos, setTodos] = useState([]);
    useEffect(() => {
        async function fetchTodos() { 
            try {
                const request = await axios.request(`/task_lists/${props.id}/todos`);
                setTodos(request.data);
            } catch (error) {
                console.log(error);
            }
         }
        fetchTodos();
    },[]);

    return(
        <Aux>
            <div className="TaskListMain">
                <div className="TaskListMainName">
                    <h2>{props.name}</h2>
                    <div className="TaskListMainNameIcon">
                        <FontAwesomeIcon icon={faEdit}/>
                    </div>
                </div>
                <div className="TodosMain">
                    {todos.map(todo => {
                        return <TodoMain name={todo.name} key={todo.id}/>;
                    })}
                </div>
                <AddTodoMain />
                <div className="DeleteBtn">
                    <FontAwesomeIcon icon={faTrashAlt} color="red"/>
                </div>
            </div>
        </Aux>
    )
  }

export default TaskListMain;