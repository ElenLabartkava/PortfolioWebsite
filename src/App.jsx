import Background from "./Background"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Footer from "./pages/Footer"
import Navbar from "./pages/Navbar"


function App() {
  

  return (
    <>

<div className="relative min-h-screen text-white">
      <Background/>
      <Navbar />
      <main className="pt-20 relative z-10">
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    

     
    </>
  )
}

export default App
