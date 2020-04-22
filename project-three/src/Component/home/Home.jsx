import React , {useState , useEffect} from 'react'
import { Container, Row, Col, Card,Button} from "react-bootstrap";
import axios from "axios";
import '../../index.css'
import { withRouter, NavLink , Link} from "react-router-dom";


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
        // this.axiosCancelSource = axios.CancelToken.source();
    
    
        // return () => {
        //     // console.log("unmount component");
        //     // //cancel all axios subsciptions
        //     // this.axiosCancelSource.cancel("Component unmounted.");
        // }
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
        console.log(err.response)}
     )
        }
        console.log(localStorage.token)
    //      axios.delete(`http://localhost:4000/home/${id}/delete`)
    //  .then(msg => console.log("deleted"))
    //  .catch(err => console.log("somthing went wrong"))
     }


    return (
      <div>
          {message ? <div>{message}</div>:null}
        <Row className="mt-0">
            <Col className="mt-0"> 
                {/* <Image
                className="d-block w-100"
                src="https://envato-shoebox-0.imgix.net/2103/0ab1-92e8-4b34-a111-2edc23491222/food7_b267.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=800&s=fa73555be8fe405d7e67f33bcfdbc3ef"
                fluid
                />
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                <Card className="text-black" id="borderstyle" fluid >
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
            <>                         
                <Col md={4} className="mt-5">


                <Card className="text-center" bg={"dark"} text={'light'} style={{ width: '18rem' }} >
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
                
                
                </>)}
            </Row>
        </Container>
      </div>
    );
}

export default Items
