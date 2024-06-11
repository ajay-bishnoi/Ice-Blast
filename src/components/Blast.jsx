import React from "react";
import { Container } from "react-bootstrap";
import ComonBtn from "../common/ComonBtn";
import BlastCloud1 from "../assets/img/png/blast-cloud-1.webp";
import BlastCloud2 from "../assets/img/png/blast-cloud-2.webp";

const Blast = () => {
  return (
    <div>
      <img src={BlastCloud1} alt="cloud-layer" className=" w-100 BlastCloud1" />
      <Container>
        <div className="max-966 text-center  mx-auto">
          <h2 className="fw-bold text-center fs-48 lh-57 ff-titling clr-d-blue mb-sm-3 mb-2">
            Blast The Grime and Bring Back The Prime
          </h2>
          <p className="ff-acumin fw-normal fs-16 lh-24 text-center clr-d-blue opacity_09 mb-3">
            Rest easy knowing that our approach is tailored to protect and
            enhance your vehicle. We don’t clean; we care. Every treatment is a
            promise that your vehicle will not only look its best but also
            receive the care it needs for a longer, healthier life on the road.
          </p>
          <h5 className="mb-40 ff-acumin fw-bold fs-16 lh-19 clr-d-blue">
            Ready For a Transformation? Get an Instant Quote
          </h5>
          <ComonBtn name="Get Instant Quote" />
        </div>
      </Container>
      <img src={BlastCloud2} alt="cloud-layer" className=" w-100 BlastCloud2" />
    </div>
  );
};

export default Blast;
