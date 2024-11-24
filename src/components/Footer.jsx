import React from 'react'
import { Footer } from 'flowbite-react';


function footer() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
        </div>
        <Footer.Copyright by="RichwayElectricals™" year={2024} />
      <p className='text-gray-500 leading-tight'>Developed By <a href="https://x.com/QuameJnass"><span className='text-orange-400'>JonasDonkor </span></a></p>
      </div>
    </Footer>
  )
}

export default footer