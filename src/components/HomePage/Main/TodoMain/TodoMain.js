import React, { useEffect, useState } from 'react';
import './TodoMain.css';
import Aux from '../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../../axios/axios';
import { set } from 'store';


function TodoMain(props) {

    const [checked, setChecked] = useState(props.check);
    const [changeTodo, setChangeTodo] = useState(false);
    const [todoName, setTodoName] = useState(props.name);
    const [todoNameTemporary, settodoNameTemporary] = useState(props.name);
    const [del, setDelete] = useState(false);
    
    useEffect(() => {
        async function updateDone() { 
            const request = await axios.patch(`/task_lists/${props.tasklistId}/todos/${props.id}`, {"done": `${checked}`});
        }
        updateDone();
    }, [checked]);

    const changeTodos = () => {
        setChangeTodo(true);
    }

    const cancelChangeTodos = () => {
        setChangeTodo(false);
        settodoNameTemporary(todoName);
    }

    const submitChangeTodos = () => {
        axios.patch(`/task_lists/${props.tasklistId}/todos/${props.id}`, {"name":`${todoNameTemporary}`})
        .then(res => {
            setChangeTodo(false);
            setTodoName(todoNameTemporary);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const changeHandler = (e) => {
        let value = e.target.value;
        settodoNameTemporary(value);
    }

    const deleteTodos = () => {
        axios.delete(`/task_lists/${props.tasklistId}/todos/${props.id}`)
        .then(res => {
            setDelete(true);
        })
        .catch(err => {
            console.log(err);
        })
        
    }

    return (
        <Aux> 

            {
                del ? "" :
                <div className="TodoMain">
                <div className="TodoMainCheckbox">
                    {changeTodo ? <input type="text" value={todoNameTemporary} onChange={changeHandler}/> : 
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
                    <input 
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}/>
                    <label style={{fontFamily: "inherit", fontWeight:"100"}}>{todoName}</label>
                    </div>
                    }
                </div>
                <div className="TodoMainIcon">
                    {changeTodo ? <FontAwesomeIcon icon={faCheck} style={{cursor:"pointer"}} onClick={submitChangeTodos}/> : <FontAwesomeIcon icon={faEdit} style={{cursor:"pointer"}} onClick={changeTodos}/>}
                    {changeTodo ? <FontAwesomeIcon icon={faTimes} style={{cursor:"pointer"}} onClick={cancelChangeTodos}/> : <FontAwesomeIcon icon={faTrash} style={{cursor:"pointer"}} onClick={deleteTodos}/>}
                </div>  
            </div>
            }  
        </Aux>
    )
}

export default TodoMain;