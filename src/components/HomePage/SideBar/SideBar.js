import React from 'react';
import './SideBar.css';
import Aux from '../../../hoc/Axu';
import Item from './Item/Item';
import { faCalendarMinus, faCalendarCheck, faInbox, faCalendarAlt, faTint } from '@fortawesome/free-solid-svg-icons';
import Project from './Project/Project';

const sideBar = (props) => (
    <Aux>
        <div className="SideBar">
            <Item icon={faInbox} label="Inbox" number="3" color="#01c5c4"/>
            <Item icon={faCalendarMinus} label="Today" number="4" color="#7ea04d"/>
            <Item icon={faCalendarAlt} label="7 days" number="10" color="#a37eba"/>
            <Item icon={faTint} label="Important" number="5" color="#fe7171"/>
            <Project/>
        </div>
    </Aux>
)

export default sideBar;