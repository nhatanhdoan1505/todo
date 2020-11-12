import React from 'react';
import './TasklistMain.css';
import Aux from '../../../../hoc/Axu';
import TodoMain from '../TodoMain/TodoMain';
import AddTodoMain from '../AddTodoMain/AddTodoMain';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const taskListMain = (props) => (
    <Aux>
        <div className="TaskListMain">
            <div className="TaskListMainName">
                <h2>{props.name}</h2>
                <div className="TaskListMainNameIcon">
                    <FontAwesomeIcon icon={faEdit}/>
                </div>
            </div>
            <div className="TodosMain">
                <TodoMain name="Rửa bát"/>
                <TodoMain name="Quét nhà"/>
                <TodoMain name="Phơi áo quần"/>
                <TodoMain name="Phơi áo quần"/>
                <TodoMain name="Phơi áo quần"/>
                
            </div>
            <AddTodoMain />
            <div className="DeleteBtn">
                <FontAwesomeIcon icon={faTrashAlt} color="red"/>
            </div>
        </div>
    </Aux>
)

export default taskListMain;