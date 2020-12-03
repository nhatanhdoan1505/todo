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

    logout = () => {
        store.set('isLoggedIn', false);
        history.push("/account");
    };
    
    refeshPage = () => {
        history.push('/account');
    };
    
    

    render() {
        return(
            <Aux>
                <div className="WorkPlace">
                    <SideBar/>
                    <div className="ActionArea">
                        <NavigationBar 
                        refeshPage={this.refeshPage} 
                        clickedSignOutButton={this.logout}/>
                        <Main/>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default WorkPlace;