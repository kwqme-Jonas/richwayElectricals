import React from 'react'
import { Footer } from 'flowbite-react';


function footer() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            name="RichwayElectricals"
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="RichwayElectricals™" year={2024} />
      </div>
    </Footer>
  )
}

export default footer