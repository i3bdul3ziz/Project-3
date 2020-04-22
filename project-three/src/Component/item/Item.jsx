import React, { useState , useEffect} from 'react';
import Axios from "axios";
import { Container, Row, Col, Image , Button } from "react-bootstrap";
import GoogleMapReact from 'google-map-react'
import markerPath from '../../hiclipart.com.png'

export default function Item (props) {
    const [item , setItem] = useState(null)
    let [latV, setLatV] = useState(0)
    let [lngV, setLngV] = useState(0)
     
      let getOnItem = () => {
           Axios.get(`http://localhost:4000/home/${props.match.params.id}`)
    .then(res =>{
        setItem (res.data.item)
        setLatV(parseInt(res.data.item.lat))
        setLngV(parseInt(res.data.item.lng))
    })
    .catch(err => console.log(err))
    }

    useEffect(() => {
        getOnItem()   
    })

    const Marker = () => <Image width={20} height={20} src={markerPath} />

    latV = parseInt(latV)
    lngV = parseInt(lngV)

    const defaultProps = {
        center: {
        lat: parseInt(latV),
        lng: parseInt(lngV)
        },
        zoom: 11
    }
     
   
    return (
        <div>
            <Container>
                { item && 
              <Row>
                 <Col xs={6} md={4}>
                  <Image className="mb-3" width={200} height={200} src={item.image} rounded />
                  <h4>{item.name}</h4>
                  <h4>{item.address}</h4>
                  <h4>{item.expiration_date}</h4>
                  <h4>Time to Pick : {item.time_from} - {item.time_till}</h4>
                  <Button variant="primary" type="submit"> Pick it </Button>
                 </Col>
                 <Col xs={6} md={8}>
                 <div className="" style={{ height: '79%', width: '100%' }}>
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
                }
            </Container>
        </div>
    )
    }
