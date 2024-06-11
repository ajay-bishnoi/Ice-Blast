import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MenPic from "../assets/img/png/men.webp";
import TeamCloud from "../assets/img/png/blast-cloud-2.webp";
import GoldCloud from "../assets/img/png/gold-cloud.webp";

const Team = () => {
  return (
    <div className="-mt-110 position-relative z-3">
      <Container>
        <Row className=" align-items-center justify-content-between py-87-85">
          <Col
            lg={6}
            xl={5}
            className=" position-relative d-flex justify-content-center justify-content-lg-start"
          >
            <div className="menborder">
              <img
                data-aos="flip-right"
                src={MenPic}
                alt="men-pic"
                className=" w-100 h-100"
              />
            </div>
            <img src={GoldCloud} alt="gold-cloud" className="gold-cloud" />
          </Col>
          <Col
            lg={6}
            xl={7}
            className=" d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-5"
          >
            <div className="max-613 w-100 text-center text-lg-start">
              <h4
                data-aos="flip-up"
                className="mb-10 ff-titling fw-bold fs-48 lh-57 clr-d-blue"
              >
                Meet The Team
              </h4>
              <h5
                data-aos="flip-up"
                className=" ff-acumin fw-bold fs-18 lh-21 clr-d-blue mb-3"
              >
                Oxfordshire's Dry Ice Car Cleaning Specialists
              </h5>
              <p
                data-aos="flip-up"
                className="mb-0 fw-normal fs-16 lh-24 clr-d-blue opacity_07 ff-acumin"
              >
                We’re shaking up the car cleaning scene with Dry Ice Blasting.
                From our buzzing unit in Oxfordshire, we're not just a team -
                we’re a Crew of car enthusiasts, expert restorers, and skilled
                mechanics united by our love for cars. We treat every car like
                it’s our own, driven by a philosophy that doing the right thing
                for your ride is the only way to go. When you hand over your
                keys to us, you're entrusting your pride and joy to fellow car
                lovers who understand that every car deserves precision care and
                a touch of cool.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        src={TeamCloud}
        alt="cloud-layer"
        className=" w-100 position-relative cloud5 -mt-63"
      />
    </div>
  );
};

export default Team;
