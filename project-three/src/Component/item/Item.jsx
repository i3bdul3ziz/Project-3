import React, { useState , useEffect} from 'react';
import Axios from "axios";
import { Container, Row, Col, Image , Button } from "react-bootstrap";

export default function Item (props) {
    const [item , setItem] = useState(null)
     
      let getOnItem = () => {
           Axios.get(`http://localhost:4000/home/${props.match.params.id}`)
    .then(res =>{
        setItem (res.data.item)
    })
    .catch(err => console.log(err))
    }

    useEffect(() => {
        getOnItem()   
    })
     
   
    return (
        <div>
            <Container>
                { item && 
              <Row>
                 <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" rounded />
                  <h4>{item.name}</h4>
                  <h4>{item.expiration_date}</h4>
                  <h4>{item.location}</h4>

                  <Button variant="primary" type="submit"> Pick it </Button>
                 </Col>
               </Row>
                }
            </Container>
        </div>
    )
    }
