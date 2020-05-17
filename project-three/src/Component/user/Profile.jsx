import React, { Component}  from "react";
import { Form, Container, Button, Image } from "react-bootstrap";
import axios from "axios";
import {storage} from "../../firebase/firebase"

export default class Profile extends Component {
    state = { 
      user : null ,
      image : ""
    }


  getUser = async(e) => {
    try {
        let data = await axios.get(
          `https://notwaste.herokuapp.com/api/profile/${this.props.match.params.id}`
        );
        this.setState({
            user: data.data.user,
            image: data.data.user.image
        })
      } catch (err) {
        console.log(err.response);
      }
  }
  changeHandler = (e) => {
    let temp = { ...this.state }; //copy state object
    temp[e.target.name] = e.target.value;
    
    this.setState(temp);
    // console.log(this.props.user)
    console.log(temp)
  };
  updateHandler = async () => {
    console.log(this.state);
    try {
      let data = await axios.put(
        `https://notwaste.herokuapp.com/api/profile/${this.props.match.params.id}`,
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

  handleImageAsFile = (e) => {
    const image = e.target.files[0]
    // setImageAsFile(imageFile => (image))
  //   e.preventDefault()
  console.log('start of upload')
  // async magic goes here...
  let imageAsFile = image
  if(imageAsFile === '') {

    console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
  }
  const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(image)
  //initiates the firebase side uploading 
  uploadTask.on('state_changed', 
  (snapShot) => {
    //takes a snap shot of the process as it is happening
    console.log(snapShot)
  }, (err) => {
    //catches the errors
    console.log(err)
  }, () => {
    // gets the functions from storage refences the image storage in firebase by the children
    // gets the download url then sets the image from firebase as the value for the imgUrl key:
    storage.ref('images').child(imageAsFile.name).getDownloadURL()
     .then(fireBaseUrl => {
      //  setImageAsUrl({image: fireBaseUrl})
       this.setState({ ...this.state, image: fireBaseUrl })
     })
  })
}
  render() {
      console.log(this.state);
    return (
      <div id="prof">
        <Container>
        {this.state.user && <Image roundedCircle src = {this.state.image} />}
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={this.changeHandler} name="name" value = {this.state.user ? this.state.user.name : ""}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>prfile picture</Form.Label>
            <Form.File 
              id="custom-file"
              label="Custom file input"
              custom type="file"
              onChange={(e) => this.handleImageAsFile(e)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.updateHandler} block>
            Update
          </Button>
        </Container>
      </div>
    )
  }
};
