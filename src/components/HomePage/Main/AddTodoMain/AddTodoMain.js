import React from 'react';
import './AddTodoMain.css';
import Aux from '../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function AddTodoMain(props) {

    const changeHandler = (e) => {
        let value = e.target.value;
        props.setData(value);
    }
    
    return (
        <Aux>
            <div className="AddTodoMain">
                <FontAwesomeIcon icon={faPlus} onClick={props.click} className="AddTodoMainBtn"/>
                <input type="text" placeholder="Add todo" onChange={changeHandler} value={props.value}/>
            </div>
        </Aux>
    )
}

export default AddTodoMain;