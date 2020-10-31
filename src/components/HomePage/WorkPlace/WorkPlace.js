import React from 'react';
import './WorkPlace.css';
import Aux from '../../../hoc/Axu';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';

const workPlace = (props) => (
    <Aux>
        <div className="WorkPlace">
            <SideBar/>
            <Main/>
        </div>
    </Aux>
)

export default workPlace;