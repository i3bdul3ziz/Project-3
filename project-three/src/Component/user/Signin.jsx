import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import Axios from "axios";
import "../../index.css";

export const Signin = (props) => {
  const [signin, setSignin] = useState({});

  let onChangeInput = ({ target: { name, value } }) => {
    setSignin({ ...signin, [name]: value });
  };
  useEffect(() => {});

  let onSubmit = (e) => {
    e.preventDefault();
    Axios.post("/api/signin", signin)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.userLogin();
          props.history.push("/items");
        } else {
          console.log("email or password is not correct");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Row className="sectionTitles justify-content-center">
        <h3>Sign in</h3>
      </Row>
      <Form>
        <Row className="justify-content-center">
          <Col md={4} className="signMargin">
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form.Row>
            <Button
              className="formButton"
              type="submit"
              onClick={(e) => onSubmit(e)}
            >
              Sign in
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
