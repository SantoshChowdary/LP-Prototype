import React, {useState, useContext} from 'react';
import {useHistory, Redirect} from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../context/storeContext';

import './index.css'

interface LoginFormState {
    username : string;
    password : string;
}

const Login = observer((props: any) => {

    const [formData, setFormData] = useState<LoginFormState>({
        username : 'rahul',
        password : 'rahul@2021'
    })

    const store: any = useContext(StoreContext);
    const {authStore} = store;
    const history = useHistory()

    const onChangeUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setFormData({...formData, [name]:value});
    }

    const onSubmitLoginForm = async (e:React.FormEvent) => {
        e.preventDefault()
        await authStore.login(formData.username, formData.password);
        if (authStore.isAuthenticated) {
            history.replace("/")
        }
    }

    if (authStore.isAuthenticated) {
        return <Redirect to="/" />
    }

    return (
        <div className="login-container">
            <div className="login-sub-container-1">
                <h1 className="login-heading">Login</h1>
                <form className='login-form' onSubmit={onSubmitLoginForm}>
                    <input 
                        type="text" 
                        placeholder='Email / Username'
                        name="username" 
                        className='login-input'
                        autoComplete='off'
                        onChange={onChangeUserInput}
                        value={formData.username}
                    />
                    <input 
                        type="password" 
                        name="password"
                        placeholder='Password' 
                        className='login-input'
                        onChange={onChangeUserInput}
                        value={formData.password}
                    />
                    <button type='submit' className='login-button'>Log in</button>
                    <p className="error-msg"> {authStore.error} </p>
                </form>
            </div>
            {/* <p className='sign-up-section'>Don't have an account? <button className="span-sign-up">Sign Up</button></p> */}
        </div>
    )

});

export default Login

