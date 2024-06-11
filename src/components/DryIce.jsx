import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import IceblastingCar from "../assets/img/png/ice-blasting-car.webp";
import { ChangeBtn } from "../assets/Svgicon";
import EffectiveCleaning from "../assets/img/svg/effective-cleaning.svg";
import NONabrasive from "../assets/img/svg/non-abrasive.svg";
import NOresidue from "../assets/img/svg/no-residue.svg";
import Materials from "../assets/img/svg/various-materials.svg";

const DryIce = () => {
  return (
    <div className="-mt-95 pb-168 position-relative z-3 ">
      <Container>
        <h2 className="fw-bold ff-titling text-center fs-48 lh-57 clr-d-blue  mb-lg-5 mb-4">
          Why Choose Dry Ice Blasting for Your Car?
        </h2>
        <Row className=" align-items-center">
          <Col lg={6}>
            <div className=" d-flex flex-column gap-28 text-center text-lg-start max-lg-500">
              <div className=" d-flex flex-column flex-lg-row align-items-center gap-12">
                <img src={EffectiveCleaning} alt="Effective-Cleaning" />
                <div>
                  <h5 className=" fw-bold clr-d-blue fs-16 lh-24 ff-acumin mb-1">
                    Effective Cleaning
                  </h5>
                  <p className="mb-0 fw-normal fs-16 lh-24 clr-d-blue opacity_07">
                    The sublimation process effectively removes dirt, oil, and
                    grime, even in hard-to-reach areas.
                  </p>
                </div>
              </div>
              <div className=" d-flex flex-column flex-lg-row align-items-center gap-12">
                <img src={NONabrasive} alt="Non-Abrasive" />
                <div>
                  <h5 className=" fw-bold clr-d-blue fs-16 lh-24 ff-acumin mb-1">
                    Non-Abrasive
                  </h5>
                  <p className="mb-0 fw-normal fs-16 lh-24 clr-d-blue opacity_07">
                    Unlike sandblasting or chemical cleaning, dry ice blasting
                    won’t damage your car’s components or paint.
                  </p>
                </div>
              </div>
              <div className=" d-flex flex-column flex-lg-row align-items-center gap-12">
                <img src={NOresidue} alt="No-Residue" />
                <div>
                  <h5 className=" fw-bold clr-d-blue fs-16 lh-24 ff-acumin mb-1">
                    No Residue
                  </h5>
                  <p className="mb-0 fw-normal fs-16 lh-24 clr-d-blue opacity_07">
                    Since dry ice sublimates, there’s no residual waste to clean
                    up, making it an environmentally friendly option.
                  </p>
                </div>
              </div>
              <div className=" d-flex flex-column flex-lg-row align-items-center gap-12">
                <img src={Materials} alt="Safe-for-Various-Materials" />
                <div>
                  <h5 className=" fw-bold clr-d-blue fs-16 lh-24 ff-acumin mb-1">
                    Safe for Various Materials
                  </h5>
                  <p className="mb-0 fw-normal fs-16 lh-24 clr-d-blue opacity_07">
                    It’s safe for use on metals, plastics, rubbers, fabrics and
                    more, ensuring comprehensive cleaning without damage.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className=" d-flex justify-content-center mt-5 mt-lg-0">
            <div className="position-relative   ">
              <img
                src={IceblastingCar}
                alt="ice-blasting-car"
                className="IceblastingCar w-100"
              />
              <ChangeBtn />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DryIce;
