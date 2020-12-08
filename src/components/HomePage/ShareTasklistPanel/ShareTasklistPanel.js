import React from 'react';
import Aux from '../../../hoc/Axu';
import InputTaskListArea from '../AddTaskListPanel/InputTaskListArea/InputTaskListArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function ShareTasklistPanel() {
    <Aux>
        <div className="AddTaskListPanel ShareTaskListPanel">
                <h2>Share Task List</h2>
                {props.message ? <p style={{color:"red"}}>You need to enter tasklist name</p> : null}
                <div>
                    <InputTaskListArea name="User Email" setData={props.setTaskListName}/>
                    {props.correctEmail ? <FontAwesomeIcon icon={faCheck} color="#00ff00"/> : <FontAwesomeIcon icon={faCheck} color="#00ff2a"/>}
                </div>
                <div>
                    <InputTaskListArea name="TaskList Name" setData={props.setTodo1Name}/>
                    {props.correctTaskList ? <FontAwesomeIcon icon={faCheck} color="#00ff00"/> : <FontAwesomeIcon icon={faCheck} color="#00ff2a"/>}
                </div>
                <div>
                    <label>Edit Permission</label>
                    <input type="checkbox"/>
                </div>
                <SubmitButton click={props.submitHandler}/>
                { props.loading ? <div className="SpinnerContainer"><Spinner/></div> : null}
            </div>
    </Aux>
}

export default ShareTasklistPanel;