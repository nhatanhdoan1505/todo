import React from 'react';
import Aux from '../../../hoc/Axu';
import InputTaskListArea from '../AddTaskListPanel/InputTaskListArea/InputTaskListArea';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../../Welcome/Spinner/Spinner';
import "./ShareTasklistPanel.css";

function ShareTasklistPanel(props) {

    let submit = false;

    const setPermission = (e) => {
        let value = e.target.value;
        props.setData(value);
    }

    if(props.correctEmail && props.correctTaskList){
        submit = true;
    }

    return(
        <Aux>
        <div className="AddTaskListPanel ShareTaskListPanel">
                <h2>Share Task List</h2>
                {props.message ? <p style={{color:"red"}}>You need to enter tasklist name</p> : null}
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <InputTaskListArea name="User Email" setData={props.setUserEmail}/>
                    {props.correctEmail ? <FontAwesomeIcon icon={faCheck} color="#00ff00"/> : <FontAwesomeIcon icon={faTimes} color="#ff0000"/>}
                </div>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <InputTaskListArea name="TaskList Name" setData={props.setTasklistName}/>
                    {props.correctTaskList ? <FontAwesomeIcon icon={faCheck} color="#00ff00"/> : <FontAwesomeIcon icon={faTimes} color="#ff0000"/>}
                </div>
                <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}} onChange={setPermission.bind(this)}>
                    <label>Edit Permission</label>
                    <input type="radio" value="editor" name="name"/>Editor
                    <input type="radio" value="watcher" name="name"/>Watcher
                </div>
                <button onClick={props.submitHandler} disabled={!submit} style={{width:"30%", padding:"5px", backgroundColor:"#5cb85c", color:"white", outline:"none", border:"none"}}>Submit</button>
                { props.loading ? <div className="SpinnerContainer"><Spinner/></div> : null}
            </div>
    </Aux>

    )
}

export default ShareTasklistPanel;