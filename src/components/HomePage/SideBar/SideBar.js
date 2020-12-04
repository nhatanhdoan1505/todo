import React, { useEffect, useState } from 'react';
import './SideBar.css';
import Aux from '../../../hoc/Axu';
import Item from './Item/Item';
import { faCalendarMinus, faInbox, faCalendarAlt, faTint, faStar } from '@fortawesome/free-solid-svg-icons';
import Project from './Project/Project';
import axios from '../../../axios/axios';
import { propTypes } from 'react-bootstrap/esm/Image';

function SideBar(props) {

    return (
        <Aux>
            <div className="SideBar">
                <Item icon={faStar} label="Todo" number={props.tasklists} color="white" onClick={props.clickTodo}/>
                <Item icon={faInbox} label="Inbox" number={props.shared} color="white" onClick={props.clickInBox}/>
                <Item icon={faCalendarMinus} label="Share" number={props.share} color="white" onClick={props.clickShare}/>
            </div>
        </Aux>
    )
}

export default SideBar;