import React, { useState, useEffect } from 'react';
import './AddTaskListPanel.css';
import Aux from '../../../hoc/Axu';
import InputTaskListArea from './InputTaskListArea/InputTaskListArea';
import axios from '../../../axios/axios';
import SubmitButton from './SubmitButton/SubmitButton';
import Spinner from '../../Welcome/Spinner/Spinner';

function AddTaskListPanel (props) {

    return (
        <Aux>
            <div className="AddTaskListPanel">
                <h2>Add Task List</h2>
                {props.message ? <p style={{color:"red"}}>You need to enter tasklist name</p> : null}
                <InputTaskListArea name="TaskList" setData={props.setTaskListName}/>
                <InputTaskListArea name="Todo 1" setData={props.setTodo1Name}/>
                <InputTaskListArea name="Todo 2" setData={props.setTodo2Name}/>
                <SubmitButton click={props.submitHandler}/>
                { props.loading ? <div className="SpinnerContainer"><Spinner/></div> : null}
            </div>
        </Aux>
    )
}

export default AddTaskListPanel;