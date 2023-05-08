/*import { styled } from "@material-ui/styles";*/
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplayCode } from "@fortawesome/free-brands-svg-icons";

function Body() {
  return (
    <div>
      <Container>
        <Row className="home">
          <Col className="home-text ">
            <h1 className="heading">Better Design, Better Business</h1>
            <h3 className="home_para">
              Transform Your Business with Custom Design.
            </h3>
            <button type="button" class="btn btn-dark btn-lg download-button">
              {" "}
              Join Us
            </button>
            <button
              type="button"
              class="btn btn-outline-light btn-lg download-button"
            >
              {" "}
              Subscribe
            </button>
          </Col>
          <Col className="home ">
            <img
              className=" row home-pg-img"
              alt="front-img"
              src="https://www.linkpicture.com/q/Web-1-final-2.png"
            />
          </Col>
        </Row>
      </Container>

      <section className="feature white-section" id="about-us">
        <div className="container-fluid">
          <div className="row">
            <h1 className="why-us-h1">Why choose us</h1>
            <div className="feature-box one col-lg-4 ">
              <img
                className="icon"
                src="https://www.linkpicture.com/q/img-3-2-final.png"
                alt="icon"
              />
              <h4 className="feature-title">Digital Transformation</h4>
              <p>Using tech to transform business operations & experiences</p>
            </div>
            <div className="feature-box two col-lg-4">
              <img
                className="icon"
                src="https://www.linkpicture.com/q/img-final.png"
                alt="icon"
              />
              <h4 className="feature-title">Technology led Innovation</h4>
              <p>Innovation driven by technological advancements</p>
            </div>
            <div className="feature-box three col-lg-4 ">
              <img
                className="icon"
                src="https://www.linkpicture.com/q/img-2-new.png"
                alt="icon"
              />
              <h4 className="feature-title">
                Custom Solutions Design and Development
              </h4>
              <p>Tailored software solutions for unique requirements</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service">
        <div>
          <h2 className="service-h2 ">We are provided best Business Service</h2>
          <p className="service-para">
            Best business services exceed expectations, are reliable,
            responsive, and provide value for money
          </p>
          <Container fluid>
            <Row>
              <Col className=" row video ">
                <ReactPlayer
                  url={"https://youtu.be/aBMg4pRrwh8"}
                  controls={true}
                />
              </Col>
              <Col className=" row service-text ">
                <Row>
                  <h3 className="service-h3">Most Trusted in our field</h3>
                </Row>
                <Row>
                  <p className="service-para">
                    Being the most trusted in a field requires a strong
                    reputation built on consistently delivering quality products
                    or services, maintaining ethical standards, and establishing
                    long-term relationships with customers.
                  </p>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <Container fluid className="press">
          <Row>
            <Col sm>
              <img
                className="  press-icon "
                src="https://www.linkpicture.com/q/apple_14.png"
                alt="apple"
              />
            </Col>

            <Col sm>
              <img
                className="press-icon "
                src="https://www.linkpicture.com/q/play-store_1.png"
                alt="play-store"
              />
            </Col>

            <Col sm>
              <img
                className="  press-icon"
                src=" https://www.linkpicture.com/q/office.png"
                alt="office"
              />
            </Col>

            <Col sm>
              <img
                className="press-icon"
                src="https://www.linkpicture.com/q/skype_5.png"
                alt="skype"
              />
            </Col>

            <Col sm>
              <img
                className=" press-icon "
                src="https://www.linkpicture.com/q/google-removebg-preview.png"
                alt="google"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-us" id="contact">
        <div>
          <h1 className="contact-h2">Get in Touch</h1>
          <p>
            Connect, communicate, invite, friendly, email, phone, social media,
            in-person, collaborate
          </p>
          <Container fluid>
            <Row>
              <Col className="conatct-box">
                <div className="card">
                  <h5 className="card-header">Call</h5>
                  <div className="card-body">
                    <img
                      className="icon contact-icon"
                      src="https://www.linkpicture.com/q/call-2.png"
                      alt="call"
                    />
                    <p>+91-8888XXXXXX</p>
                    <p>+91-9999XXXXXX</p>
                  </div>
                </div>
              </Col>
              <Col className="conatct-box">
                <div className="card">
                  <h5 className="card-header">Location</h5>
                  <div className="card-body">
                    <img
                      className="icon contact-icon"
                      src="https://www.linkpicture.com/q/location_13.png"
                      alt="location"
                    />
                    <p>
                      No. X, XXX Floor, Opposite to and Near By Koramangala
                      PXXXXX Station and Above XX, XX Feet Road,
                      Koramangala-XXXXXX.
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="conatct-box">
                <div className="card">
                  <h5 className="card-header">Mail</h5>
                  <div className="card-body">
                    <img
                      className="icon contact-icon"
                      src="https://www.linkpicture.com/q/mail-2_4.png"
                      alt="mail"
                    />

                    <p>example@gmail.com</p>
                    <p>example@yahoo.com</p>
                    <p>example@company.com</p>
                    <p>XXXXXX@example.com</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className="subscribe" id="Join-Us">
        <div>
          <Container fluid>
            <Row>
              <Col className="subscribe-col">
                <h4>Subscribe for Latest Update</h4>
              </Col>
              <Col>
                <button
                  type="button"
                  className="btn btn-dark btn-lg download-button"
                >
                  {" "}
                  Join Us
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg download-button"
                >
                  {" "}
                  Subscribe
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

export default Body;
