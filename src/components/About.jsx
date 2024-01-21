import React from 'react';
import banner4 from '../assets/banner4.jpg';

function about() {
    
  return (
      <section className='flex items-center bg-stone-100 xl:h-screen font-poppins' id='about'>
        <div className='justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6'>
          <div className='flex flex-wrap '>
            <div className='w-full px-4 mb-10 lg:w-1/2 lg:mb-0'>
              <div className='relative lg:max-w-md'>
                <img className='relative z-10 object-cover w-full rounded-xl h-96'
                src={banner4} alt="aboutimage" />
                <div className='absolute bottom-0 right-0 z-10 p-8 bg-white border-4 border-orange-400 rounded shadow lg:-mb-8 lg:-mr-11 sm:p-8'>
                  <p className='text-md font-semibold md:w-72'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="orange" className='absolute top-0 left-0 w-10 h-10 text-orange-400 opacity-10'
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                                    </path>
                     </svg> Successfully Providing business solutions from 25 years
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full px-6 mb-10 lg:w-1/2 lg:mb-0'>
              <div className='pl-4 mb-6 border-l-4 border-orange-400 '>
              <span className='text-sm text-gray-600 uppercase'>Who we are?</span>
                        <h1 className='mt-2 text-3xl font-black text-gray-700 md:text-5xl'>
                            About Us
                        </h1>
              </div>
              <p className="mb-6 text-base leading-7 text-gray-500">
              At RichwayElectricals, our mission is to redefine the landscape of electrical solutions by providing efficient, sustainable, and scalable power systems. We are committed to meeting the ever-evolving needs of our clients while contributing to a greener and more connected world.
              <br />
              Whether you are a homeowner, business owner, or part of a larger infrastructure project, <span className='text-orange-400'>RichwayElectricals</span> invites you to join us on the journey towards a brighter and more sustainable future. Together, let's power tomorrow's world.
               </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default about