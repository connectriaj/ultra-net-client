import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-img">
            <img
              className="d-block w-75 mx-auto"
              style={{ height: "700px" }}
              src="https://images.unsplash.com/photo-1614064849549-ba6c7b819a49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="First slide"
            />
          </div>
          <Carousel.Caption>
            <h3>Get Ready for Ultra Speed Internet</h3>
            <p>Leased Line Internet with A+ Category Internet Service.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img">
            <img
              className="d-block w-75 mx-auto"
              style={{ height: "700px" }}
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Second slide"
            />
          </div>

          <Carousel.Caption>
            <h3>Broadband for Institutions and SME’s</h3>
            <p>
              UltraNet is building an all IP Wireless network using 4th
              Generation
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-img">
            <img
              className="d-block w-75 mx-auto"
              style={{ height: "700px" }}
              src="https://images.unsplash.com/photo-1521106047354-5a5b85e819ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
              alt="Third slide"
            />
          </div>

          <Carousel.Caption>
            <h3>More than 4000+ Happy Customers</h3>
            <p>
              Providing solutions to residential, corporate, educational
              institutions.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
