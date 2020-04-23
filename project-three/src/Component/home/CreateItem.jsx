import React, { useState, useEffect } from 'react'
import { Row, Form, Col, Button, Alert, Image, FormFile } from 'react-bootstrap'
import '../../index.css'
import Axios from 'axios'
import TimePicker from 'react-time-picker'
import GoogleMapReact from 'google-map-react'
import markerPath from '../../hiclipart.com.png'
import {storage} from "../../firebase/firebase"

export const CreateItem = (props) => {
    const [item, setItem] = useState({})// item info

    // const [register , setRegister] = useState(false) // to show aleart
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState({imgUrl: ''})



    //to add the input inside item
    let onChangeInput = ({ target: { name, value } }) => {
        setItem({ ...item, [name]: value })
    }

    let onChangeTime = ( name, value ) => {
        setItem({ ...item, [name]: value })
    }
    // to add the item info to database
    let onSubmit = (e) => {
        e.preventDefault()
        Axios.post('/api/home/create', item , {headers: {
            "token": localStorage.getItem("token"),
          },
        } )
            .then(res => {
                props.history.push('/items')
            })
            .catch(err => console.log(err.response))
    }
 

    const defaultProps = {
        center: {
        lat: 23.8859,
        lng: 45.0792
        },
        zoom: 6
    }

    function getLatLng({lat, lng}){
        setItem({ ...item, "lat": lat, "lng": lng})
    }
    console.log(imageAsFile)
 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
    //   e.preventDefault()
    console.log('start of upload')
    // async magic goes here...
    if(imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }
    const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(image)
    //initiates the firebase side uploading 
    uploadTask.on('state_changed', 
    (snapShot) => {
      //takes a snap shot of the process as it is happening
      console.log(snapShot)
    }, (err) => {
      //catches the errors
      console.log(err)
    }, () => {
      // gets the functions from storage refences the image storage in firebase by the children
      // gets the download url then sets the image from firebase as the value for the imgUrl key:
      storage.ref('images').child(imageAsFile.name).getDownloadURL()
       .then(fireBaseUrl => {
         setImageAsUrl({image: fireBaseUrl})
         console.log(fireBaseUrl)
         setItem({ ...item, image: fireBaseUrl })
       })
    })
  }
    
        //==================================================
    return (
        <>
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
                                <Form.File 
                                 id="custom-file"
                                  label="Custom file input"
                                  custom type="file"
                                  onChange={(e) => handleImageAsFile(e)}
                                    /> 
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
                </GoogleMapReact>
            </div>
            </Col>
            </Row>
        </>
    )
}