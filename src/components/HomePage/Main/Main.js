import React from 'react';
import './Main.css';
import Aux from '../../../hoc/Axu';
import TaskListMain from './TasklistMain/TasklistMain';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShareSquare } from '@fortawesome/free-solid-svg-icons';


const main = (props) => (
    <Aux>
        <div className="MainDisplay">
            <div className="TaskListOption">
                <FontAwesomeIcon icon={faPlus}/>
                <FontAwesomeIcon icon={faShareSquare}/>
            </div>
            <div className="TaskListArea">
            <Row>
                    <Col lg={3}>
                        <TaskListMain name="Viec nha"/>
                    </Col>
                    <Col lg={3}>
                        <TaskListMain name="Viec nha"/>
                    </Col>
                    <Col lg={3}>
                        <TaskListMain name="Viec nha"/>
                    </Col>
                    <Col lg={3}>
                        <TaskListMain name="Viec nha"/>
                    </Col>
                    <Col lg={3}>
                        <TaskListMain name="Viec nha"/>
                    </Col>
                    <Col lg={3}>
                        <TaskListMain name="Viec nha"/>
                    </Col>
                    <Col lg={3}>
                        <TaskListMain name="Viec nha"/>
                    </Col>
                    <Col lg={3}>
                        <TaskListMain name="Viec nha"/>
                    </Col>
                    <Col lg={3}>
                        <TaskListMain name="Viec nha"/>
                    </Col>
                </Row>
            </div>
        </div>
    </Aux>
)

export default main;