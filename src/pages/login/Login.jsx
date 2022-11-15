import React, { useState } from 'react'
import { Form, Input} from '../../styles';
import { LoginContainer } from './login_styles';

const initialState = {
  email: '',
  password: ''    
}

const Login = () => {
  const [ userData, setUserData ] = useState(initialState);

  const handleSubmit = (event, userData) => {
        const localStorage = window.localStorage;
        event.preventDefault();
        const storedUser = localStorage.getItem("starwarsLocalUser");
        const parseStoredUser = JSON.parse(storedUser);
        
        if(parseStoredUser?.email === userData.email) {
            return;
        }

        localStorage.setItem("starwarsLocalUser", JSON.stringify(userData));
    }

    const handleInputChange = (target) => {
        setUserData({
            ...userData, [target.name]: target.value
        })
    }


  return (
    <LoginContainer>
        <h2 className='text-yellow-300 py-1 pt-3 font-bold text-2xl'>LOGIN</h2>

        <Form onSubmit={(event) => handleSubmit(event)}>
            <Input 
                type="email" 
                name="email" 
                value={userData.email}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="Email Address"
                required/>
            <Input 
                type="password" 
                name="password" 
                value={userData.password}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="Password"
                required/>

            <button className="btn btn-outline btn-warning" type="submit">Login</button>
        </Form>
    </LoginContainer>
  )
}

export default Login;