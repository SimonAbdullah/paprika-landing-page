import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import React, { Component } from 'react'
import Link from "next/link";
import Services from '../pages/Services'
import Carousel from '../pages/Carousel'
import CardDeck from '../pages/CardDeck'
import GridTable from '../pages/GridTable'
import ContactUs from '../pages/ContactUs'
import Paprica from '../pages/Paprica'

export default function Home() {
  return (
    <>
    <Layout/>
    <Carousel/>
    <Services/>
    <CardDeck/>
    <GridTable/>
    <ContactUs/>
    <Paprica/>
    </>
  );
}



