import React from 'react'

const Navigation = () => {
  return (
   <nav className='flex justify-between justify-items-center bg-cyan-500 shadow-cyan-300 h-15 shadow-2xl'>
    <div className='h-13 w-18 '>
        <img src='./images/Frame.png' alt='companylogo' className='pl-3'></img>
    </div>
    <ul className='flex pt-3.5 font-semibold '>
        <li className='pr-5 '>Home</li>
        <li className='pr-5 '>About</li>
        <li className='pr-5 '>Contact</li>
    </ul>
   </nav>
      
  )
}

export default Navigation