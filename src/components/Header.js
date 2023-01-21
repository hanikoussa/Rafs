import React, { useState } from "react";
import { NavLink, form } from "react-router-dom";
import cart from "../assets/cart.png";
import wishList from "../assets/wishList.png";
import herfah from "../assets/herfah.jpeg";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar
      expand="lg"
      light
      bgColor="white"
      style={{
        borderBottom: 5,
        borderBottomStyle: "solid",
        borderBottomColor: "#C05528",
      }}
    >
      <MDBContainer fluid>
        {/* 
        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler> */}

        <MDBNavbarNav className="d-flex justify-content-start">
          <MDBNavbarItem>
            <MDBNavbarLink active aria-current="page" href="/">
              Home
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/about">About</MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>
        <MDBNavbarNav></MDBNavbarNav>
        <MDBNavbarBrand href="/" className="d-flex justify-content-center">
          <img
            src={herfah}
            alt="herfah"
            style={{
              width: 40,
            }}
          />
        </MDBNavbarBrand>
        <MDBNavbarNav className="d-flex justify-content-end">
          <MDBNavbarItem>
            <MDBNavbarLink href="/wish">
              <img
                src={wishList}
                alt="wish"
                style={{
                  width: 20,
                }}
              />
            </MDBNavbarLink>
          </MDBNavbarItem>
          <MDBNavbarItem>
            <MDBNavbarLink href="/cart">
              <img
                src={cart}
                alt="cart"
                style={{
                  width: 25,
                }}
              />
            </MDBNavbarLink>
          </MDBNavbarItem>
        </MDBNavbarNav>

        <MDBNavbarNav className="d-flex justify-content-end">
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
              width="30px auto"
            />
            <MDBBtn
              style={{
                color: "#C05528",
                borderColor: "#C05528",
                backgroundColor: "white",
              }}
            >
              Search
            </MDBBtn>
          </form>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>

    // <nav
    //   className="navbar navbar-light navbar-expand "
    //   style={{
    //     borderBottom: 5,
    //     borderBottomStyle: "solid",
    //     borderBottomColor: "#C05528"
    //   }}
    // >
    //   <ul className="navbar-nav mr-auto">
    //     <li className="nav-item pull-left">
    //       <NavLink exact to="/" className="nav-link" activeClassName="active">
    //         Home
    //       </NavLink>
    //     </li>
    //     <li className="nav-item pull-left">
    //       <NavLink
    //         exact
    //         to="/about"
    //         className="nav-link"
    //         activeClassName="active"
    //       >
    //         About Us
    //       </NavLink>
    //     </li>
    //     <li className="nav-item pull-left">
    //       <NavLink
    //         to="/add-product"
    //         className="nav-link"
    //         activeClassName="active"
    //       >
    //         Add Product
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink to="/" className="nav-link">
    //         <img
    //           src={herfah}
    //           alt="herfah"
    //           style={{
    //             width: 40
    //           }}
    //         />
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink to="/cart" className="nav-link" activeClassName="active">
    //         <img
    //           src={cart}
    //           alt="cart"
    //           style={{
    //             width: 25
    //           }}
    //         />
    //       </NavLink>
    //     </li>
    //     <li className="nav-item">
    //       <NavLink to="/wishList" className="nav-link" activeClassName="active">
    //         <img
    //           src={wishList}
    //           alt="wish"
    //           style={{
    //             width: 20
    //           }}
    //         />
    //       </NavLink>
    //     </li>
    //     <li className="nav-item pull-right">
    //       <form class="form-inline my-2 my-lg-0">
    //         <input
    //           class="form-control mr-sm-2"
    //           type="search"
    //           placeholder="Search"
    //           aria-label="Search"
    //         />
    //         <button
    //           class="btn my-2 my-sm-0"
    //           type="submit"
    //           style={{
    //             color: "#C05528",
    //             borderBlockColor: "#C05528"
    //           }}
    //         >
    //           Search
    //         </button>
    //       </form>
    //     </li>
    //   </ul>
    //   <ul className="navbar-nav"></ul>
    // </nav>
  );
}
