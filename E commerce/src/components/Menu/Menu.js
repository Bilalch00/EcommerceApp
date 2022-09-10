import React from "react";
import "./Menu.css";
import logo from "../../assets/logo.png";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;
const Input = styled.input`
  border: none;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 10px;
  }
`;
const Menu = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              <img
                src={logo}
                alt=""
                className="navbar-brand"
                style={{ height: "60px", width: "52px" }}
              />
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav">
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    MENS
                  </a>
                  <div className="dropdown-menu">
                    {" "}
                    <a href="/" className="dropdown-item">
                      MENS COATS/JACKETS
                    </a>{" "}
                    <a href="/" className="dropdown-item">
                      MENS HOODIES/SWEAT SHIRTS
                    </a>{" "}
                    <a href="/" className="dropdown-item">
                      MENS PREMIUM GRADE T-SHIRTS
                    </a>{" "}
                    <a href="/" className="dropdown-item">
                      MENS JUMPERS
                    </a>{" "}
                    <a href="/" className="dropdown-item">
                      MENS classNameIC T-SHIRTS
                    </a>{" "}
                    <a href="/" className="dropdown-item">
                      MENS POLO SHIRT
                    </a>
                    <a href="/" className="dropdown-item">
                      SHIRT
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    WOMENS
                  </a>
                  <div className="dropdown-menu">
                    {" "}
                    <a href="/" className="dropdown-item">
                      WOMEN'S COATS
                    </a>{" "}
                    <a href="/" className="dropdown-item">
                      WOMEN'S FASHION
                    </a>{" "}
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    BAGS
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      PRUSES, PUCHES & WALLETS
                    </a>
                    <a href="/" className="dropdown-item">
                      PREMIUM GRADE BAGS
                    </a>
                    <a href="/" className="dropdown-item">
                      BACKPACKS, SUITCASES AND TRAVEL
                    </a>
                    <a href="/" className="dropdown-item">
                      A+ GRADE BAGS
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    ACCESSORIES
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      BATHROES
                    </a>
                    <a href="/" className="dropdown-item">
                      BOXERS
                    </a>
                    <a href="/" className="dropdown-item">
                      BRACELETS
                    </a>
                    <a href="/" className="dropdown-item">
                      EARRINGS
                    </a>
                    <a href="/" className="dropdown-item">
                      HATS/CAPS
                    </a>
                    <a href="/" className="dropdown-item">
                      NECKLACES
                    </a>
                    <a href="/" className="dropdown-item">
                      RINGS
                    </a>
                    <a href="/" className="dropdown-item">
                      SOCKS
                    </a>
                    <a href="/" className="dropdown-item">
                      SUN GLASSES
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    SHOES
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      WOMEN'S SNEAKERS
                    </a>
                    <a className="dropdown-item" href="/">
                      WOMEN'S BOOTS - PLATFORM
                    </a>
                    <a href="/" className="dropdown-item">
                      HEELS - SLIDERS - SANDALS
                    </a>
                    <a href="/" className="dropdown-item">
                      MEN'S SNEAKERS
                    </a>
                    <a href="/" className="dropdown-item">
                      MEN'S SMART SHOES
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    WATCHES
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="/">
                      WOMEN'S WATCHES
                    </a>
                    <a className="dropdown-item" href="/">
                      MEN'S WATCHES
                    </a>
                  </div>
                </div>
              </div>
              <form className="d-flex">
                <div className="input-group">
                  <SearchContainer>
                    <Input className="form-control" />
                    <Search style={{ color: "gray", fontSize: 16 }} />
                  </SearchContainer>
                  {/* <input type="text" className="form-control" placeholder="Search" />
                        <button type="button" className="btn btn-secondary"><i className="bi-search"></i></button> */}
                </div>
              </form>
              <div className="navbar-nav">
              <Link to="/register" style={{textDecoration: 'none'}}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to="/login" style={{textDecoration: 'none'}}>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
                <MenuItem>
                  <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </MenuItem>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
    // <>
    //   <div className="dropdown">
    //     <button className="dropbtn">MENS</button>
    //     <div className="dropdown-content">
    //       <a href="/">MENS COATS/JACKETS</a>
    //       <a href="/">MENS HOODIES/SWEAT SHIRTS</a>
    //       <a href="/">MENS PREMIUM GRADE T-SHIRTS</a>
    //       <a href="/">MENS JUMPERS</a>
    //       <a href="/">MENS classNameIC T-SHIRTS</a>
    //       <a href="/">MENS POLO SHIRT</a>
    //       <a href="/">SHIRT</a>
    //     </div>
    //   </div>
    //   <div className="dropdown">
    //     <button className="dropbtn">WOMENS</button>
    //     <div className="dropdown-content">
    //       <a href="/">WOMEN'S COATS</a>
    //       <a href="/">WOMEN'S FASHION</a>
    //     </div>
    //   </div>
    //   <div className="dropdown">
    //     <button className="dropbtn">BAGS</button>
    //     <div className="dropdown-content">
    //       <a href="/">PRUSES, PUCHES & WALLETS</a>
    //       <a href="/">PREMIUM GRADE BAGS</a>
    //       <a href="/">BACKPACKS, SUITCASES AND TRAVEL</a>
    //       <a href="/">A+ GRADE BAGS</a>
    //     </div>
    //   </div>
    //   <div className="dropdown">
    //     <button className="dropbtn">ACCESSORIES</button>
    //     <div className="dropdown-content">
    //       <a href="/">BATHROES</a>
    //       <a href="/">BOXERS</a>
    //       <a href="/">BRACELETS</a>
    //       <a href="/">EARRINGS</a>
    //       <a href="/">HATS/CAPS</a>
    //       <a href="/">NECKLACES</a>
    //       <a href="/">RINGS</a>
    //       <a href="/">SOCKS</a>
    //       <a href="/">SUN GLASSES</a>
    //     </div>
    //   </div>
    //   <div className="dropdown">
    //     <button className="dropbtn">SHOES</button>
    //     <div className="dropdown-content">
    //       <a href="/">WOMEN'S SNEAKERS</a>
    //       <a href="/">WOMEN'S BOOTS - PLATFORM</a>
    //       <a href="/">HEELS - SLIDERS - SANDALS</a>
    //       <a href="/">MEN'S SNEAKERS</a>
    //       <a href="/">MEN'S SMART SHOES</a>
    //     </div>
    //   </div>
    //   <div className="dropdown">
    //     <button className="dropbtn">WATCHES</button>
    //     <div className="dropdown-content">
    //       <a href="/">WOMEN'S WATCHES</a>
    //       <a href="/">MEN'S WATCHES</a>
    //     </div>
    //   </div>
    // </>
  );
};

export default Menu;
