import React from 'react';
import './SideBar.css';
import Aux from '../../../hoc/Axu';
import Item from './Item/Item';
import { faCalendarMinus, faInbox, faCalendarAlt, faTint } from '@fortawesome/free-solid-svg-icons';
import Project from './Project/Project';

const sideBar = (props) => (
    <Aux>
        <div className="SideBar">
            <Item icon={faInbox} label="Inbox" number="3" color="white"/>
            <Item icon={faCalendarMinus} label="Today" number="4" color="white"/>
            <Item icon={faCalendarAlt} label="7 days" number="10" color="white"/>
            <Item icon={faTint} label="Important" number="5" color="white"/>
            <Project/>
        </div>
    </Aux>
)

export default sideBar;