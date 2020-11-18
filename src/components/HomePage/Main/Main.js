import React, {useEffect, useState} from 'react';
import './Main.css';
import Aux from '../../../hoc/Axu';
import TaskListMain from './TasklistMain/TasklistMain';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import AddTaskListPanel from '../AddTaskListPanel/AddTaskListPanel';
import axios from '../../../axios/axios';


function Main(props){

    const [tasklists, setTasklist] = useState([]);
    useEffect(() => {
        async function fetchTaskList(){
            try {
                const request = await axios.request('/task_lists');
                setTasklist(request.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTaskList();
    }, [])

    return (
        <Aux>
            <div className="MainDisplay">
                <Modal 
                showAddList={props.showAddList}
                cancelAddTaskList={props.cancelAddTaskList}>
                    <AddTaskListPanel/>
                </Modal>
                <div className="TaskListOption">
                    <FontAwesomeIcon icon={faPlus} onClick={props.addTasklist}/>
                    <FontAwesomeIcon icon={faShareSquare}/>
                </div>
                <div className="TaskListArea">
                    <Row>
                        {tasklists.map(tasklist => {
                            return <Col lg={3} key={tasklist.id}><TaskListMain name={tasklist.name} id={tasklist.id} key={tasklist.id}/></Col>
                        })}    
                    </Row>
                </div>
            </div>
        </Aux>
    )
}

export default Main;