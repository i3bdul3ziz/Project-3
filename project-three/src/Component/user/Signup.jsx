import React, { useState, useEffect } from 'react'
import { Row, Form, Col, Button, Alert } from 'react-bootstrap'
import Axios from 'axios'

export const SingUp = (props) => {
    const [user, setUser] = useState({})// user info
    const [register , setRegister] = useState(false) // to show aleart
  
    //to add the input inside user
    let onChangeInput = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }
    // to add the user info to database
    let onSubmit = (e) => {
        e.preventDefault()
        Axios.post('/api/signup', user)
            .then(res => {
                    if (res.data.register){
                        props.history.push('/signin')
               }else{
                        setRegister(true)
                        setTimeout(() => {
                            setRegister(false)
                        }, 4000);
                    } 
            })
            .catch(err => console.log(err))
    }
//==================================================
    return (
        <div className="logout-component">
            {register && <Alert variant={"danger"}>
              the email used . plz change the email 
            </Alert> }
            <Form className="mt-5" >
                <Row className="justify-content-center mt-5">
                    <Col md={8}>
                        <Form.Row className="my-4">
                            <Col md={12}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Name" name="name" onChange={(e) => onChangeInput(e)} />
                            </Col>
                        </Form.Row>
                        <Form.Row className="my-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={(e) => onChangeInput(e)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => onChangeInput(e)} />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="outline-primary" type="submit" onClick={(e) => onSubmit(e)}>
                            Sign up
                    </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}