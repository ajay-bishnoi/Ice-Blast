import React from "react";
import { Container, Nav } from "react-bootstrap";
import ComonBtn from "../common/ComonBtn";
import { Tickicon } from "../assets/Svgicon";

const Hero = () => {
  return (
    <div className=" flex-grow-1 d-flex align-items-center">
      <Container>
        <div className="max-730 w-100  text-center mx-auto">
          <h1 className="ff-titling fw-bold fs-96 lh-115 clr-white mb-3">
            Automotive Dry Ice Cleaning
          </h1>
          <p className="ff-acumin mb-40 fw-normal fs-20 lh-30 clr-white">
            Discover the ultimate clean for your machine.{" "}
            <span className=" d-sm-block">
              No chemicals, no abrasives and no drama.
            </span>
          </p>
          <ComonBtn name="Get Instant Quote" />
          <div className="mt-40 d-flex flex-wrap align-items-center justify-content-sm-between justify-content-center hero-gray-box w-100 mx-auto">
            <div className=" d-flex gap-12 align-items-center">
              <Tickicon />
              <h4 className="mb-0 fw-bold fs-16 lh-24 clr-white ff-acumin">
                Non-Abrasive
              </h4>
            </div>
            <div className=" d-flex gap-12 align-items-center">
              <Tickicon />
              <h4 className="mb-0 fw-bold fs-16 lh-24 clr-white ff-acumin">
                No Chemicals
              </h4>
            </div>
            <div className=" d-flex gap-12 align-items-center">
              <Tickicon />
              <h4 className="mb-0 fw-bold fs-16 lh-24 clr-white ff-acumin">
                No Mess
              </h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
