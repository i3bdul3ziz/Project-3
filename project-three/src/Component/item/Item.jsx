import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import GoogleMapReact from "google-map-react";
import markerPath from "../../hiclipart.com.png";
import { Comment, Form, Header } from "semantic-ui-react";
import Moment from "react-moment";
import { decode } from "jsonwebtoken";
import "../../index.css";

export default function Item(props) {
  const [item, setItem] = useState(null);
  const [comments, setComments] = useState([]);
  const [addCom, setAddCom] = useState({});
  const [latV, setLatV] = useState(parseFloat(23.8859));
  const [lngV, setLngV] = useState(parseFloat(45.0792));
  const [availble, setAvailable] = useState("true");


  let getOnItem = () => {
    Axios.get(`http://localhost:4000/home/${props.match.params.id}`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setItem(res.data.item);
        if (res.data.item.lat != null && res.data.item.lng != null) {
          // console.log("!=")
          setLatV(parseFloat(res.data.item.lat));
          setLngV(parseFloat(res.data.item.lng));
        }
        setComments(res.data.item.comments);
      })
      .catch((err) => console.log(err));
  };

  let changeAvailble = () => {
    Axios.put(`http://localhost:4000/home/${props.match.params.id}/availble`, {
      headers: {
        token: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setAvailable(res.data.item.isAvailable);
      })
      .catch((err) => console.log(err));
  };

  let onChangeCom = ({ target: { name, value } }) => {
    setAddCom({ ...addCom, [name]: value });
  };

  let postComment = (e) => {
    e.preventDefault();
    Axios.post(
      `http://localhost:4000/home/${props.match.params.id}/comment`,
      addCom,
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    )
      .then((res) => {
        props.history.push(`/items/${props.match.params.id}`);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOnItem();
  });

  const Marker = () => <Image width={20} height={20} src={markerPath} />;

  const defaultProps = {
    center: {
      lat: parseFloat(latV),
      lng: parseFloat(lngV),
    },
    zoom: 15,
  };

  
  let allComments = comments.map((comment) => (
    <Comment
      className={
        item.user === decode(localStorage.token).user._id
          ? "comment authComment"
          : "comment replay"
      }
    >
      <Comment.Avatar
        src={
          comment.user.image
            ? comment.user.image
            : "https://react.semantic-ui.com/images/avatar/small/matt.jpg"
        }
      />
      <Comment.Content>
        <Comment.Author as="a">{comment.user.name}</Comment.Author>
        <Comment.Metadata>
          <div>
            <Moment interval={30000} fromNow>
              {comment.createdAt}
            </Moment>
          </div>
        </Comment.Metadata>
        <Comment.Text>{comment.comment}</Comment.Text>
      </Comment.Content>
    </Comment>
  ));

  return (
    <div id="itemspage">
      <Row className="sectionTitles justify-content-center">
        <h3>Item</h3>
      </Row>
      <Container className="signMargin">
        { item && 
        <>
          <Row className="mb-5">
            <Col xs={6} md={4}>
              <Image
                className="mb-3"
                width={200}
                height={200}
                src={item.image}
                rounded
              />
              <div className="itemInfoGrid">
                <h4 className="itemInfo">Name :</h4>
                <h4>{item.name}</h4>
                <h4 className="itemInfo">Address:</h4>
                <h4>{item.address}</h4>
                <h4 className="itemInfo">Expired Date:</h4>
                <h4>{item.expiration_date}</h4>
                <h4 className="itemInfo">Time to Pick :</h4>
                <h4>
                  {" "}
                  {item.time_from} - {item.time_till}
                </h4>
              </div>
              {availble?
                  item.user === decode(localStorage.token).user._id?
                  "you can not pick your item !!":
              <Button className="formButton" type="submit" onClick={(e) => changeAvailble(e)}>
                {" "}
                Pick it{" "}
              </Button>
              :
                  "not available for you"}
            </Col>
            <Col xs={6} md={8}>
              {/* <div style={{ height: "79%", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyCVCIuwNO1D5Qr2qyD3fWycf97sJcTyTx8",
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <Marker lat={parseFloat(latV)} lng={parseFloat(lngV)} />
                </GoogleMapReact>
              </div> */}
            </Col>
          </Row>
          <Row>
            <Header className="mt-5 ml-3" as="h3" dividing>
              Comments
            </Header>
          </Row>
          <Row className="my-5 justify-content-center">
            <Col md={8}>
              <Comment.Group>
                {allComments}
                <Form>
                  <Form.TextArea
                    className="textArea"
                    name="comment"
                    onChange={(e) => onChangeCom(e)}
                  />
                  <Button
                    labelPosition="left"
                    className="formButton"
                    primary
                    onClick={(e) => postComment(e)}
                  >
                    Add Comment
                  </Button>
                </Form>
              </Comment.Group>
            </Col>
          </Row>
        </>
        }
      </Container>
    </div>
  );
}
