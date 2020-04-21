import React from 'react'
import  {Row, Col,Button} from "react-bootstrap";

export default function About() {
    return (
       
            <div>
                <h1>About </h1>

                <p> this applacation is here to help you ppl and make food non wasted
                     <br/> this applacation is here to help you ppl and make food non wasted
                     <br/> this applacation is here to help you ppl and make food non wasted
                     <br/> this applacation is here to help you ppl and make food non wasted
                     </p>
              
                {/* <p>for any more information leave a massage</p> */}

                <h2>contact us</h2>
              <form className="mt-"/>
                <col class="col-md-6"/>
                  <div class="form-group"/>
                    <label for="name">Name*</label>
                    <input type="text" class="form-control"
                     name="contact[name]" id="name"/>
                  
                  <div class="form-group"/>
                    <label for="inputEmail4">Email*</label>
                    <input type="email" class="form-control" 
                    name="contact[email]" id="email"/>
                
                  <div class="form-group"/>
                    <label for="telephone">Phone number*</label>
                    <input type="text" class="form-control" 
                    name="contact[telephone]" id="telephone"/>
                 
            
                <div class="col-md-6"/>
                  <div class="form-group">
                    <label for="message">Message*</label>
                     <textarea rows="4" class="form-control message-ta"
                      name="contact[message]" id="message">

                     </textarea>
                  </div>

                  <button type="submit" id="contact-submit" class="form-button" 
                  value="Submit">SEND</button>
            
                </div>
             
          
          
    )
}
