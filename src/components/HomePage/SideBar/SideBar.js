import React, { useEffect, useState } from 'react';
import './SideBar.css';
import Aux from '../../../hoc/Axu';
import Item from './Item/Item';
import { faCalendarMinus, faInbox, faCalendarAlt, faTint, faStar } from '@fortawesome/free-solid-svg-icons';
import Project from './Project/Project';
import axios from '../../../axios/axios';

function SideBar(props) {
    const [shared, setShared] = useState([]);
    const [share, setShare] = useState([]);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        async function fetchData () {
            try {
                const request = await axios.request('/task_lists');
                const taskList = request.data;
                const share = [];
                taskList.map(taskList => {
                    if(taskList.share_count !== 0){
                        share.push(taskList.id);
                    }
                })
                setShare(share);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData () {
            try {
                const request = await axios.request('/shared');
                setShared(request.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        async function fetchData () {
            try {
                const request = await axios.request('/task_lists');
                setTaskList(request.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])

    return (
        <Aux>
            <div className="SideBar">
                <Item icon={faStar} label="Todo" number={taskList.length} color="white"/>
                <Item icon={faInbox} label="Inbox" number={shared.length} color="white"/>
                <Item icon={faCalendarMinus} label="Share" number={share.length} color="white"/>
            </div>
        </Aux>
    )
}

export default SideBar;