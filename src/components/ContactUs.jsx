import React from "react";
import { Locicon, Mailicon, Telicon, Timericon } from "../assets/Svgicon";
import Slider from "react-slick";

const ContactUs = () => {
  // - slider - //
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    variableWidth: true,
    speed: 8000,
    pauseOnHover: true,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <>
      <div className="my-14 d-xl-flex d-none align-items-center justify-content-between gap-52">
        <a
          href="https://maps.app.goo.gl/gNwn4hrFF5n3Mbsm9"
          target="_blank"
          className=" d-flex align-items-center gap-10 icon-box"
        >
          <Locicon />
          <h5 className="mb-0 ff-acumin fw-normal fs-16 lh-24 clr-white opacity_08">
            Crawley Mill Industrial Estate, Witney, Oxfordshire
          </h5>
        </a>
        <a
          href="mailto:book@dryiceblastingpro.co.uk"
          target="_blank"
          className=" d-flex align-items-center gap-10 icon-box"
        >
          <Mailicon />
          <h5 className="mb-0 ff-acumin fw-normal fs-16 lh-24 clr-white opacity_08">
            book@dryiceblastingpro.co.uk
          </h5>
        </a>
        <a
          href="tel:01865123456"
          target="_blank"
          className=" d-flex align-items-center gap-10 icon-box"
        >
          <Telicon />
          <h5 className="mb-0 ff-acumin fw-normal fs-16 lh-24 clr-white opacity_08">
            01865123456
          </h5>
        </a>
        <div className=" d-flex align-items-center gap-10 icon-box">
          <Timericon />
          <h5 className="mb-0 ff-acumin fw-normal fs-16 lh-24 clr-white opacity_08">
            Mon - Fri: 9am to 5pm
          </h5>
        </div>
      </div>
      {/* slider */}
      <Slider {...settings} className="my-14 d-xl-none">
        <a
          href="https://maps.app.goo.gl/gNwn4hrFF5n3Mbsm9"
          target="_blank"
          className=" d-flex align-items-center gap-10 icon-box mx-3"
        >
          <Locicon />
          <h5 className="mb-0 ff-acumin fw-normal fs-16 lh-24 clr-white opacity_08">
            Crawley Mill Industrial Estate, Witney, Oxfordshire
          </h5>
        </a>
        <a
          href="mailto:book@dryiceblastingpro.co.uk"
          target="_blank"
          className=" d-flex align-items-center gap-10 icon-box mx-3"
        >
          <Mailicon />
          <h5 className="mb-0 ff-acumin fw-normal fs-16 lh-24 clr-white opacity_08">
            book@dryiceblastingpro.co.uk
          </h5>
        </a>
        <a
          href="tel:01865123456"
          target="_blank"
          className=" d-flex align-items-center gap-10 icon-box mx-3"
        >
          <Telicon />
          <h5 className="mb-0 ff-acumin fw-normal fs-16 lh-24 clr-white opacity_08">
            01865123456
          </h5>
        </a>
        <div className=" d-flex align-items-center gap-10 icon-box mx-3">
          <Timericon />
          <h5 className="mb-0 ff-acumin fw-normal fs-16 lh-24 clr-white opacity_08">
            Mon - Fri: 9am to 5pm
          </h5>
        </div>
      </Slider>
    </>
  );
};

export default ContactUs;
