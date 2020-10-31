import React from 'react';
import './Search.css';
import Aux from '../../../../hoc/Axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const search = (props) => (
    <Aux>
        <div className="Search">
                <FontAwesomeIcon icon={faSearch} color="white"/>
                <input type="text" placeholder="Làm cho oai thôi chơ chưa tìm được mô"/>
        </div>
    </Aux>
)

export default search;