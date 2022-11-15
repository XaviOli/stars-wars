import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Input, Label} from '../../styles';
import { AlertText, RegisterContainer} from './register_styles';

const initialState = {
    name: '',
    lastname: '',
    email: '',
    password: ''    
}

const Register = () => {
    const [ userData, setUserData ] = useState(initialState);
    const [ userHasAccount, setUserHasAccount ] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (event, userData) => {
        const localStorage = window.localStorage;
        event.preventDefault();
        const storedUser = localStorage.getItem("starwarsLocalUser");
        const parseStoredUser = JSON.parse(storedUser);

        if(parseStoredUser?.email === userData.email) {
            setUserHasAccount(true)
            return;
        }

        userHasAccount && setUserHasAccount(false)
        localStorage.setItem("starwarsLocalUser", JSON.stringify(userData));
        setUserData(initialState);
    }

    const handleInputChange = (target) => {
        setUserData({
            ...userData, [target.name]: target.value
        })
    }

  return ( 
    <RegisterContainer>
        <h2 className='text-yellow-300 py-1 pt-3 font-bold'>CREATE YOUR ACCOUNT</h2>

        <Form onSubmit={(event) => handleSubmit(event, userData)}>
            <Input 
                type="text" 
                name="name" 
                value={userData.name}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="First Name"
                required/>
            <Input 
                type="text" 
                name="lastname" 
                value={userData.lastname}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="Last Name"
                required/>
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

            <Label><input type="checkbox" /> Show password</Label>
            <Label><input type="checkbox" /> Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies.</Label>

            <p>By creating an account, you agree to our Terms of Use, and acknowledge that you have read our Privacy Policy, Cookies Policy and UK & EU Privacy Rights. More...</p>
            <p>My home country/region: Spain. Change.</p>

            <button className="btn btn-outline btn-warning" type="submit">Create Account</button>

            {userHasAccount && <AlertText>You already own an account!</AlertText>}
        </Form>

        <p>Already have an account? <a onClick={() => navigate("/login")}>Sign In</a></p>
    </RegisterContainer>
  )
}

export default Register;