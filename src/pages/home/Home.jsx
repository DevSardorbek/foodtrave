import React from 'react'
import NavbarTop from "../../components/navbar/NavbarTop"
import NavbarBotttom from '../../components/navbar/NavbarBottom'
import Banner from '../../components/banner/Banner'
import Prodact from '../../components/prodact/Prodact'
import Deliver from '../../components/deliver/Deliver'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
        <NavbarTop/>
        <NavbarBotttom/>
        <Banner/>
        <Prodact/>
        <Deliver/>
        <Footer/>
    </>
  )
}

export default Home