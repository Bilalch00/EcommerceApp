import {
  Menu,
  Search,
  Favorite,
  ShoppingBasket,
  Close,
} from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { man, women, bags, accessories, shoes, watches } from "../data";
import "../main.css";
import MobileComponent from "./MobileComponent";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;
  background-color: white;
  /* width: 93%; */
`;
const Left = styled.div`
  margin-top: 10px;
  flex: 1;
  display: flex;
`;
const MobileIconContainer = styled.div`
  margin-top: 7px;
  display: flex;
`;
const MobileLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;
const MobileRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  margin-left: -10px;
`;
const ListContainer = styled.div`
  display: flex;
  justify-content: flex-start !important;
  /* margin-top: 30px; */
  /* margin-left: 0px; */
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
`;
const ListItem = styled.li`
  padding: 10px 10px;
  font-size: 12px;
  cursor: pointer;
`;
const SecondListContainer = styled.div`
  /* display: flex; */
  margin: 0;
  padding: 0;
`;
const SecondListItem = styled.p`
  font-size: 10px;
  margin-left: 10px;
  margin-top: 20px;
  display: block;
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
const AccountInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;
const AccountTitle = styled.h6`
  margin-top: 20px;
  font-size: 14px;
  margin-left: 10px;
  font-weight: 400;
`;
const SignInButton = styled.button`
  background-color: black;
  color: white;
  width: 90%;
  font-weight: 600;
  margin-top: 10px;
  border-radius: 5px;
  height: 40px;
  border: none;
  cursor: pointer;
`;
const RegisterButton = styled.button`
  background-color: white;
  color: black;
  width: 90%;
  font-weight: 600;
  margin-top: 10px;
  border-radius: 5px;
  height: 40px;
  border: 0.5px solid black;
  cursor: pointer;
`;
const SearchMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  /* display: flex; */
  align-items: center;
  width: 80%;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  width: 80%;
  margin-left: 10px;
`;
const CancelButton = styled.button`
  border: none;
  background-color: white;
  margin-left: 20px;
  font-weight: 600;
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
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  padding-left: 10px;
`;
const MobileNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [activenav, setActiveNav] = useState(women);
  const [nav1, setNav1] = useState("mobile_active_nav");
  const [nav2, setNav2] = useState("non_mobile_active_nav");
  const [nav3, setNav3] = useState("non_mobile_active_nav");
  const [nav4, setNav4] = useState("non_mobile_active_nav");
  const [nav5, setNav5] = useState("non_mobile_active_nav");
  const [nav6, setNav6] = useState("non_mobile_active_nav");

  const handleNav = (val) => {
    if (val === "women") {
      setNav1("mobile_active_nav");
      setNav2("non_mobile_active_nav");
      setNav3("non_mobile_active_nav");
      setNav4("non_mobile_active_nav");
      setNav5("non_mobile_active_nav");
      setNav6("non_mobile_active_nav");
    } else if (val === "man") {
      setNav1("non_mobile_active_nav");
      setNav2("mobile_active_nav");
      setNav3("non_mobile_active_nav");
      setNav4("non_mobile_active_nav");
      setNav5("non_mobile_active_nav");
      setNav6("non_mobile_active_nav");
    } else if (val === "bags") {
      setNav1("non_mobile_active_nav");
      setNav2("non_mobile_active_nav");
      setNav3("mobile_active_nav");
      setNav4("non_mobile_active_nav");
      setNav5("non_mobile_active_nav");
      setNav6("non_mobile_active_nav");
    } else if (val === "accessories") {
      setNav1("non_mobile_active_nav");
      setNav2("non_mobile_active_nav");
      setNav3("non_mobile_active_nav");
      setNav4("mobile_active_nav");
      setNav5("non_mobile_active_nav");
      setNav6("non_mobile_active_nav");
    } else if (val === "shoes") {
      setNav1("non_mobile_active_nav");
      setNav2("non_mobile_active_nav");
      setNav3("non_mobile_active_nav");
      setNav4("non_mobile_active_nav");
      setNav5("mobile_active_nav");
      setNav6("non_mobile_active_nav");
    } else if (val === "watches") {
      setNav1("non_mobile_active_nav");
      setNav2("non_mobile_active_nav");
      setNav3("non_mobile_active_nav");
      setNav4("non_mobile_active_nav");
      setNav5("non_mobile_active_nav");
      setNav6("mobile_active_nav");
    }
  };
  return (
    <Container>
      <Left>
        <MenuItem>
          <Menu
            onClick={() => setShowNav(!showNav)}
            style={{ fontSize: "28px" }}
          />
          <div className={showNav ? "nav-menu active" : "nav-menu"}>
            <MobileIconContainer>
              <MobileLeft>
                <Link to="/">
                  <img
                    src={logo}
                    alt=""
                    style={{ height: "30px", width: "30px" }}
                  />
                </Link>
              </MobileLeft>
              <MobileRight>
                <Close
                  onClick={() => setShowNav(!showNav)}
                  style={{ cursor: "pointer", marginRight: "10px" }}
                />
              </MobileRight>
            </MobileIconContainer>
            <MobileComponent />
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
            <SecondListContainer>
              {activenav.map((item) => (
                <SecondListItem to="/" key={item.index}>
                  {item.navdata}
                </SecondListItem>
              ))}
            </SecondListContainer>
            <AccountTitle>MY ACCOUNT</AccountTitle>
            <AccountInfoContainer>
              <SignInButton>
                <Link to="/login" style={{ textDecoration: "none" }}>
                  Sign In
                </Link>
              </SignInButton>
              <RegisterButton>
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Register
                </Link>
              </RegisterButton>
            </AccountInfoContainer>
          </div>
        </MenuItem>
        <MenuItem>
          <Search
            onClick={() => setShowSearch(!showSearch)}
            style={{ fontSize: "28px" }}
          />
          <div className={showSearch ? "nav-search active" : "nav-search"}>
            <SearchMainContainer>
              <SearchContainer>
                <Search style={{ color: "gray", fontSize: 16 }} />
                <Input placeholder="Search" />
              </SearchContainer>
              <CancelButton onClick={() => setShowSearch(!showSearch)}>
                Cancel
              </CancelButton>
            </SearchMainContainer>
          </div>
        </MenuItem>
      </Left>
      <Center>
        <Link to="/">
        <img src={logo} alt="" style={{ height: "52px", width: "52px" }} />
        </Link>
      </Center>
      <Right>
        <MenuItem>
          <Favorite style={{ fontSize: "28px" }} />
        </MenuItem>
        <MenuItem style={{ marginRight: "10px" }}>
          <Badge badgeContent={4} color="primary" style={{ zIndex: "0" }}>
            <ShoppingBasket style={{ fontSize: "28px" }} />
          </Badge>
        </MenuItem>
      </Right>
    </Container>
  );
};

export default MobileNavbar;
