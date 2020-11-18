import React from 'react';
import './AddTodoMain.css';
import Aux from '../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function AddTodoMain(props) {
    
    return (
        <Aux>
            <div className="AddTodoMain">
                <FontAwesomeIcon icon={faPlus}/>
                <input type="text" placeholder="Add todo"/>
            </div>
        </Aux>
    )
    
}
export default AddTodoMain;