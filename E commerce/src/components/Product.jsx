import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  /* margin-left: 7px; */
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
  /* background-color: #ebeced; */
  position: relative;
  ${mobile({ minWidth: "130px", height: "200px" })};
  /* FOR SHOWING ICONS */
  /* &:hover ${Info} {
    opacity: 1;
  } */
`;
const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  /* background-color: white; */
  position: absolute;
`;
const Image = styled.img`
  height: 75%;
  z-index: 2;
  ${mobile({
    // height: "50%", marginTop: "20px"
    height: "160px",
    width: "120px",
    objectFit: "contain",
  })};
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  ${mobile({ height: "30px" })};

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
const InfoConatiner = styled.div`
  ${mobile({ marginTop: "10px", height: "30%" })};
`;
const ProductTitle = styled.h1`
  font-size: 14px;
  font-weight: 600;
  ${mobile({ fontSize: "10px", marginBottom: "-10px" })};
`;
const ProductDesc = styled.span`
  text-align: center;
  font-size: 12px;
  ${mobile({ fontSize: "8px" })};
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  /* text-align: start; */
  ${mobile({ fontSize: "8px", marginTop: "-10px" })}
  /* justify-content: space-evenly; */
`;
const Product = ({ item }) => {
  return (
    <>
      <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
          <Icon>
            <SearchOutlined />
          </Icon>
          <Icon>
            <FavoriteBorderOutlined />
          </Icon>
        </Info>
        <InfoConatiner>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductDesc>{item.desc}</ProductDesc>
          <PriceContainer>
            <span
              style={{
                fontSize: "12px",
                margin: "10px 0px",
                fontWeight: "bold",
              }}
            >
              {item.price}
            </span>
            {/* <span>-40%</span> */}
            {/* <span>206 €</span> */}
          </PriceContainer>
        </InfoConatiner>
      </Container>
    </>
  );
};

export default Product;
