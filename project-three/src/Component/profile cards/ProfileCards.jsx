import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import "react-flippy/dist/styles.css";
import "../../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function profileCards() {
  return (
    <>
      <Row className="sectionTitles justify-content-center">
        <h3>Developed By</h3>
      </Row>
      <div className="profileCards">
        <Row>
          <Col md={3}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={undefined} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "unset",
                }}
              >
                <div className="text-center">
                  <h4>Abdulaziz Althagafi</h4>
                  <p>Full-Stack Developer</p>
                  <p>
                    <span>></span>
                  </p>
                </div>
              </FrontSide>
              <BackSide style={{ backgroundColor: "unset" }}>
                <div className="backside">
                  <a
                    className="linked-in"
                    href="https://www.linkedin.com/in/abdulaziz-al-thagafi"
                  >
                    <FontAwesomeIcon size="2x" icon={faLinkedin} />
                  </a>
                  <a
                    className="github"
                    href="https://git.generalassemb.ly/labdul2ziz"
                  >
                    <FontAwesomeIcon size="2x" icon={faGithub} />
                  </a>
                </div>
              </BackSide>
            </Flippy>
          </Col>
          <Col md={3}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="vertical" // horizontal or vertical
              ref={undefined} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "unset",
                }}
              >
                <div className="text-center">
                  <h4>Abdulhameed Alghamdi</h4>
                  <p>Full-Stack Developer</p>
                  <p>
                    <span>></span>
                  </p>
                </div>
              </FrontSide>
              <BackSide style={{ backgroundColor: "unset" }}>
                <div className="backside">
                  <a
                    className="linked-in"
                    href="https://www.linkedin.com/in/abdulhameed-alghamdi/"
                  >
                    <FontAwesomeIcon size="2x" icon={faLinkedin} />
                  </a>
                  <a
                    className="github"
                    href="https://git.generalassemb.ly/i7medo"
                  >
                    <FontAwesomeIcon size="2x" icon={faGithub} />
                  </a>
                </div>
              </BackSide>
            </Flippy>
          </Col>
          <Col md={3}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="vertical" // horizontal or vertical
              ref={undefined} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "unset",
                }}
              >
                <div className="text-center">
                  <h4>Mohammed Alhaddad</h4>
                  <p>Full-Stack Developer</p>
                  <p>
                    <span>></span>
                  </p>
                </div>
              </FrontSide>
              <BackSide style={{ backgroundColor: "unset" }}>
                <div className="backside">
                  <a
                    className="linked-in"
                    href="https://www.linkedin.com/in/mohammed-alhaddad/"
                  >
                    <FontAwesomeIcon size="2x" icon={faLinkedin} />
                  </a>
                  <a
                    className="github"
                    href="https://git.generalassemb.ly/alhaddad"
                  >
                    <FontAwesomeIcon size="2x" icon={faGithub} />
                  </a>
                </div>
              </BackSide>
            </Flippy>
          </Col>
          <Col md={3}>
            <Flippy
              flipOnHover={true} // default false
              flipOnClick={false} // default false
              flipDirection="horizontal" // horizontal or vertical
              ref={undefined} // to use toggle method like this.flippy.toggle()
              // if you pass isFlipped prop component will be controlled component.
              // and other props, which will go to div
              style={{ width: "200px", height: "200px" }} /// these are optional style, it is not necessary
            >
              <FrontSide
                style={{
                  backgroundColor: "unset",
                }}
              >
                <div className="text-center">
                  <h4>Najlaa Alahamri</h4>
                  <p>Full-Stack Developer</p>
                  <p>
                    <span>></span>
                  </p>
                </div>
              </FrontSide>
              <BackSide style={{ backgroundColor: "unset" }}>
                <div className="backside">
                  <a
                    className="linked-in"
                    href="https://www.linkedin.com/in/najlaaalahmari/"
                  >
                    <FontAwesomeIcon size="2x" icon={faLinkedin} />
                  </a>
                  <a
                    className="github"
                    href="https://git.generalassemb.ly/n2jlaa"
                  >
                    <FontAwesomeIcon size="2x" icon={faGithub} />
                  </a>
                </div>
              </BackSide>
            </Flippy>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default profileCards;
