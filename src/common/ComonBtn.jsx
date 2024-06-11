import React from "react";

const ComonBtn = ({ name }) => {
  return (
    <>
      <button
        data-aos="flip-up"
        className="fw-bold fs-16 lh-19 ff-acumin clr-white bg-orange comonbtn"
      >
        {name}
      </button>
    </>
  );
};

export default ComonBtn;
