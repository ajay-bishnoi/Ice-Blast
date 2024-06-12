import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ComonBtn from "../common/ComonBtn";
import Car1 from "../assets/img/png/car1.webp";
import Car2 from "../assets/img/png/car2.webp";
import Car3 from "../assets/img/png/car3.webp";

const News = () => {
  return (
    <div className="py-50-138">
      <Container>
        <h2 className="fw-bold text-center fs-48 lh-57 ff-titling clr-d-blue mb-lg-3 mb-2">
          Latest News & Insights
        </h2>
        <p className="ff-acumin fw-normal fs-16 lh-24 text-center clr-d-blue opacity_07 mb-50">
          Uncover the latest insights and innovation in car care.
        </p>
        <Row className=" justify-content-center">
          <Col
            md={4}
            sm={6}
            className=" d-flex justify-content-center justify-content-xxl-end"
          >
            <div className="Latest-Card w-100 pointer">
              <img src={Car1} alt="cleaning-car" className=" w-100 mb-20" />
              <div className="max-323 mx-auto w-100">
                <h5 className=" fw-semibold fs-16 lh-24 ff-acumin clr-d-blue opacity_08 mb-10">
                  January 1st, 2024
                </h5>
                <h4 className=" fw-bold fs-16 lh-24 ff-acumin clr-d-blue mb-0">
                  What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary
                  Car Cleaning
                </h4>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            sm={6}
            className="d-flex justify-content-center end mt-sm-0 mt-4"
          >
            <div className="Latest-Card w-100 pointer">
              <img src={Car2} alt="cleaning-car" className=" w-100 mb-20" />
              <div className="max-323 mx-auto w-100">
                <h5 className=" fw-semibold fs-16 lh-24 ff-acumin clr-d-blue opacity_08 mb-10">
                  January 1st, 2024
                </h5>
                <h4 className=" fw-bold fs-16 lh-24 ff-acumin clr-d-blue mb-0">
                  What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary
                  Car Cleaning
                </h4>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            sm={6}
            className="d-flex justify-content-center justify-content-xxl-start mt-md-0 mt-4"
          >
            <div className="Latest-Card w-100 pointer">
              <img src={Car3} alt="cleaning-car" className=" w-100 mb-20" />
              <div className="max-323 mx-auto w-100">
                <h5 className=" fw-semibold fs-16 lh-24 ff-acumin clr-d-blue opacity_08 mb-10">
                  January 1st, 2024
                </h5>
                <h4 className=" fw-bold fs-16 lh-24 ff-acumin clr-d-blue mb-0">
                  What is Dry Ice Blasting? An In-Depth Guide tp Revolutionary
                  Car Cleaning
                </h4>
              </div>
            </div>
          </Col>
        </Row>
        <div className="mt-40 d-flex justify-content-center">
          <ComonBtn name="More Blogs" />
        </div>
      </Container>
    </div>
  );
};

export default News;
