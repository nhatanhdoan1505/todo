import React, { useState, useEffect } from 'react';
import './AddTaskListPanel.css';
import Aux from '../../../hoc/Axu';
import InputTaskListArea from './InputTaskListArea/InputTaskListArea';
import axios from '../../../axios/axios';
import SubmitButton from './SubmitButton/SubmitButton';
import Spinner from '../../Welcome/Spinner/Spinner';

function AddTaskListPanel (props) {

    const [tasklist, setTasklist] = useState("");
    const [todo1, setTodo1] = useState("");
    const [todo2, setTodo2] = useState("");
    const [loading, setLoading] = useState(false);

    const setTaskListName = (taskList) => {
        setTasklist(taskList);
    }

    const setTodo1Name = (toDo1) => {
        setTodo1(toDo1);
    } 

    const setTodo2Name = (toDo2) => {
        setTodo2(toDo2);
    } 

    const submitHandler = () => {
        setLoading(true);
        const request = axios.post('/task_lists', JSON.stringify({"name": `${tasklist}`}))
                        .then(res => {
                            const id = res.data.id;
                            console.log("Successfull Post TaskList");
                            axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todo1}`}))
                            .then(res => {
                                console.log("Successfull Post Todo1")
                                axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todo2}`}), {headers:{'Content-Type': 'application/json'}})
                                .then(res => {
                                    console.log("Successfull Post Todo2");
                                    setLoading(false);
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            })
                            .catch(err => {
                                console.log(err);
                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })
    }


    return (
        <Aux>
            <div className="AddTaskListPanel">
                <h2>Add Task List</h2>
                <InputTaskListArea name="TaskList" setData={setTaskListName}/>
                <InputTaskListArea name="Todo 1" setData={setTodo1Name}/>
                <InputTaskListArea name="Todo 2" setData={setTodo2Name}/>
                <SubmitButton click={submitHandler}/>
                { loading ? <div className="SpinnerContainer"><Spinner/></div> : null}
            </div>
        </Aux>
    )
}

export default AddTaskListPanel;