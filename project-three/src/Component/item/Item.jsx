import React, { useState , useEffect} from 'react';
import Axios from "axios";
import { Container, Row, Col, Image , Button } from "react-bootstrap";
import GoogleMapReact from 'google-map-react'
import markerPath from '../../hiclipart.com.png'
import { Comment, Form, Header } from 'semantic-ui-react'
import Moment from 'react-moment';
import { decode } from "jsonwebtoken";



// import {storage} from "./firebase/firebase"


export default function Item (props) {
    const [item , setItem] = useState(null)
    const [comments , setComments] = useState([])
    const [addCom, setAddCom] = useState({})
    let [latV, setLatV] = useState(0)
    let [lngV, setLngV] = useState(0)

     
    let getOnItem = () => {
        Axios.get(`/api/home/${props.match.params.id}`, {
            headers: {
                "token": localStorage.getItem("token"),
            },
        }
        )
        .then(res =>{
            setItem (res.data.item)
            setLatV(parseFloat(res.data.item.lat))
            setLngV(parseFloat(res.data.item.lng))
            setComments(res.data.item.comments)
        })
        .catch(err => console.log(err))
    }

    let onChangeCom = ({ target: { name, value } }) => {
        setAddCom({ ...addCom, [name]: value })
    }

    let postComment = (e) => {
        e.preventDefault()
        Axios.post(`/api/home/${props.match.params.id}`, addCom)
        .then(res =>{
            props.history.push(`/items/${props.match.params.id}`)
        })
        .catch(err => console.log(err))
    }


    useEffect(() => {
        getOnItem()
    })

    const Marker = () => <Image width={20} height={20} src={markerPath} />

    latV = parseFloat(latV)
    lngV = parseFloat(lngV)

    const defaultProps = {
        center: {
        lat: parseFloat(latV),
        lng: parseFloat(lngV)
        },
        zoom: 11
    }
    // console.log(decode(localStorage.token))
    let allComments = comments.map(comment => 
        ( 
        <Comment>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>{comment.user.name}</Comment.Author>
            <Comment.Metadata>
              <div><Moment interval={30000} fromNow>{comment.createdAt}</Moment></div>
            </Comment.Metadata>
            <Comment.Text>{comment.comment}</Comment.Text>
          </Comment.Content>
        </Comment>
    ))
     
   
    return (
        <div id="itemspage">
            <Container>
                { item && 
                <>
              <Row className="mb-5">
                 <Col xs={6} md={4}>
                  <Image className="mb-3" width={200} height={200} src={item.image} rounded />
                  <h4>{item.name}</h4>
                  <h4>{item.address}</h4>
                  <h4>{item.expiration_date}</h4>
                  <h4>Time to Pick : {item.time_from} - {item.time_till}</h4>
                  {item.isAvailable?
                  item.user == decode(localStorage.token).user._id?
                  "you can not pick you item !!":
                  <Button variant="primary" type="submit"> Pick it </Button> 
                  :
                  "not available for you"}
                 </Col>
                 <Col xs={6} md={8}>
                 <div style={{ height: '79%', width: '100%' }}>
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8' }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    >
                        <Marker
                            lat={latV}
                            lng={lngV}
                        />
                    </GoogleMapReact>
                </div>
                </Col>
               </Row>
               <Row>
                <Header className="mt-5" as='h3' dividing>
                    Comments
                </Header>
               </Row>
                <Row className="my-5 justify-content-center">
                    <Col md={8}>
                        <Comment.Group>
                            {allComments}
                            <Form reply>
                                <Form.TextArea name="comment" onChange={(e) => onChangeCom(e)} />
                                <Button labelPosition='left' icon='edit' primary onClick={(e) => postComment(e)} >Add Comment</Button>
                            </Form>
                        </Comment.Group>
                    </Col>
                </Row>
                </>
            }
            </Container>
        </div>
    )
    }
