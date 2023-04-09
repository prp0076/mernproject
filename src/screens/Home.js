import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Caraousal from '../components/Caraousal'

export default function () {
  return (
    <div>
        <Navbar/>
       <div> <Caraousal/></div>
        <div className='m-3'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <Footer/>
    </div>
  )
}
