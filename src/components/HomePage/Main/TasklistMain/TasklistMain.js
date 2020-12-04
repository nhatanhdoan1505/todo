import React, { useEffect, useState } from 'react';
import './TasklistMain.css';
import Aux from '../../../../hoc/Axu';
import TodoMain from '../TodoMain/TodoMain';
import AddTodoMain from '../AddTodoMain/AddTodoMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../axios/axios';
import Spinner from '../../../Welcome/Spinner/Spinner';
import todo from '../../SideBar/Project/Todos/Todo/Todo';

function TaskListMain(props) {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [taskListTemporary, setTaskListTemporary] = useState(props.name);
    const [taskListName, setTaskListName] = useState(props.name);
    const [changeTasklist, setChangeTasklist] = useState(false);
    const [list, setList] = useState([]);
    const [todoAddition, setTodoAddition] = useState("");

    const changeHandler = (e) => {
        let value = e.target.value;
        setTaskListTemporary(value);
    }


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
    },[loading]);

    const submitChangeHandler = ()  => {
        axios.patch(`/task_lists/${props.id}`, {"name":`${taskListTemporary}`})
        .then(res => {
            setChangeTasklist(false);
            setTaskListName(taskListTemporary);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const changeTaskListHandler = () => {
        setChangeTasklist(true);
    }

    const cancelChangeTaskListHandler = (name) => {
        setChangeTasklist(false);
        setTaskListTemporary(taskListName);
    }

    const addTodoHandler = (id) => {
        if(todoAddition === ""){
            return;
        }else{
            setLoading(true);
            axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todoAddition}`}))
            .then(res => {
                setTodoAddition("");
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }


    return(
        <Aux>
            <div className="TaskListMain">
                <div className="TaskListMainName">
                    {changeTasklist ? <input type="text" style={{opacity:"1"}} value={taskListTemporary} onChange={changeHandler}/> : <h2 style={{opacity: "1"}}>{taskListName}  <span style={{color:"black", fontSize:"10px"}}>({todos.length})</span></h2> } 
                    <div className="TaskListMainNameIcon" >
                        {changeTasklist ? <FontAwesomeIcon icon={faCheck} onClick={submitChangeHandler}/> : <FontAwesomeIcon icon={faEdit} onClick={changeTaskListHandler}/>}
                        {changeTasklist ? <FontAwesomeIcon icon={faTimes} onClick={cancelChangeTaskListHandler}/> : <FontAwesomeIcon icon={faTimes} onClick={cancelChangeTaskListHandler} style={{display:"none"}}/>}
                    </div>
                </div>
                <div className="TodosMain">
                    {
                        todos.map(todo => {
                            return <TodoMain 
                                    check={todo.done}
                                    name={todo.name}
                                    id={todo.id}
                                    key={props.id}
                                    tasklistId={props.id}/>
                        })
                    }
                </div>
                <AddTodoMain 
                    setData={setTodoAddition} 
                    click={() => addTodoHandler(props.id)}
                    value={todoAddition}/>
                <div className="DeleteBtn" >
                    <FontAwesomeIcon 
                        icon={faTrashAlt} 
                        color="red" 
                        onClick={props.clickDeleteBtn}/>
                </div>
            </div>
        </Aux>  
    )
  }

export default TaskListMain;