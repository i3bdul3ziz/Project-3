import React from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin , faGithub }  from '@fortawesome/free-brands-svg-icons'

export default function About() {
    return (
       
            <div id="aboutpage">

                <h2 id="contact">CONTACT VENUS TEAM</h2>

                <Container className="mt-5" fluid> 
              <Row className="mt-5 justify-content-center">

              <Col md={4} className="mt-5"> 
                 <Card className="text-center" bg={"dark"} text={'light'} style={{ width: '18rem' }} >
               <Card.Header>Abdulhameed Alghamdi</Card.Header>
               <Card.Body> <Card.Title> Full-Stack Developer </Card.Title>
               <Card.Text>
               <a href = "https://www.linkedin.com/in/abdulhameed-alghamdi/" ><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
                <a href = "https://git.generalassemb.ly/i7medo" ><FontAwesomeIcon size="2x" icon={faGithub} /></a>   
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                 <Col md={4} className="mt-5"> 
                 <Card className="text-center" bg={"dark"} text={'light'} style={{ width: '18rem' }} >
               <Card.Header>Abdulaziz Althagafi</Card.Header>
               <Card.Body> <Card.Title> Full-Stack Developer </Card.Title>
               <Card.Text>
               <a href = "https://git.generalassemb.ly/labdul2ziz" ><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
                  <a href = "https://git.generalassemb.ly/labdul2ziz" ><FontAwesomeIcon size="2x" icon={faGithub} /></a>    
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                 <Col md={4} className="mt-5"> 
                 <Card className="text-center" bg={"dark"} text={'light'} style={{ width: '18rem' }} >
               <Card.Header>Mohammed Alhaddad</Card.Header>
               <Card.Body> <Card.Title> Full-Stack Developer </Card.Title>
               <Card.Text>
               <a href = "https://www.linkedin.com/in/mohammed-alhaddad/" ><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
                <a href = "https://git.generalassemb.ly/alhaddad" ><FontAwesomeIcon size="2x" icon={faGithub} /></a> 
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                 <Col md={4} className="mt-5"> 
                 <Card className="text-center" bg={"dark"} text={'light'} style={{ width: '18rem' }} >
               <Card.Header>Najlaa Alahamri</Card.Header>
               <Card.Body> <Card.Title> Full-Stack Developer </Card.Title>
               <Card.Text>
                <a href = "https://www.linkedin.com/in/najlaaalahmari/" ><FontAwesomeIcon size="2x" icon={faLinkedin} /></a>
                <a href = "https://git.generalassemb.ly/n2jlaa" ><FontAwesomeIcon size="2x" icon={faGithub} /></a>      
                </Card.Text>
                </Card.Body>
                </Card>
                </Col>

                </Row>
                </Container>

                </div>
             
          
          
    )
}
