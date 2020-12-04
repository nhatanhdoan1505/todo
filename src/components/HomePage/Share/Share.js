import React, {useEffect, useState} from 'react';
import Aux from '../../../hoc/Axu';
import TaskListMain from '../Main/TasklistMain/TasklistMain';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import axios from '../../../axios/axios';
import taskList from '../SideBar/Project/TaskList/TaskList';


function Share(props){
    const [taskLists, setTasklist] = useState([props.tasklists]);

    useEffect(() => {
        async function fetchData () {
            try {
                let list = [];
                taskLists.map(taskList => {
                    axios.request(`/task_lists/${taskList[0].id}/share`)
                    .then(res => {        
                        let task = res.data[0];
                        task.name = taskList[0].name;
                        list.push(task);
                    })
                    .catch(err => {
                        console.log(err);
                    })
                })
                setTasklist(list);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const list = taskLists.map(tasklist => {
        return <Col 
                    lg={3} 
                    key={tasklist.id}>
                        <TaskListMain 
                            name={tasklist.name} 
                            id={tasklist.task_list_id} 
                            key={tasklist.task_list_id+tasklist.name}
                            edit={true}
                            partner_id={tasklist.user_id}/>
                </Col>
    })

    return (
        <Aux>
            <div className="MainDisplay">
                <div className="TaskListArea">
                    <Row>
                        {list}
                    </Row>
                </div>
            </div>
        </Aux>
    )
}

export default Share;