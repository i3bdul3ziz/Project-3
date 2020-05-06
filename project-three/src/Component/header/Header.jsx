import React from 'react'
import {Row, Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Slider from './Slider.jsx'

function Header(props) {
    return (
        <div>
            <Row className="mt-0">
            <Col className="mt-0" md={6}> 
                <h1 className="brheader">!WASTE</h1>
                <p className="pheader"> !Waste connects neighbours with each other and with local businesses so surplus food can be shared, not thrown away. Here at !Waste we believe that small actions can lead to big change.</p>
                {!props.isLogin?
                <NavLink
                    to={'/signin'}
                    className="hbutton">
                        Create Item
                </NavLink>
                :
                <NavLink
                    to={'/items/create'}
                    className="hbutton">
                        Create Item
                </NavLink>
                }
            </Col>
            <Col md={6} className="pr-4">
                <Slider/>
            </Col>
        </Row>
        </div>
    )
}

export default Header
