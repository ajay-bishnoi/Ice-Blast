import React, { useState } from "react";
import ComonBtn from "../common/ComonBtn";
import MailLogo from "../assets/img/svg/m.svg";
import { Check } from "../assets/Svgicon";
import { Container } from "react-bootstrap";

const Mail = () => {
  const [show, setShow] = useState(true);
  return (
    <div className="pt-49">
      <Container>
        <div className="mailCard mx-auto d-flex flex-column align-items-center position-relative ">
          <h2 className="fw-bold text-center fs-48 lh-57 ff-titling clr-white mb-2">
            Join Our Mailing List
          </h2>
          <p className="ff-acumin fw-normal fs-16 lh-24 text-center clr-white opacity_09 mb-23">
            Get news, videos and deals straight to your inbox.
          </p>
          <div className=" d-flex align-items-center justify-content-between mailBox bg-white ">
            <input
              type="email"
              placeholder="Enter your email address"
              className="inputbox fw-normal fs-16 lh-21 ff-acumin clr-d-blue opacity_08 w-100"
            />
            <ComonBtn name="Subscribe" />
          </div>
          <div className=" d-flex align-items-sm-center gap-2 mt-20">
            <span
              onClick={() => setShow(!show)}
              className="checkbox d-flex align-items-center justify-content-center pointer"
            >
              {show ? " " : <Check />}
            </span>
            <h6 className="mb-0 fw-normal ff-acumin fs-14 lh-14 clr-white opacity_09">
              I consent to receive emails & confirm{" "}
              <span className=" d-sm-inline d-block">
                I have read the
                <span className=" fw-bold opacity_1"> privacy policy.</span>
              </span>
            </h6>
          </div>
          {/* logo */}
          <img src={MailLogo} alt="mail-logo" className="mailLogo" />
        </div>
      </Container>
      <iframe
        className=" w-100 setMap d-flex"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23998.278348092936!2d-99.16822907206681!3d19.437796573360323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1717828636044!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Mail;
