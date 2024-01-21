import { Carousel } from 'flowbite-react';
import React from 'react';
import banner1 from '../assets/banner1.jpg';




function Home() {
  return (
    <div className='bg-neutralSilver'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
            <Carousel className='w-full mx-auto'>
                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                 <div>
                    <img src={banner1} alt="" />
                 </div>
                 {/* hero text*/}
                 <div className='md:w-1/2'>
                    <h1 className='text-4xl font-semibold text-neutraDlGrey md:w-3/4 leading-snug'>Welcome To RichwayElectricals <span className='text-orange-400 leading-snug lg:top-2'>Powering Tomorrow's World</span></h1>
                    <p className='text-gray-500 text-base mb-8 top-2'>
                    Empowering Tomorrow, Illuminating Today: Your Source for Cutting-Edge Electrical Solutions
                    </p>
                 </div>
                </div>
            </Carousel>
        </div>
    </div>
  )
}

export default Home