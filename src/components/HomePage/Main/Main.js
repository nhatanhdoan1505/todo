import React, {useEffect, useState} from 'react';
import './Main.css';
import Aux from '../../../hoc/Axu';
import TaskListMain from './TasklistMain/TasklistMain';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import AddTaskListPanel from '../AddTaskListPanel/AddTaskListPanel';
import axios from '../../../axios/axios';


function Main(props){

    const [tasklists, setTasklist] = useState([]);
    const [tasklistName, setTasklistName] = useState("");
    const [todo1Name, setTodo1Name] = useState("");
    const [todo2Name, setTodo2Name] = useState("");
    const [loading, setLoading] = useState(false);
    const [showAddList, setShowAddList] =useState(false);
    const [message, setMessage] = useState(false);
    const [render, setRender] = useState(false);
    const [todoAddition, setTodoAddition] = useState("");

    useEffect(() => {
        async function fetchTaskList(){
            try {
                const request = await axios.request('/task_lists');
                setTasklist(request.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTaskList();
    }, [loading]);

    

    const setTaskListName = (taskList) => {
        setTasklistName(taskList.trim());
    }

    const setTodo1 = (toDo1) => {
        setTodo1Name(toDo1.trim());
    } 

    const setTodo2 = (toDo2) => {
        setTodo2Name(toDo2.trim());
    }

    const setTodo = (todo) => {
        setTodoAddition(todo.trim());
    }


    const submitHandler = () => {
        setLoading(true);
        if(tasklistName === ""){
            setMessage(true);
            setLoading(false);
        }else{
            axios.post('/task_lists', JSON.stringify({"name": `${tasklistName}`}))
            .then(res => {
                const id = res.data.id;
                if(todo1Name === ""){
                    if(todo2Name === ""){
                        setLoading(false);
                        setMessage(false);
                        setShowAddList(false);
                        return;
                    }else{
                        axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todo2Name}`}))
                        .then(res => {
                            setLoading(false);
                            setMessage(false);
                            setShowAddList(false);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                    }
                }else{
                    axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todo1Name}`}))
                    .then(res => {
                        if(todo2Name === ""){
                            setLoading(false);
                            setMessage(false);
                            setShowAddList(false);
                            return;
                        }else{
                            axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todo2Name}`}))
                            .then(res => {
                                setLoading(false);
                                setMessage(false);
                                setShowAddList(false);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                        }
                    })  
                    .catch(err => {
                        console.log(err);
                    }) 
                }
        })
        .catch(err => {
            console.log(err);
        })
    }

    }

    const deleteTasklistHandler = (id) => {
        setLoading(true);
        axios.delete(`/task_lists/${id}`)
        .then(res => {
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
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
        
    const cancelAddTaskListHandler = () => {
        setLoading(false);
        setMessage(false);
        setShowAddList(false);
    }

    const addTasklistHandler = () => {
        setShowAddList(true);
    }

    

    const list = tasklists.map(tasklist => {
        return <Col 
                    lg={3} 
                    key={tasklist.id}>
                        <TaskListMain 
                            name={tasklist.name} 
                            id={tasklist.id} 
                            key={tasklist.id+tasklist.name}
                            clickDeleteBtn={() => deleteTasklistHandler(tasklist.id)}
                            count={tasklist.todo_count}
                            />
                </Col>
    })

    return (
        <Aux>
            <div className="MainDisplay">
                <Modal 
                    showAddList={showAddList}
                    cancelAddTaskList={cancelAddTaskListHandler}>
                    <AddTaskListPanel
                                    setTaskListName={setTaskListName}
                                    setTodo1Name={setTodo1}
                                    setTodo2Name={setTodo2}
                                    submitHandler={submitHandler}
                                    loading={loading}
                                    message={message}/>
                </Modal>
                <div className="TaskListOption">
                    <FontAwesomeIcon 
                        icon={faPlus} 
                        onClick={addTasklistHandler}/>
                    <FontAwesomeIcon 
                        icon={faShareSquare}/>
                </div>
                <div className="TaskListArea">
                    <Row>
                        {list}
                    </Row>
                </div>
            </div>
        </Aux>
    )
}

export default Main;