import React from 'react';
import store from 'store';
import history from '../../history/history';
import NavigationBar from '../HomePage/NavigationBar/NavigationBar';
import WorkPlace from '../HomePage/WorkPlace/WorkPlace';
const isLoggedIn = store.get("isLoggedIn");

const logout = () => {
    store.set('isLoggedIn', false);
    history.push("/account");
}

const refeshPage = () => {
    history.push('/account');
}

const homePage = () => {
    if(isLoggedIn === false){   
        return history.push('/account');
    }
    return(
        <div className="HomePage">
            <NavigationBar refeshPage={refeshPage} clickedSignOutButton={logout}/>
            <WorkPlace/>
        </div>
        
    )
}

export default homePage;