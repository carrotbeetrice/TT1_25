import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

const Login = () => {
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
  };
  return (
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
  );
};

export default Login;
