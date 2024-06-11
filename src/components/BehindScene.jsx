import React from "react";
import { Container } from "react-bootstrap";
import CloudLayer from "../assets/img/png/cloud-Layer-3.webp";
import MenWashingCar from "../assets/img/png/Men-washing-car.webp";
import ComonBtn from "../common/ComonBtn";
import { PlayIcon } from "../assets/Svgicon";

const BehindScene = () => {
  return (
    <div className="car-bg-layer pb-254">
      <img src={CloudLayer} alt="CloudLayer" className=" w-100 Cloud-Layer-3" />
      <Container>
        <div className="max-592 my-36-50 mx-auto">
          <h2 className="fw-bold ff-titling text-center fs-48 lh-57 clr-white mb-12">
            Behind the Scenes{" "}
            <span className=" d-block"> Dry Ice Blasting a Car</span>
          </h2>
          <p className=" mb-0 fw-normal fs-16 lh-24 text-center clr-white ff-acumin">
            From the initial setup to the final sweep, discover how we elevate
            car cleaning to an art form, delivering immaculate results every
            time.
          </p>
        </div>
        <div className="gray-border mb-40 position-relative">
          <img
            src={MenWashingCar}
            alt="Men-Washing-Car"
            className=" w-100 MenWashingCar"
          />
          <PlayIcon />
        </div>
        <div className="text-center">
          <h5 className=" fw-bold fs-16 lh-24 clr-white ff-acumin mb-20">
            Discover a cleaner, fresher, and more beautiful car, inside and out,
            with our advanced dry ice blasting services.
          </h5>
          <ComonBtn name="Get Instant Quote" />
        </div>
      </Container>
    </div>
  );
};

export default BehindScene;
