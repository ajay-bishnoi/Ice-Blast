import React, { useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import Logo from "../assets/img/svg/logo.svg";
import ComonBtn from "../common/ComonBtn";
import ContactUs from "./ContactUs";

const NavBar = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        document.body.style.overflow = show ? "visible" : "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [show]);

  const handleClick = (e) => {
    if (window.innerWidth < 992) {
      setShow(!show);
    } else {
      e.preventDefault();
    }
  };
  return (
    <>
      <Nav >
        <Container>
          <ContactUs />
        </Container>
        <Container fluid className="mx-auto w-100 max-1230 ">
          <div className="bg-white nav-p-4-45 nav-border d-flex align-items-center justify-content-between">
            <img src={Logo} alt="ice-blast-logo" className="pointer" />
            <ul
              className={`d-flex align-items-center ps-0 mb-0 gap-4 mobile-view
                 ${show ? "" : " start-0"}`}
            >
              <li>
                <a
                  onClick={() => setShow(!show)}
                  className=" fw-bold ff-acumin fs-16 lh-19 clr-gray nav-items"
                  href="#Home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => setShow(!show)}
                  className=" fw-bold ff-acumin fs-16 lh-19 clr-gray nav-items"
                  href={"#Aboutus"}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  onClick={() => setShow(!show)}
                  className=" fw-bold ff-acumin fs-16 lh-19 clr-gray nav-items"
                  href="#Services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={() => setShow(!show)}
                  className=" fw-bold ff-acumin fs-16 lh-19 clr-gray nav-items"
                  href="#Pricing"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  onClick={() => setShow(!show)}
                  className=" fw-bold ff-acumin fs-16 lh-19 clr-gray nav-items"
                  href="#Blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  onClick={() => setShow(!show)}
                  className=" fw-bold ff-acumin fs-16 lh-19 clr-gray nav-items"
                  href="#Contactus"
                >
                  Contact us
                </a>
              </li>
            </ul>
            <div className=" d-flex align-items-center gap-2 gap-sm-4">
              <ComonBtn name="Call Us" />
              <div
                className={` menu d-lg-none ${show ? "" : "cross"}`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span className=" my-2"></span>
                <span></span>
              </div>
            </div>
          </div>
        </Container>
      </Nav>
    </>
  );
};

export default NavBar;
