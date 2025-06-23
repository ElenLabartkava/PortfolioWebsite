import React from 'react'
import video from './assets/video/bgvideo.mp4'

const Background = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
    <video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src={video} type="video/mp4" />
     
    </video>
  </div>
  )
}

export default Background
