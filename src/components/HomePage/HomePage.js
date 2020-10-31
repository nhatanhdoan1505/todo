import React from 'react';
import store from 'store';
import history from '../../history/history';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import WorkPlace from '../HomePage/WorkPlace/WorkPlace';
const isLoggedIn = store.get("isLoggedIn");

const logout = () => {
    store.remove('isLoggedIn');
    history.push("/account");
}

const refeshPage = () => {
    history.push('/account');
}

const homePage = () => {
    if(isLoggedIn === undefined){   
        return history.push('/account');
    }
    return(
        <div className="HomePage">
            <NavigationBar refeshPage={refeshPage}/>
            <WorkPlace/>
        </div>
        
    )
}

export default homePage;