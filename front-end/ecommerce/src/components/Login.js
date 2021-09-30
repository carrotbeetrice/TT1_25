import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    const options = {
      method: "POST",
      body: formData,
    };

    /*
    fetch('http://localhost:8000/api/login', options).then((response) => {

      notification.success({
          message: "login successfully."
      });
      history.push("/"); //Navigate after successful login
    }).catch(error => {
      alert('Login Failed. Try Again') // Error Handling
    });
    */
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            name="username"
            label="Username"
            placeholder="Username"
            width={6}
          />
          <Form.Input
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
            width={6}
          />
        </Form.Group>

        <Button type="submit">Login</Button>
      </Form>
      <Link to="/register">
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default Login;
