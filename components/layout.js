import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import {Navbar,Nav,Carousel, CardGroup, Container} from 'react-bootstrap';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HouseDoorFill } from 'react-bootstrap-icons';



//const name = "خدماتنا";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <>
    <Navbar expand="md" bg="transparent">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="#home"><strong>تسجيل الدخول</strong></Nav.Link>
        <Nav.Link href="#home"><strong>إحصائيات</strong></Nav.Link>
        <Nav.Link href="#link"><strong>أسعار</strong></Nav.Link>
        <Nav.Link href="#home"><strong>خدمات</strong></Nav.Link>
       <HouseDoorFill color="red" size={30} />
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </>
  );
}
