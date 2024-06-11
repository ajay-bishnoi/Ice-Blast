import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DryIce1 from "../assets/img/png/Dry-ice-1.webp";
import DryIce2 from "../assets/img/png/Dry-ice-2.webp";
import Cloudlayer2 from "../assets/img/png/cloud-Layer-2.webp";
const Understanding = () => {
  return (
    <div className="bg-orange -mt-1 position-relative z-3">
      <Container>
        <h2 className="fw-bold ff-titling text-center fs-48 lh-57 clr-white  mb-20 pt-lg-0 pt-3">
          Understanding Dry Ice Blasting
        </h2>
        <Row className="py-117 flex-column-reverse flex-lg-row align-items-center">
          <Col lg={6} className="mt-sm-5 mt-4 mt-lg-0">
            <div className="text-center text-lg-start max-558">
              <h4 className="mb-06 ff-acumin fw-bold fs-24 lh-36 clr-white">
                What is Dry Ice Blasting?
              </h4>
              <p className="mb-0 fw-normal fs-18 lh-28 clr-white opacity_09 ff-acumin">
                Dry ice blasting is an innovative cleaning technology that uses
                solid CO2 (carbon dioxide) pellets. These pellets are propelled
                at high speeds to clean surfaces. Unlike traditional cleaning
                methods, this process does not involve water or abrasive
                materials, making it incredibly safe and effective for delicate
                areas like engine bays, undercarriages, and even car interiors.
              </p>
            </div>
          </Col>
          <Col lg={6} className=" d-flex justify-content-end">
            <img src={DryIce1} alt="Ice-dry-image" className="DryIce1" />
          </Col>
        </Row>
        <Row className="py-153 align-items-center">
          <Col lg={6} className=" d-flex justify-content-start ">
            <img src={DryIce2} alt="Ice-dry-image" className="DryIce2" />
          </Col>
          <Col lg={6} className=" d-flex justify-content-xxl-end">
            <div className="text-center text-lg-start mt-sm-5 mt-4 mt-lg-0 max-558">
              <h4 className="mb-06 ff-acumin fw-bold fs-24 lh-36 clr-white">
                How Does Dry Ice Blasting Work?
              </h4>
              <p className="mb-0 fw-normal fs-18 lh-28 clr-white opacity_09 ff-acumin">
                The process begins with the dry ice pellets being accelerated in
                a jet of compressed air, similar to sandblasting but with a
                crucial difference. Upon contact with the surface, the dry ice
                pellets undergo sublimation - they turn directly from solid to
                gas without becoming liquid. This reaction creates a
                micro-explosion on the surface, lifting dirt and contaminants
                away.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={Cloudlayer2} alt="Cloud-layer" className="Cloudlayer2 w-100" />
    </div>
  );
};

export default Understanding;
