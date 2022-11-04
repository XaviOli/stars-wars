import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Form, Input, Label} from '../../styles';
import { RegisterContainer} from './register_styles';

const Register = () => {
    const [ formInformation, setFormInformation ] = useState({
        name: '',
        lastname: '',
        email: '',
        password: ''    
    });
    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }

    const handleInputChange = (target) => {
        setFormInformation({
            ...formInformation, [target.name]: target.value
        })
    }

  return (
    <RegisterContainer>
        <h2>CREATE YOUR ACCOUNT</h2>

        <Form onSubmit={(event) => handleSubmit(event)}>
            <Input 
                type="text" 
                name="name" 
                value={formInformation.name}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="First Name"
                required/>
            <Input 
                type="text" 
                name="lastname" 
                value={formInformation.lastname}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="Last Name"
                required/>
            <Input 
                type="email" 
                name="email" 
                value={formInformation.email}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="Email Address"
                required/>
            <Input 
                type="password" 
                name="password" 
                value={formInformation.password}
                onChange={(event) => handleInputChange(event.target)}
                placeholder="Password"
                required/>

            <Label><input type="checkbox" /> Show password</Label>
            <Label><input type="checkbox" /> Yes! I would like to receive by email special offers and updates about Lucasfilm Ltd. and other products and services from The Walt Disney Family of Companies.</Label>

            <p>By creating an account, you agree to our Terms of Use, and acknowledge that you have read our Privacy Policy, Cookies Policy and UK & EU Privacy Rights. More...</p>
            <p>My home country/region: Spain. Change.</p>

            <button type="submit">Create Account</button>
        </Form>

        <p>Already have an account? <a onClick={() => navigate("/login")}>Sign In</a></p>
    </RegisterContainer>
  )
}

export default Register;