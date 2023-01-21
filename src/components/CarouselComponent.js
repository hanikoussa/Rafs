import Carousel from "react-bootstrap/Carousel";
import React from "react";
import silk from "/assets/peakpx.jpeg";

import "../carousel.css";

function CarouselComponent() {
  return (
    <Carousel
      style={{ paddingTop: 30, paddingBottom: 30 }}
      className="no-indicators"
    >
      <Carousel.Item>
        <a href="/about">
          <img className="d-block w-100" src={silk} alt="First slide" />
        </a>

        <Carousel.Caption
          style={{
            top: "45%"
          }}
        >
          <a
            href="/about"
            style={{
              textDecoration: "none",
              color: "white"
            }}
          >
            <h3>About Us</h3>
          </a>

          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={silk} alt="Second slide" />

        <Carousel.Caption
          style={{
            top: "45%"
          }}
        >
          <h3>Second slide label</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={silk} alt="Third slide" />

        <Carousel.Caption
          style={{
            top: "45%"
          }}
        >
          <h3>Third slide label</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;
