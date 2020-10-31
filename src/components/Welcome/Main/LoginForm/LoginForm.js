import React, { Component } from 'react';
import Aux from '../../../../hoc/Axu';
import Input from './Input/Input';
import './LoginForm.css';
import Button from './Button/Button';
import axios from '../../../../axios/axios';
import Spinner from '../../Spinner/Spinner';
import store from 'store';
import { withRouter } from 'react-router-dom';
import history from '../../../../history/history';
import KeyboardEventHandler from 'react-keyboard-event-handler';

class LoginForm extends Component {
    state = {
        email: "",
        password: "",
        message: false,
        loading: false
    }

    setEmail = (email) => {
        this.setState({email: email});
    }

    setPassword = (password) => {
        this.setState({password: password});
    }

    loginHandler = () => {
        this.setState({loading: true});
        axios.post('/auth/sign_in', this.state)
        .then((res) => {
            this.setState({loading:false});
            store.set('isLoggedIn', true);
            history.push({pathname:'/'});  
        })
        .catch((error) => {
            this.setState({loading:false});
            this.setState({message: error.response.data.errors});
        })
    }

    keyPress = () => {
        this.loginHandler();
    }

    render() {
        const isLoggedIn = store.get("isLoggedIn");
        if(isLoggedIn === true){
            return history.push("/");
        }
        return (
            <Aux>
                <KeyboardEventHandler
                    handleKeys={['enter']}
                    onKeyEvent={this.keyPress}>
                    <div className="LoginForm">
                        <h2 className="Title">Login</h2>
                        {this.state.message ? this.state.message.map(mes => <p key={mes} style={{color: "red", textAlign:"center", marginTop:"3px"}}>{mes}</p>) : ""}
                        {this.props.isRegistered ? <p style={{color:"#a8df65", textAlign:"center"}}>Successful Register, Log In to continue !</p> : ""}
                        <Input label="Email" type="email" setData={this.setEmail}/>
                        <Input label="Password" type="password" setData={this.setPassword}/>
                        <div className="ButtonGroup">
                            <Button className="LoginButton" title="Login" clicked={this.loginHandler}/>
                            <Button className="RegisterButton" title="Register" clicked={this.props.clickedRegisterButton}/>
                        </div>
                        {this.state.loading ? <div className="SpinnerContainer"><Spinner/></div> : ""}
                    </div>
                </KeyboardEventHandler>
            </Aux>
        )  
    }
} 
export default withRouter(LoginForm);