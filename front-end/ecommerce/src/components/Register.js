import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

var myCurrentDate = new Date();
var date =
  myCurrentDate.getFullYear() +
  "-" +
  (myCurrentDate.getMonth() + 1) +
  "-" +
  myCurrentDate.getDate() +
  " " +
  myCurrentDate.getHours() +
  ":" +
  myCurrentDate.getMinutes() +
  ":" +
  myCurrentDate.getSeconds();
const newCurrentDate = "Current Date and Time: " + date;

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

const Register = () => {
  const history = useHistory();
  console.log(newCurrentDate);
  const handleSubmit = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    alert("Register Successful!");
    history.push("/"); //Navigate after successful login
  };
  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            name="username"
            label="Username"
            placeholder="Username"
            width={6}
          />
          <Form.Input
            name="password"
            label="Password"
            placeholder="Password"
            width={6}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            name="firstname"
            label="FirstName"
            placeholder="First Name"
            width={6}
          />
          <Form.Input
            name="lastname"
            label="LastName"
            placeholder="Last Name"
            width={6}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            name="postalcode"
            label="PostalCode"
            placeholder="Postal Code"
            width={6}
          />
          <Form.Select
            name="gender"
            fluid
            label="Gender"
            options={options}
            placeholder="Gender"
            width={6}
          />
        </Form.Group>
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default Register;
