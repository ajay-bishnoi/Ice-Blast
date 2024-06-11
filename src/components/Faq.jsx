import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ComonBtn from "../common/ComonBtn";
import { Plus, Plus2, WhiteMinus } from "../assets/Svgicon";

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(0);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  const accordionData = [
    {
      title: "What types of vehicles are best suited for dry ice blasting?",
      content: `Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.`,
    },
    {
      title:
        "How often should I use dry ice blasting for optimal vehicle maintenance?",
      content: `Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.`,
    },
    {
      title: "Can dry ice blasting be used on vehicle interiors?",
      content: `Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.`,
    },
    {
      title:
        "What makes dry ice blasting more effective than pressure washing or sandblasting?",
      content: `Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.`,
    },
    {
      title:
        "Is there any preparation required on my part before a dry ice blasting session?",
      content: `Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.`,
    },
    {
      title: "How long does a typical dry ice blasting session take?",
      content: `Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.`,
    },
    {
      title: "Can dry ice blasting improve my vehicle’s resale value?",
      content: `Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.`,
    },
    {
      title:
        "Will dry ice blasting remove existing wax or sealant from my car’s paint?",
      content: `Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.`,
    },
    {
      title:
        "Are there any special care instructions to follow after a dry ice blasting session?",
      content: `Dry ice blasting is effective for cleaning a wide range of surfaces, including aircraft, automotive components, railway equipment, marine vessels, industrial machinery, food processing equipment, electrical components, and historic structures. The method is versatile, non-abrasive, and environmentally friendly, making it suitable for diverse applications across various industries.`,
    },
  ];
  return (
    <div className="py-45-64">
      <Container>
        <h2 className="fw-bold text-center fs-48 lh-57 ff-titling clr-d-blue mb-sm-5 mb-4">
          Still Unsure? Check Out These FAQs
        </h2>
        {/* accordion */}
        <div className="mb-20 accordions d-flex flex-column gap-20">
          {accordionData.map((item, index) => {
            return (
              <div
                key={index}
                className={`accordion_item-2 d-flex ${
                  openAccordion === index ? "bg-d-blue" : "bg-l-purple "
                }  flex-column gap-12 justify-content-between align-items-start`}
              >
                <div
                  onClick={() => toggleAccordion(index)}
                  className="accordion_head pointer d-flex align-items-center justify-content-between w-100 gap-30"
                >
                  <h5
                    className={`mb-0 ff-acumin fw-bold fs-24 lh-33 ${
                      openAccordion === index ? "clr-white" : "clr-d-blue "
                    }`}
                  >
                    {item.title}
                  </h5>
                  <span className="scale09">
                    {openAccordion === index ? <WhiteMinus /> : <Plus2 />}
                  </span>
                </div>
                <div
                  className={`accordion_body2 w-100 ${
                    openAccordion === index ? "open" : ""
                  }`}
                >
                  <p className="mb-0 fw-normal fs-16 lh-24 opacity_08 clr-white">
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* coment-box */}
        <div className="typeSomething w-100">
          <h5 className=" ff-acumin fw-bold fs-24 lh-33 clr-d-blue mb-18">
            Have a Different Question? Contact Us Today
          </h5>
          <textarea
            placeholder="Type something..."
            className=" ff-acumin fw-normal fs-16 lh-24 clr-d-blue opacity_07 comentBox mb-40 w-100"
          ></textarea>
          <ComonBtn name="Submit Now" />
        </div>
      </Container>
    </div>
  );
};

export default Faq;
