import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

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
  console.log(newCurrentDate);
  return (
    <div>
      <h1>Register</h1>
      <Form>
        <Form.Group>
          <Form.Input label="Username" placeholder="Username" width={6} />
          <Form.Input label="Password" placeholder="Password" width={6} />
        </Form.Group>
        <Form.Group>
          <Form.Input label="FirstName" placeholder="First Name" width={6} />
          <Form.Input label="LastName" placeholder="Last Name" width={6} />
        </Form.Group>
        <Form.Group>
          <Form.Input label="PostalCode" placeholder="Postal Code" width={6} />
          <Form.Select
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
