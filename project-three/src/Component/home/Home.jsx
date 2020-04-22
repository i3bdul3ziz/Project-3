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
                    <Card.Img id="borderstyle" height={597} src="https://image.freepik.com/free-photo/food-delivery-concept-lunch-container_82893-14596.jpg" alt="Card image" />
                    <Card.ImgOverlay className="fixposition" >
                        <Card.Title className="text-light">!Waste</Card.Title>
                        <Card.Text className="text-light">
                        This is a wider card with supporting text below as a natural lead-in to<br/>
                        additional content. This content is a little bit longer.
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

                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17194394b57%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3A-apple-system%2CBlinkMacSystemFont%2C%26quot%3BSegoe%20UI%26quot%3B%2CRoboto%2C%26quot%3BHelvetica%20Neue%26quot%3B%2CArial%2C%26quot%3BNoto%20Sans%26quot%3B%2Csans-serif%2C%26quot%3BApple%20Color%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Emoji%26quot%3B%2C%26quot%3BSegoe%20UI%20Symbol%26quot%3B%2C%26quot%3BNoto%20Color%20Emoji%26quot%3B%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17194394b57%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22108.5390625%22%20y%3D%2297.5%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                    <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        exp 06/22
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
