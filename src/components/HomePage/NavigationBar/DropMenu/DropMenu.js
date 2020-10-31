import React from 'react';
import './DropMenu.css';
import Aux from '../../../../hoc/Axu';
import { faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const dropMenu = (props) => (
    <Aux>
        <div className="DropMenu">
            <div className="Profile">
                <FontAwesomeIcon icon={faAddressCard}/>
                <p>Profile</p>
            </div>
            <div className="Logout">
                <FontAwesomeIcon icon={faSignOutAlt}/>
                <p>Log out</p>
            </div>
        </div>
    </Aux>
)

export default dropMenu;