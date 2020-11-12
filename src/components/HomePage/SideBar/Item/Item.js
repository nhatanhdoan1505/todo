import React from 'react';
import './Item.css';
import Aux from '../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const item = (props) => (
    <Aux>
        <div className="Item">
            <div className="Icon">
            <FontAwesomeIcon icon={props.icon} color={props.color}/>
            </div>
                <p className="Label">{props.label}</p>
                <p className="Number">{props.number}</p>
        </div>
    </Aux>
)

export default item;