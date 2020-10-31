import React from 'react';
import './Logo.css';
import Aux from '../../../../hoc/Axu';

const logo = (props) => (
    <Aux>
        <div className="Logo" onClick={props.clickedLogo}>
            <p>Suynghidi</p>
        </div>
    </Aux>
)

export default logo;