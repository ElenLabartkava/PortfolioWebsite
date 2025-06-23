import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[rgba(255,255,255,0.05)]  mt-12 pt-8'>
    <div className="flex flex-col justify-between items-center gap-4">
        <p className='text-white text-sm'> Copyright © {new Date().getFullYear()}  </p>
        <p className="text-white text-sm mb-5">  Elene.</p>
    </div>
 </div>
  )
}

export default Footer
