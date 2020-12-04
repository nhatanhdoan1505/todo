import React, {useState, useEffect} from 'react';
import './WorkPlace.css';
import Aux from '../../../hoc/Axu';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';
import NavigationBar from '../NavigationBar/NavigationBar';
import store from 'store';
import history from '../../../history/history';
import { PureComponent } from 'react';
import Modal from '../Modal/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import AddTaskListPanel from '../AddTaskListPanel/AddTaskListPanel';
import axios from '../../../axios/axios';
import taskList from '../SideBar/Project/TaskList/TaskList';

function WorkPlace(props) {

    const [taskLists, setTaskLists] = useState([]);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tasklistName, setTasklistName] = useState("");
    const [todo1Name, setTodo1Name] = useState("");
    const [todo2Name, setTodo2Name] = useState("");
    const [showAddList, setShowAddList] =useState(false);
    const [todoAddition, setTodoAddition] = useState("");
    const [shared, setShared] = useState([]);
    const [share, setShare] = useState([]);

    useEffect(() => {
        async function fetchTaskList(){
            try {
                const request = await axios.request('/task_lists');
                setTaskLists(request.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTaskList();
    }, [loading]);

    useEffect(() => {
        async function fetchTaskList(){
            try {
                const request = await axios.request('/task_lists');
                setTaskLists(request.data);
                console.log(taskList);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTaskList();
    }, []);

    useEffect(() => {
        async function fetchData () {
            try {
                const request = await axios.request('/task_lists');
                const taskList = request.data;
                const share = [];
                taskList.map(taskList => {
                    if(taskList.share_count !== 0){
                        share.push(taskList.id);
                    }
                })
                setShare(share);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData () {
            try {
                const request = await axios.request('/shared');
                setShared(request.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    
    

    const logout = () => {
        store.set('isLoggedIn', false);
        history.push("/account");
    };
    
    const refeshPage = () => {
        history.push('/account');
    };

    const clickTodoHandler = () => {

    };

    const clickInboxHandler = () => {

    };

    const clickShareHandler = () => {

    };
    
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

    const cancelAddTaskListHandler = () => {
        setLoading(false);
        setMessage(false);
        setShowAddList(false);
    }

    const addTasklistHandler = () => {
        setShowAddList(true);
    }


        return(
            <Aux>
                <div className="WorkPlace">
                    <SideBar
                        clickTodo={clickTodoHandler}
                        clickInbox={clickInboxHandler}
                        clickShare={clickShareHandler}
                        tasklists={taskLists.length}
                        share={share.length}
                        shared={shared.length}/>
                    <div className="ActionArea">
                        <NavigationBar 
                            refeshPage={refeshPage} 
                            clickedSignOutButton={logout}/>
                        <Main
                            tasklists={taskLists}>
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
                        </Main>
                    
                    </div>
                </div>
            </Aux>
        )
}

export default WorkPlace;