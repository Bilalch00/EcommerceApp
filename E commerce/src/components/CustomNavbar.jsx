import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Badge } from "@material-ui/core";
import { Search, Favorite, Person, ShoppingBasket } from "@material-ui/icons";
import { man, women, bags, accessories, shoes, watches } from "../data";
import MobileNavbar from "./MobileNavbar";
import "../main.css";
import { Link } from "react-router-dom";

const FirstContainer = styled.div`
  display: flex;
  /* margin-top: 10px; */
  background: #ffff;
`;
const Left = styled.div`
  flex: 1;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;
const ListItem = styled.li`
  padding: 10px 10px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding-left: 25px;
`;

const SecondContainer = styled.div`
  display: flex;
  margin-top: 0px;
  background-color: #fff;
  padding-bottom: 20px;
`;
const SecondLeft = styled.div`
  padding-left: 50px;
  flex: 3;
`;
const SecondListContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin: 0;
  padding: 0;
`;
const SecondListItem = styled.a`
  font-size: 10px;
  margin: 10px;
  text-decoration: none;
  font-weight: 200;
  color: black;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const SecondRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;
const CustomNavbar = () => {
  const [activenav, setActiveNav] = useState(women);
  const [nav1, setNav1] = useState("active_nav");
  const [nav2, setNav2] = useState("non_active_nav");
  const [nav3, setNav3] = useState("non_active_nav");
  const [nav4, setNav4] = useState("non_active_nav");
  const [nav5, setNav5] = useState("non_active_nav");
  const [nav6, setNav6] = useState("non_active_nav");

  const handleNav = (val) => {
    if (val === "women") {
      setNav1("active_nav");
      setNav2("nonactive_nav");
      setNav3("nonactive_nav");
      setNav4("nonactive_nav");
      setNav5("nonactive_nav");
      setNav6("nonactive_nav");
    } else if (val === "man") {
      setNav1("nonactive_nav");
      setNav2("active_nav");
      setNav3("nonactive_nav");
      setNav4("nonactive_nav");
      setNav5("nonactive_nav");
      setNav6("nonactive_nav");
    } else if (val === "bags") {
      setNav1("nonactive_nav");
      setNav2("nonactive_nav");
      setNav3("active_nav");
      setNav4("nonactive_nav");
      setNav5("nonactive_nav");
      setNav6("nonactive_nav");
    } else if (val === "accessories") {
      setNav1("nonactive_nav");
      setNav2("nonactive_nav");
      setNav3("nonactive_nav");
      setNav4("active_nav");
      setNav5("nonactive_nav");
      setNav6("nonactive_nav");
    } else if (val === "shoes") {
      setNav1("nonactive_nav");
      setNav2("nonactive_nav");
      setNav3("nonactive_nav");
      setNav4("nonactive_nav");
      setNav5("active_nav");
      setNav6("nonactive_nav");
    } else if (val === "watches") {
      setNav1("nonactive_nav");
      setNav2("nonactive_nav");
      setNav3("nonactive_nav");
      setNav4("nonactive_nav");
      setNav5("nonactive_nav");
      setNav6("active_nav");
    }
  };

  return (
    <>
      <div className="desktop_navbar">
        <FirstContainer>
          <Left>
            <ListContainer>
              <List>
                <ListItem
                  onClick={() => {
                    setActiveNav(women);
                    handleNav("women");
                  }}
                  className={nav1}
                >
                  WOMEN
                </ListItem>
                <ListItem
                  onClick={() => {
                    setActiveNav(man);
                    handleNav("man");
                  }}
                  className={nav2}
                >
                  MEN
                </ListItem>
                <ListItem
                  onClick={() => {
                    setActiveNav(bags);
                    handleNav("bags");
                  }}
                  className={nav3}
                >
                  BAGS
                </ListItem>
                <ListItem
                  onClick={() => {
                    setActiveNav(accessories);
                    handleNav("accessories");
                  }}
                  className={nav4}
                >
                  ACCESSORIES
                </ListItem>
                <ListItem
                  onClick={() => {
                    setActiveNav(shoes);
                    handleNav("shoes");
                  }}
                  className={nav5}
                >
                  SHOES
                </ListItem>
                <ListItem
                  onClick={() => {
                    setActiveNav(watches);
                    handleNav("watches");
                  }}
                  className={nav6}
                >
                  WATCHES
                </ListItem>
              </List>
            </ListContainer>
          </Left>
          <Center>
            <Link to="/">
              <img
                src={logo}
                alt=""
                style={{ height: "52px", width: "52px" }}
              />
            </Link>
          </Center>
          <Right>
            <MenuItem>
              <Link to="/login">
                <Person style={{ fontSize: "20px" }} />
              </Link>
            </MenuItem>
            <MenuItem>
              <Favorite style={{ fontSize: "20px" }} />
            </MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingBasket style={{ fontSize: "20px" }} />
              </Badge>
            </MenuItem>
          </Right>
        </FirstContainer>
        <SecondContainer>
          <SecondLeft>
            <SecondListContainer>
              {activenav.map((item) => (
                <SecondListItem to="/" key={item.index}>
                  {item.navdata}
                </SecondListItem>
              ))}
            </SecondListContainer>
          </SecondLeft>
          <SecondRight>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </SecondRight>
        </SecondContainer>
      </div>
      <div className="mobile_navbar">
        <MobileNavbar />
      </div>
    </>
  );
};

export default CustomNavbar;
