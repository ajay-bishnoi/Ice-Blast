import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ContactUs from "./ContactUs";
import footerLogo from "../assets/img/svg/f-logo.svg";
import { InstaIcon, TickTokIcon, YouTubeIcon } from "../assets/Svgicon";

const Footer = () => {
  return (
    <div className="py-38-25 bg-d-blue">
      <Container>
        <ContactUs />
        <Row className=" d-flex justify-content-between my-57-48">
          <Col lg={4}>
            <img src={footerLogo} alt="Footer-logo" className="pointer" />
            <p className="fw-normal ff-acumin fs-16 lh-24 clr-white opacity_07 mb-0 mt-10">
              IceBlastPro is Oxfordshire's Dry Ice Car Cleaning specialists.
              Removing dirt and grime in hard to reach areas with a non-abrasive
              Dry Ice Blasting technique that requires no chemicals and leaves
              no mess.
            </p>
          </Col>
          <Col lg={7} className=" mt-4 mt-lg-0">
            <Row className=" d-flex justify-content-between">
              <Col sm={3} xs={6}>
                <ul className="ps-0 mb-0 d-flex flex-column gap-12">
                  <li className="mb-1 ff-acumin fw-bold fs-18 lh-28 clr-white">
                    Quick Link
                  </li>
                  <li>
                    <a
                      className=" ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 footerlink"
                      href="#Home"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 footerlink"
                      href="#AboutUs"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 footerlink"
                      href="#Services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 footerlink"
                      href="#Blog"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 footerlink"
                      href="#FAQ’s"
                    >
                      FAQ’s
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 footerlink"
                      href="#ContactUs"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4} xs={6}>
                <ul className="ps-0 mb-0 d-flex flex-column gap-12">
                  <li className="mb-1 ff-acumin fw-bold fs-18 lh-28 clr-white">
                    Legal Information
                  </li>
                  <li>
                    <a
                      className=" ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 footerlink"
                      href="#TermsofService"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      className=" ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 footerlink"
                      href="#PrivacyPolicy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={3} xs={6} className=" mt-4 mt-sm-0">
                <h4 className="mb-3 ff-acumin fw-bold fs-18 lh-28 clr-white">
                  Follow us
                </h4>
                <div className=" d-flex flex-column gap-18">
                  <div className=" d-flex align-items-center footerlink w-content">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="d-flex flex-column justify-content-center align-items-center sociallogo "
                    >
                      <InstaIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/"
                      className="ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 ms-12"
                    >
                      Instagram
                    </a>
                  </div>
                  <div className=" d-flex align-items-center footerlink w-content">
                    <a
                      href="https://www.tiktok.com/"
                      target="_blank"
                      className="d-flex flex-column justify-content-center align-items-center sociallogo "
                    >
                      <TickTokIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.tiktok.com/"
                      className="ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 ms-12"
                    >
                      Tiktok
                    </a>
                  </div>
                  <div className=" d-flex align-items-center footerlink w-content ">
                    <a
                      target="_blank"
                      href="https://www.youtube.com/"
                      className="d-flex flex-column justify-content-center align-items-center sociallogo "
                    >
                      <YouTubeIcon />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/"
                      className="ff-acumin fw-normal fs-16 lh-24 clr-white opacity_07 ms-12"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <h6 className=" ff-acumin fw-normal fs-14 lh-19 clr-white opacity_07 text-center mb-0">
          Copyright©2024(IceBlastPro) All Rights Reserved.
        </h6>
      </Container>
    </div>
  );
};

export default Footer;
