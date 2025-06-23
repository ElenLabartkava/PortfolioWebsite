import React from 'react'



const About = () => {

    const skills = [
        {name:"HTML", imageUrl:"./image/html.png"},
        {name:"CSS", imageUrl:"./image/css.png"},
        {name:"JAVASCRIPT", imageUrl:"./image/js.png"},
        {name:"REACT", imageUrl:"./image/react.png"},
        {name:"TYPESCRIPT", imageUrl:"./image/typescript.png"},
        {name:"git", imageUrl:"./image/git.png"},
    ]
  return (
     <section id='about' >
          <div className="container  mx-auto text-center pt-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-10 ">
              {/* right */}
              <div className='w-1/2'>
              <h2 className='mb-5 text-2xl text-blue-300'>Who I Am</h2>
                          <p className='mb-5 font-bold text-[14apx] bg-blue-600/35 p-9 rounded-full'>I'm a passionate Front-End Web Developer with a keen eye for design and a love for creating seamless user experiences. With a strong foundation in modern web technologies, I transform ideas into beautiful, functional websites that make an impact.</p>
                          <p className=' bg-blue-600/35 p-9 rounded-full'>I work confidently with tools and technologies like React, Git, and Figma, and I'm always exploring new ways to bring ideas to life through code. My long-term goal is to grow as a developer, contribute to real-world projects, and eventually build my own tech-driven business.</p>
              </div>
              {/* left */}
              <div className='w-1/2'>
              <h2 className='text-2xl text-blue-300'> my skills</h2>

              <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-5'>

             

                {
                    skills.map((skill,index) => (
                        <div key={index} className='flex flex-col items-center bg-[rgba(255,255,255,0.05)] rounded-2xl cursor-pointer hover:-translate-y-1.5 transition-all p-6'>
                           
                            <img src={skill.imageUrl} className='w-13 h-10' alt="" />
                           
                            <div className='mt-5'>
                                <p>{skill.name}</p>
                             </div>
                        </div>
                    ))
                }

</div> 

              </div>
          </div>
     </section>
  )
}

export default About
