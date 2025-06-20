import React from 'react'
import logo from '../assets/icons/logo.png'
import CustomizedSwitches from '../Ui/CustomizedSwitches'

const Header = () => {
  return (
    <div>
        <nav className='container pt-10! flex items-center lg:justify-between space-x-1'>
            <img className='w-[100px]' src={logo} alt="" />

            <div className='flex items-center lg:gap-10 - space-x-3'>

           <CustomizedSwitches/>

           <h3 className='text-lg  g lg:text-2xl '>+998 (55) 500-37-77</h3>
            </div>

        </nav>
    </div>
  )
}

export default Header