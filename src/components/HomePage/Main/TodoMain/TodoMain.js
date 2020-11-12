import React from 'react';
import './TodoMain.css';
import Aux from '../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


const todoMain = (props) => (
    <Aux>
        <div className="TodoMain">
            <input type="checkbox"/>
            <label>{props.name}</label>
            <div className="TodoMainIcon">
                <FontAwesomeIcon icon={faTrash}/>
                <FontAwesomeIcon icon={faEdit}/>
            </div>
        </div>
    </Aux>
)

export default todoMain;