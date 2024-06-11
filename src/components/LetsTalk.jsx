import React, { useState } from "react";
import "../assets/Svgicon";
import { Container } from "react-bootstrap";
import CloudLayer2 from "../assets/img/png/cloud-Layer-2.webp";
import ComonBtn from "../common/ComonBtn";
import { Minus, Plus } from "../assets/Svgicon";

const LetsTalk = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const accordionData = [
    {
      title: "Engine Bay Perfection from £375",
      content: `Crank up the cool factor under your hood with engine bay ice
                  blasting. We delicately lift away oil, grease, and grime
                  without water or chemicals. It's the ultimate detox for your
                  engine, ensuring every hose, wire, and component is treated
                  with the respect it deserves.`,
      color: "bg-l-blue",
    },
    {
      title: "Underbelly Deep-Clean from £750",
      content: `Crank up the cool factor under your hood with engine bay ice
                  blasting. We delicately lift away oil, grease, and grime
                  without water or chemicals. It's the ultimate detox for your
                  engine, ensuring every hose, wire, and component is treated
                  with the respect it deserves.`,
      color: "bg-l-purple",
    },
    {
      title: "Ultimate Undercarriage & Engine Bay Overhaul from £1,125",
      content: `Crank up the cool factor under your hood with engine bay ice
                  blasting. We delicately lift away oil, grease, and grime
                  without water or chemicals. It's the ultimate detox for your
                  engine, ensuring every hose, wire, and component is treated
                  with the respect it deserves.`,
      color: "bg-ll-pink ",
    },
    {
      title: "Need Something Else?",
      content: `Crank up the cool factor under your hood with engine bay ice
                  blasting. We delicately lift away oil, grease, and grime
                  without water or chemicals. It's the ultimate detox for your
                  engine, ensuring every hose, wire, and component is treated
                  with the respect it deserves.`,
      color: "bg-l-pink ",
    },
  ];
  return (
    <div className="pb-40">
      <img
        src={CloudLayer2}
        alt="Cloud-Layer"
        className=" w-100 Cloud-Layer-2"
      />
      <Container>
        <div id="Services" className=" w-100 -mt-110">
          <div data-aos="fade-up" className=" mx-auto max-760">
            <h2 className="fw-bold ff-titling text-center fs-48 lh-57 clr-d-blue mb-14">
              Let's Talk Numbers
            </h2>
            <p className=" mb-0 ff-acumin fw-normal fs-16 lh-24 clr-d-blue text-center opacity_07">
              We're all about transparency, but we also know that each car tells
              a different story. The cost can vary based on how much grime we're
              up against. More dirt might mean more ice and more time to get
              that perfect finish. But don't sweat it – we'll always give you a
              straight price, customised to your car's needs.
            </p>
          </div>
          {/* accordion */}
          <div className="mt-50 accordions d-flex flex-column gap-20">
            {accordionData.map((item, index) => {
              return (
                <div
                  data-aos="flip-up"
                  key={index}
                  className={`accordion_item d-flex ${item.color} flex-column flex-lg-row gap-40 justify-content-between align-items-start p-32`}
                >
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="accordion_head pointer d-flex align-items-center justify-content-between gap-3 w-100"
                  >
                    <h4 className="mb-0 ff-acumin fw-bold fs-28 lh-39 clr-d-blue">
                      {item.title}
                    </h4>
                    <span
                      onClick={() => toggleAccordion(index)}
                      className="d-lg-none"
                    >
                      {openAccordion === index ? <Minus /> : <Plus />}
                    </span>
                  </div>
                  <div
                    className={`accordion_body ${
                      openAccordion === index ? "open" : ""
                    }`}
                  >
                    <p className="mb-0 fw-normal fs-16 lh-24 opacity_07 clr-d-blue">
                      {item.content}
                    </p>
                  </div>
                  <span
                    onClick={() => toggleAccordion(index)}
                    className="d-none d-lg-inline"
                  >
                    {openAccordion === index ? <Minus /> : <Plus />}
                  </span>
                </div>
              );
            })}
          </div>
          {/*  */}
          <div className="mt-40 w-100 Quote">
            <div data-aos="zoom-in" className="max-770 mx-auto text-center">
              <h3 className=" fw-bold fs-32 lh-44 clr-d-blue ff-titling mb-sm-3 mb-2">
                Get an Instant Quote Today
              </h3>
              <p className=" ff-acumin fs-16 lh-24 clr-d-blue opacity_07 fw-normal mb-40">
                Regular dry ice cleaning prevents costly rust and wear. Avoid
                potentially thousands of pounds worth of bodywork repairs when
                just for a fraction of that you can keep your car in prime
                condition all year round! What are you waiting for?
              </p>
              <ComonBtn name="Get Instant Quote" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LetsTalk;
