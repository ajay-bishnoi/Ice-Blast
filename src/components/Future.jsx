import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import WashingCar from "../assets/img/png/car-cleaning.webp";
import { CheckIcon, PlayIcon } from "../assets/Svgicon";
import ComonBtn from "../common/ComonBtn";
import CloudLayer from "../assets/img/png/cloud-Layer.webp";

const Future = () => {
  return (
    <>
      <div className="pt-82 Futur-bg-cloud position-relative z-3">
        <Container>
          <Row className=" align-items-center">
            <Col lg={6}>
              <div>
                <h2 className="fw-bold ff-titling fs-48 lh-57 clr-d-blue mb-13 text-center text-lg-start">
                  The Future of{" "}
                  <span className=" d-lg-block"> Car Cleaning</span>
                </h2>
                <p className=" fw-normal fs-16 lh-24 clr-d-blue ff-acumin opacity_07 mb-sm-4 mb-3 text-center text-lg-start">
                  No need to be overwhelmed by the thought of harsh chemicals
                  and abrasive cleaning methods. Our dry ice blasting leaves
                  your car spotless, reaching where no cloth can.
                </p>
                <div className=" d-flex flex-column mx-auto gap-xl-3 gap-2 max-lg-500 text-center text-lg-start">
                  <div className=" d-flex justify-content-center justify-content-lg-start gap-3">
                    <span className="d-none d-lg-block">
                      <CheckIcon />
                    </span>
                    <div>
                      <h5 className=" fw-bold fs-16 lh-24 ff-acumin mb-06 clr-d-blue ">
                        <span className=" d-lg-none">
                          <CheckIcon />
                        </span>{" "}
                        Gentle Yet Powerful
                      </h5>
                      <p className="mb-0 fw-normal fs-16 lh-24 clr-d-blue opacity_07">
                        Our dry ice method lifts dirt effortlessly without the
                        need for harsh chemicals or abrasive techniques.
                      </p>
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center justify-content-lg-start gap-3">
                    <span className="d-none d-lg-block">
                      <CheckIcon />
                    </span>
                    <div>
                      <h5 className=" fw-bold fs-16 lh-24 ff-acumin mb-06 clr-d-blue">
                        <span className=" d-lg-none">
                          <CheckIcon />
                        </span>{" "}
                        Precision Cleaning
                      </h5>
                      <p className="mb-0 fw-normal fs-16 lh-24 clr-d-blue opacity_07">
                        See how accurately we target the grunge zones, ensuring
                        every inch of your car's undercarriage and engine is
                        meticulously cleaned.
                      </p>
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center justify-content-lg-start gap-3">
                    <span className="d-none d-lg-block">
                      <CheckIcon />
                    </span>
                    <div>
                      <h5 className=" fw-bold fs-16 lh-24 ff-acumin mb-06 clr-d-blue">
                        <span className=" d-lg-none">
                          <CheckIcon />
                        </span>{" "}
                        Safe for AlI Vehicles
                      </h5>
                      <p className="mb-0 fw-normal fs-16 lh-24 clr-d-blue opacity_07">
                        Perfect for all car types, from family hatchbacks to
                        classic cars and high-performance vehicles.
                      </p>
                    </div>
                  </div>
                  <div className=" d-flex justify-content-center justify-content-lg-start gap-3">
                    <span className="d-none d-lg-block">
                      <CheckIcon />
                    </span>
                    <div>
                      <h5 className=" fw-bold fs-16 lh-24 ff-acumin mb-06 clr-d-blue">
                        <span className=" d-lg-none">
                          <CheckIcon />
                        </span>{" "}
                        Eco-Friendly Approach
                      </h5>
                      <p className="mb-0 fw-normal fs-16 lh-24 clr-d-blue opacity_07">
                        Notice the absence of water or chemical runoff,
                        showcasing our commitment to an environmentally
                        responsible cleaning process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
              lg={6}
              className=" d-flex justify-content-center justify-content-lg-end mt-lg-0 mt-5 "
            >
              <div className=" position-relative">
                <img
                  src={WashingCar}
                  className="washing-car w-100"
                  alt="Washing-Car"
                />
                <PlayIcon />
              </div>
            </Col>
          </Row>
          <div className="text-center mt-80">
            <h3 className=" fw-bold ff-acumin clr-d-blue fs-16 lh-24 mb-20">
              Like What You See? Get an Instant Quote
            </h3>
            <ComonBtn name="Get Instant Quote" />
          </div>
        </Container>
      </div>
      <div className="cloud-layer mx-auto bg-orange -mt-1">
        <img src={CloudLayer} alt="cloud-Layer" className="w-100 h-100" />
      </div>
    </>
  );
};

export default Future;
