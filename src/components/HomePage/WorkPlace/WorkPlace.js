import React from 'react';
import './WorkPlace.css';
import Aux from '../../../hoc/Axu';
import SideBar from '../SideBar/SideBar';
import Main from '../Main/Main';
import NavigationBar from '../NavigationBar/NavigationBar';
import store from 'store';
import history from '../../../history/history';
import { PureComponent } from 'react';


class WorkPlace extends PureComponent {
    state = {
        addTasklist: false
    };

    logout = () => {
        store.set('isLoggedIn', false);
        history.push("/account");
    };
    
    refeshPage = () => {
        history.push('/account');
    };
    
    addTasklistHandler = () => {
        this.setState({
            addTasklist: true
        });
    };

    cancelAddTaskList = () => {
        this.setState({
            addTasklist: false
        })
    }

    render() {
        return(
            <Aux>
                <div className="WorkPlace">
                    <SideBar/>
                    <div className="ActionArea">
                        <NavigationBar 
                        refeshPage={this.refeshPage} 
                        clickedSignOutButton={this.logout}/>

                        <Main 
                        addTasklist={this.addTasklistHandler} 
                        showAddList={this.state.addTasklist}
                        cancelAddTaskList={this.cancelAddTaskList}/>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default WorkPlace;