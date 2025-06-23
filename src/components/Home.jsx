import { Typewriter } from 'react-simple-typewriter';



const Home = () => {
  return (
     <section id='home' className=' min-h-screen pt-20'>
        <h1 className=" text-3xl md:text-5xl font-bold text-white text-center mt-40">
      I'm a{' '}
      <span className="text-blue-500">
        <Typewriter
          words={['Elene Labartkava', 'Frontend Developer', 'React Enthusiast', ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>

    <div className='flex items-center justify-center gap-5 md:gap-10 mt-10 '>
        <a href="#projects"  className='bg-blue-500/80 py-2 px-3  rounded-full text-black font-bold hover:bg-blue-600/90 '>View Projects</a>
        <a href="#contact"  className='bg-white/80 py-2 px-4  rounded-full text-black font-bold hover:bg-white/90 '>Contact Me</a>
    </div>

     </section>
  )
}

export default Home
