import React, { useState, useEffect } from 'react'
import { Row, Form, Col, Button, Alert } from 'react-bootstrap'
import Axios from 'axios'
import TimePicker from 'react-time-picker'

export const CreateItem = (props) => {
    const [item, setItem] = useState({})// item info
    // const [register , setRegister] = useState(false) // to show aleart


    //to add the input inside item
    let onChangeInput = ({ target: { name, value } }) => {
        setItem({ ...item, [name]: value })
        console.log(item)
    }

    let onChangeTime = ( name, value ) => {
        setItem({ ...item, [name]: value })
    }
    // to add the item info to database
    let onSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:4000/home/create', item)
            .then(res => {
                console.log(res)
            //         if (res.data.register){
            //             props.history.push('/home')
            //    }else{
            //             // setRegister(true)
            //             // setTimeout(() => {
            //             //     setRegister(false)
            //             // }, 4000);
            //         } 
            })
            .catch(err => console.log(err))
    }
//==================================================
    return (
        <>
            {/* {register && <Alert variant={"danger"}>
              the email used . plz change the email 
            </Alert> } */}
            <Form className="mt-5" >
                <Row className="justify-content-center mt-5">
                    <Col md={8}>
                        <Form.Row className="my-4">
                            <Col md={12}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Name" name="name" onChange={(e) => onChangeInput(e)} />
                            </Col>
                        </Form.Row>
                        <Form.Row className="my-4">
                            <Col md={12}>
                                <Form.Label>Image</Form.Label>
                                <Form.Control controlId="formGridDate" name="image" onChange={(e) => onChangeInput(e)} />
                            </Col>
                        </Form.Row>
                        <Form.Row className="my-4">
                            <Col md={12}>
                                <Form.Group controlId="date" bsSize="large">
                                <Form.Label>Exp Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    style={{width:'100%'}}
                                    name="expiration_date"
                                    onChange={(e) => onChangeInput(e)}
                                />
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Group controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="1234 Main St" name="address" onChange={(e) => onChangeInput(e)} />
                        </Form.Group>
                        <Form.Label>Time-From</Form.Label>
                        <TimePicker as={Col} md={6}
                            className="form-control"
                            disableClock={true}
                            clockIcon={null}
                            locale="sv-sv"
                            name="time_from"
                            onChange={(e) => onChangeTime("time_from", e )}
                        />
                        <Form.Label>Time-Till</Form.Label>
                        <TimePicker as={Col} md={6}
                            className="form-control"
                            disableClock={true}
                            clockIcon={null}
                            locale="sv-sv"
                            name="time_till"
                            onChange={(e) => onChangeTime("time_till", e)}
                        />
                        <Row>
                        <Button variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
                            Signup
                        </Button>
                        </Row>
                    </Col>
                </Row>
            </Form>

        </>
    )
}