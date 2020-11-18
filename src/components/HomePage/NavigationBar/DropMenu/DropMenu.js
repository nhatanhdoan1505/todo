import React from 'react';
import './DropMenu.css';
import Aux from '../../../../hoc/Axu';
import { faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import DropMenuItem from './DropMenuItem/DropMenuItem';

const dropMenu = (props) => (
    <Aux>
        <div className="DropMenu">
            <DropMenuItem label="Profile" icon={faAddressCard}/>
            <DropMenuItem label="Log Out" icon={faSignOutAlt} clicked={props.clickedSignOutButton}/>
        </div>
    </Aux>
)

export default dropMenu;