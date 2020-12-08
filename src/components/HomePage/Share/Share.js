import React, {useEffect, useState} from 'react';
import Aux from '../../../hoc/Axu';
import TaskList from './Tasklist/Tasklist';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../axios/axios';
import taskList from '../SideBar/Project/TaskList/TaskList';


function Share(props){
    const [taskLists, setTasklist] = useState([props.tasklists]);

    const list = taskLists.reduce(taskList => {
        return taskList;
    })
    
    const lists = list.map(list => {
        return <div
                    key={list.id}>
                        <TaskList
                            name={list.name}
                            id={list.id}
                            key={list.id+list.name}/>
                </div>
    })

    return (
        <Aux>
            <div className="MainDisplay">
                <div className="TaskListArea">
                    <Row>
                        {lists}
                    </Row>
                </div>
            </div>
        </Aux>
    )
}

export default Share;