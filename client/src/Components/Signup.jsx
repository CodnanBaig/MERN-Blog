import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { USER_SIGNUP } from "../Utils/api";
import axios from "axios";
import { TokenContext } from "../Context/TokenContextProvider";

const URL = `http://localhost:8888/api${USER_SIGNUP}`;
export const Signup = () => {
  const [userDetails, setUserDetails] = useState({});
  const { setIsAuth, setToken } = useContext(TokenContext);
  const signUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const new_user = {
      name: name,
      email: email,
      password: password,
    };
    setUserDetails(new_user);
    try {
      const res = await axios.post(URL, userDetails);
      setToken(res.data.token);
      setIsAuth(true);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="auth-card border p-4 rounded bg-dark text-light">
        <h3 className="text-left">Sign Up</h3>
        <Form onSubmit={signUp}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </div>
    </div>
  );
};
