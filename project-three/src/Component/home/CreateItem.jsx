import React, { useState, useEffect } from 'react'
import { Row, Form, Col, Button, Alert, Image } from 'react-bootstrap'
import '../../index.css'
import Axios from 'axios'
import TimePicker from 'react-time-picker'
import GoogleMapReact from 'google-map-react'
import markerPath from '../../hiclipart.com.png'

export const CreateItem = (props) => {
    const [item, setItem] = useState({})// item info
    // const [register , setRegister] = useState(false) // to show aleart

    const Marker = () => <Image width={20} height={20} src={markerPath} />

    //to add the input inside item
    let onChangeInput = ({ target: { name, value } }) => {
        setItem({ ...item, [name]: value })
        // console.log(item)
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
                props.history.push('/items')
            })
            .catch(err => console.log(err))
    }
 

    const defaultProps = {
        center: {
        lat: 23.8859,
        lng: 45.0792
        },
        zoom: 6
    }
    let latm = 23.8859
    let lngm = 45.0792

    function getLatLng({lat, lng}){
        setItem({ ...item, "lat": lat, "lng": lng})
        console.log(lat)
        console.log(lng)
        latm = lat
        lngm = lng
        // setItem({ ...item, "lng": lng })
    }
    
        //==================================================
    return (
        <>
            {/* {register && <Alert variant={"danger"}>
              the email used . plz change the email 
            </Alert> } */}
            <Row className="mb-5 mx-0">
            <Col md={8}>
            <Form className="mt-5 mr-0" >
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
                        <TimePicker
                            className="form-control"
                            disableClock={true}
                            clockIcon={null}
                            locale="sv-sv"
                            name="time_from"
                            onChange={(e) => onChangeTime("time_from", e )}
                        />
                        <Form.Label>Time-Till</Form.Label>
                        <TimePicker
                            className="form-control"
                            disableClock={true}
                            clockIcon={null}
                            locale="sv-sv"
                            name="time_till"
                            onChange={(e) => onChangeTime("time_till", e)}
                        />

                        <Button className="mt-5 mr-1" variant="primary" type="submit" onClick={(e) => onSubmit(e)}>
                            Create Item
                        </Button>

                    </Col>
                </Row>
            </Form>
            </Col>
            <Col md={4} id="marginLeft">
            <div className="mt-5" style={{ height: '79%', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                onClick={(e) => getLatLng(e)}
                >
                    {/* <Marker
                        lat={23}
                        lng={45}
                        /> */}
                </GoogleMapReact>
            </div>
            </Col>
            </Row>
        </>
    )
}