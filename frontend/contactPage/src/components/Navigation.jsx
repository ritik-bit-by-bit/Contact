import React from 'react'

const Navigation = () => {
  return (
   <nav className='flex justify-between justify-items-center'>
    <div className='h-17 w-25 '>
        <img src='./images/Frame.png' alt='companylogo' className='pl-3'></img>
    </div>
    <ul className='flex pt-2.5 font-semibold'>
        <li className='pr-3 '>Home</li>
        <li className='pr-3'>About</li>
        <li className='pr-3'>Contact</li>
    </ul>
   </nav>
      
  )
}

export default Navigation