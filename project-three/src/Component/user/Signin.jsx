import React , {useState , useEffect} from 'react'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import Axios from 'axios'

export const Signin = (props) => {
const [signin , setSignin] = useState({})


    let onChangeInput = ({target :{name , value}}) => {
        setSignin({ ...signin, [name]: value })
    }
useEffect(() => {
    console.log(signin)
})

    let onSubmit = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:4000/signin', signin)
        .then(res =>{
            if (res.data.token ){

                localStorage.setItem('token' ,res.data.token )
                props.userLogin()
                props.history.push('/home')
            }else {

                console.log("email or password is not correct")
            }
            

            
        })
        .catch(err => console.log(err))
    }
    return (
        <>
           <Form className="mt-5">
                <Row className="justify-content-center mt-5">
                    <Col md={8}>
                        <Form.Row>
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
                            Sign in
                    </Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}