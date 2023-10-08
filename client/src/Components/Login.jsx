import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { USER_SIGNIN } from '../Utils/api';
import axios from 'axios';
import { TokenContext } from '../Context/TokenContextProvider';
import { useNavigate } from 'react-router-dom';


const URL = `http://localhost:8888/api${USER_SIGNIN}`;
export const Login = () => {
  const navigate = useNavigate();
  const {setIsAuth, setToken} = useContext(TokenContext); 

  const login = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = {
      email:email,
      password:password
    }
    try {
      const res = await axios.post(URL, user);
      console.log(res.data);
      setIsAuth(true)
      setToken(res.data.token)
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <div>
        <div className="auth-card border p-4 rounded bg-dark text-light">
        <h3 className="text-left">Login</h3>
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name='password' />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </div>
  )
}
