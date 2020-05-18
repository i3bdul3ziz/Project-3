import React , {useState , useEffect} from 'react'
import { Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import '../../index.css'
import Header from '../header/Header.jsx'
import { NavLink } from "react-router-dom";
import ProfileCard from '../profile cards/ProfileCards.jsx'


const Items = (props) => {

    const [items , setItems] = useState([])
    const [message , setMessage] = useState(null)
    function getItems (){
        axios
        .get(`/api/home`)
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
            axios.delete(`/api/home/${id}/delete`, {
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

    let latestItems =
    <Row className="mt-5">{items.slice(0, 2).map(item => 
        <Col md={4} className="my-5" key={item._id}>
            <div class="item_card transition">
                <h2 class="transition">{item.name}<br></br><small>{item.expiration_date}</small></h2>
                <div class="cta-container transition"><a href={`/items/${item._id}`} class="cta">Details</a></div>
                <div class="card_circle transition" style={{backgroundImage: `url(${item.image})`}}></div>
            </div>
        </Col>
    )}</Row>

    return (
      <div>
          {message ? <div>{message}</div>:null}
        <Header isLogin={props.isLogin}/>
        <Container className="mt-5" fluid>
            <Row className="sectionTitles justify-content-center">
                <h3>
                    Latest Items
                </h3>
            </Row>
            {latestItems}
            <Row>
            <NavLink
                    to={'/items'}
                    className="moreButton">
                        See More...
            </NavLink>
            </Row>
            <ProfileCard/>

        </Container>
      </div>
    );
}

export default Items
