import React from 'react'
import image1 from '../assets/images/E-commerce.png'
import image2 from '../assets/images/blogy.png'
import image3 from '../assets/images/weather.png'
import image4 from '../assets/images/EdgeAI.png'
import image5 from '../assets/images/bussineswebsite.png'
import image6 from '../assets/images/coffeeWebsite.png'
const Projects = () => {
    const projects = [
   
  
        {
          id: 1,
          title: "E-commerce Website",
          description: "A clean and modern online shopping platform with user-friendly UI.",
          technplogies: ["typescript", "React", "CSS Modules",],
          imagePrompt:
              "A modern e-commerce website interface with clean design, showing product grid layout with minimalist product cards...",
            imageUrl: image1,
            link: "https://github.com/ElenLabartkava/e-commerce",
          },
      
      
          {
            id: 2,
            title: "Blog Platform",
            description: "A responsive blog platform with clean typography and category filters.",
            technplogies: ["HTML", "CSS", "JS"],
            imagePrompt:
                "A minimal blog interface with category filters, featured posts, and clean layout...",
              imageUrl: image2,
              link: "https://github.com/ElenLabartkava/Blogy",
            },
      
            {
              id: 3,
              title: "Weather App",
              description: "Weather forecast app with geolocation and real-time API integration.",
              technplogies: ["HTML", "CSS", "JS"],
              imagePrompt:
                  "A modern weather app UI with animated icons, temperature, and weekly forecast...",
                imageUrl: image3,
                link: "https://github.com/ElenLabartkava/weather-app",
              },

              {
                id: 4,
                title: "Edge AI Landing Page",
                description: "A sleek landing page for an AI company, featuring animated UI, responsive design, and modern aesthetic.",
                technplogies: ["React", "TypeScript", "Tailwind CSS",  ],
                imageUrl: image4, 
                link: "https://github.com/ElenLabartkava/EdgeAI"
              },

              {
                id: 5,
                title: "AI Landing Page",
                description: "A modern business website for AI services with animated elements.",
                technplogies: ["Vite", "React", "Tailwind CSS" ],
                imageUrl: image5,
                link: "https://github.com/ElenLabartkava/EdgeAI"
              },

              {
                id: 6,
                title: "Coffee Landing Page",
                description: "A stylish and cozy coffee shop website with rich visuals, smooth scrolling, and responsive layout.",
                technplogies: ["HTML", "CSS", "JavaScript"],
                imageUrl: image6, 
                link: "https://github.com/ElenLabartkava/CoffeWebsite"
              }
              
      
         
      ]
  return (
   <section id='projects' className='min-h-screen pt-30'>

    <div className='w-full container mx-auto px-4 sm:px-6 lg:px-8 '>
        <h1 className='mb-10 text-center font-bold text-2xl'>Projects</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  '>
            {
                projects.map((project) => (
                    <div key={project.id}className='bg-[rgba(255,255,255,0.05)] rounded-2xl cursor-pointer hover:-translate-y-1.5 transition-all p-6'>
                        <img src={project.imageUrl} className='rounded-[10px]'  alt="" />

                        <div>
                            <h3 className='text-[20px] font-bold mt-4'>{project.title}</h3>
                            <p className='mt-3 font-bold text-[17px] '>{project.description}</p>
                        </div>

                        <div className='mt-5  flex items-center gap-5 mb-5'>
                            {
                                project.technplogies.map((tech, index) => (
                                    <span key={index} className='bg-[rgba(255,255,255,0.1)]  cursor-pointer hover:-translate-y-1.5 transition-all  text-blue-300 p-4 rounded-full'>{tech}</span>
                                ))
                            }
                        </div>

                        <a href={project.link}   className='text-[rgb(0,255,225)] hover:text-[rgb(0,255,255)] transition-colors duration-300' target="_blank" rel="noopener noreferrer">  View Code</a>

                        


                    </div>
                ))
            }
        </div>
    </div>

   </section>
  )
}

export default Projects
