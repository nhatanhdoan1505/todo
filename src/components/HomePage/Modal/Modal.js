import React from 'react';
import './Modal.css';
import Aux from '../../../hoc/Axu';
import BackDrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Aux>
        <BackDrop 
            show={props.showAddList}
            cancel={props.cancelAddTaskList}/>
        <div 
        className="Modal"
        style={{transform: props.showAddList ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.showAddList ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
)

export default modal;