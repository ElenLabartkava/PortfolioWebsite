import React, { useRef } from 'react'
import { FaLinkedinIn, FaPhone } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoGithub } from 'react-icons/io'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const formRef = useRef()



const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_ft65xt3', 
    'template_jq4r3go', 
    formRef.current,
    'pCCyfOdr5UiUyat5b' // ჩასვი შენი public key
  )
  .then((result) => {
    console.log('Email sent!', result.text);
    alert("Message sent successfully!");
  }, (error) => {
    console.log('Failed to send email:', error.text);
    alert("Something went wrong.");
  });

  e.target.reset(); // ფორმის გასუფთავება
};
  return (
    <section id='contact' className='min-h-screen pt-30'>
               <div className='w-full container mx-auto px-4 sm:px-6 lg:px-8 '>
               <h1 className='text-center font-bold text-2xl mb-4'>Get In Touch</h1>
               <p className='text-center text-[17px] text-blue-500/70 mb-30'>Have a project in mind or want to collaborate? Feel free to reach out to me through the form below.</p>


               <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-50'>

                {/*left */}
                 <div>

                 <div className="bg-white/5 p-10 rounded-2xl text-white max-w-xl mx-auto shadow-lg">
      <h2 className="text-center font-bold text-2xl mb-10">Contact Information</h2>

      <div className="flex flex-col gap-8">
        {/* Email */}
        <div className="flex items-start gap-4">
          <HiOutlineMail className="text-2xl text-cyan-400 mt-1" />
          <div>
            <h4 className="font-semibold text-lg">Email</h4>
            <a href="mailto:elene.labartkava@gmail.com" className="text-cyan-300 hover:underline">
              elene.labartkava@gmail.com
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <FaPhone className="text-xl text-cyan-400 mt-1" />
          <div>
            <h4 className="font-semibold text-lg">Phone</h4>
            <a href="tel:+995599746624" className="text-cyan-300 hover:underline">
              +995 599-74-66-24
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-start gap-4">
          <GrLocation className="text-xl text-cyan-400 mt-1" />
          <div>
            <h4 className="font-semibold text-lg">Location</h4>
            <p className="text-cyan-300">Tbilisi</p>
          </div>
        </div>
      </div>
    </div>

    <div className="text-white text-center mt-12">
      <h2 className="text-2xl font-bold mb-6">Follow Me</h2>

      <div className="flex justify-center gap-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/elene-labartkava-867835318/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full transition-colors"
        >
          <FaLinkedinIn className="text-white text-2xl" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ElenLabartkava"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-black p-4 rounded-full transition-colors"
        >
          <IoLogoGithub className="text-white text-2xl" />
        </a>
      </div>
    </div>
                  
                 </div>



                {/*right */}


                  
                          <div >
                          <form
  ref={formRef}
  onSubmit={sendEmail}
  className="bg-cyan-400/60  p-8 rounded-2xl shadow-xl w-full max-w-2xl mx-auto text-white"
>
  <div className="mb-4">
    <label className="block mb-2 font-semibold">Your Name</label>
    <input
      type="text"
      name="name"
      placeholder="John Doe"
      required
      className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>

  <div className="mb-4">
    <label className="block mb-2 font-semibold">Your Email</label>
    <input
      type="email"
      name="email"
      placeholder="john@example.com"
      required
      className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>

  <div className="mb-4">
    <label className="block mb-2 font-semibold">Subject</label>
    <input
      type="text"
      name="subject"
      placeholder="Project Inquiry"
      className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    />
  </div>

  <div className="mb-6">
    <label className="block mb-2 font-semibold">Your Message</label>
    <textarea
      name="message"
      rows="5"
      placeholder="Hello, I'd like to talk about..."
      required
      className="w-full px-4 py-2 rounded-md bg-transparent border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-400"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
  >
    Send Message
  </button>
</form>

                          </div>
                 
               </div>
               </div>
    </section>
  )
}

export default Contact
