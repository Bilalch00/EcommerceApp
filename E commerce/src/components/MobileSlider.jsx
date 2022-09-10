import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
`;

const MobileSlider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="false"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" s>
          <img
            src="https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="d-block w-100"
            alt="..."
          />
          <div
            className="carousel-caption d-md-block"
            style={{ paddingBottom: "30px" }}
          >
            <h5>SHIRT STYLE!</h5>
            <Link to="/product/list/">
              <Button>SHOP NOW</Button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            className="d-block w-100"
            alt="..."
          />
          <div
            className="carousel-caption d-md-block"
            style={{ paddingBottom: "30px" }}
          >
            <h5>LOUNGEWEAR LOVE</h5>
            <Button>SHOP NOW</Button>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="d-block w-100"
            alt="..."
          />
          <div
            className="carousel-caption d-md-block"
            style={{ paddingBottom: "30px" }}
          >
            <h5>LIGHT JACKETS</h5>
            <Button>SHOP NOW</Button>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default MobileSlider;
