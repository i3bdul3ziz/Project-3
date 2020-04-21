import React, { Component}  from "react";
import { Form, Container, Button } from "react-bootstrap";
import axios from "axios";


export default class Profile extends Component {
    state={ user : null }

  getUser = async(e) => {
    try {
        let data = await axios.get(
          `http://localhost:4000/profile/${this.props.match.params.id}`
        );
        this.setState({
            user: data.data.user
        })
      } catch (err) {
        console.log(err.response);
      }
  }
  changeHandler = (e) => {
    // console.log("name of field", e.target["name"]);
    // console.log("value of field", e.target.value);
    let temp = { ...this.state }; //copy state object
    // temp["_id"] = this.props.user._id
    temp[e.target.name] = e.target.value;
    
    this.setState(temp);
    // console.log(this.props.user)
    console.log(temp)
  };
  updateHandler = async () => {
    console.log(this.state);
    try {
      let data = await axios.put(
        `http://localhost:4000/profile/${this.props.match.params.id}`,
        this.state
      );
      console.log(data);
    } catch (err) {
      console.log(err.response);
    }
  };
  componentDidMount(){
      this.getUser()
  }
  render() {
      console.log(this.state);
    return (
      <div>
        <Container>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={this.changeHandler} name="name" value = {this.state.user ? this.state.user.name : ""}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>prfile picture</Form.Label>
            <Form.Control onChange={this.changeHandler} name="image" />
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={this.updateHandler} block>
            Submit
          </Button>
        </Container>
      </div>
    );
  }
}
