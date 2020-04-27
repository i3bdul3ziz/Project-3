import React , {useState , useEffect} from 'react'
import { Container, Row, Col, Card,Button} from "react-bootstrap";
import axios from "axios";
import '../../index.css'
import { NavLink , Link} from "react-router-dom";


const Items = (props) => {

    const [items , setItems] = useState([])
    const [message , setMessage] = useState(null)
    function getItems (){
        axios
        .get(`http://localhost:4000/home`)
        .then((res) => {
          setItems(res.data.items)
        })
        .catch((err) => console.log(err.response))
    }

    
    useEffect(() => {
    getItems()
    })

    let deleteItem = (id)=> {
        let token = localStorage.token
        if (token){
            axios.delete(`http://localhost:4000/home/${id}/delete`, {
                headers: {token}
            })
            .then(msg => console.log("deleted"))
            .catch(err => {
                setMessage(err.response.data.message)
                setTimeout(() => {
                    setMessage(null)
                },2000);
            })
        }
    }


    return (
      <div>
          {message ? <div>{message}</div>:null}
        <Row className="mt-0">
            <Col className="mt-0"> 
                <Card className="text-black" id="borderstyle"  >
                    <Card.Img id="borderstyle" height={600} src="https://i.pinimg.com/564x/15/c6/89/15c6890a3d14b12073ed407be2de7c13.jpg" alt="Card image" />
                    <Card.ImgOverlay className="fixposition" >
                        <Card.Title className="text-light">!Waste</Card.Title>
                        <Card.Text className="text-light">
                       <p> !WASTE connects neighbours with each other and with local businesses so surplus food can be shared, not thrown away.</p>
                        <p> Here at !WASTE we believe that small actions can lead to big change.</p>
                        </Card.Text>
                        <Card.Text>
                            {!props.isLogin?
                            <NavLink
                            to={'/signin'}
                            className="btn btn-primary">
                            Create Item
                            </NavLink>
                            :
                            <NavLink
                                to={'/items/create'}
                                className="btn btn-primary">
                                Create Item
                            </NavLink>
                            }
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </Col>
        </Row>
        <Container className="mt-5" fluid>
            <Row className="mt-5 justify-content-center">{items.map(item => 
                <Col md={4} className="mt-5" key={item._id}>
                <Card className="text-center" bg={"dark"} text={'light'}  >
                 <Card.Img variant="top" src={item.image} />              
                  <Card.Body> <Card.Title> {item.name} </Card.Title>
               <Card.Text>
               {item.expiration_date} 
                </Card.Text>
                <Button as ={Link} variant="primary" to={`/items/${item._id}`}>More info</Button>
                 <Button onClick={()=> deleteItem(item._id)} variant="primary" >Delete</Button>
                </Card.Body>
                </Card>
                </Col>
                )}
            </Row>
        </Container>
      </div>
    );
}

export default Items
