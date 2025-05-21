import React from 'react'
import event from "/assets/event.png"
import certificate from "/assets/englishcerti.png"
import frontend_xounity from "/assets/frontend_xounity.png"
function About() {
  return (
    <div className="flex flex-col font-sans p-2 md:p-8  mt-10 ">
      <div className='flex flex-col justify-center items-center sm:text-center w-full border-4 rounded-md px-2 py-2 border-double border-purple-600 mb-8 mt-8 transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(170,81,197)] hover:scale-105'>
      <span className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600  via-pink-500 to-purple-500 mb-7 transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_8px_rgba(182,27,79)] rounded-full border-4 border-blue-500 animate-superman p-6 mt-5">ABOUT ERUM

      </span>
      <p className="lg:text-2xl text-base sm:text-xl m-5 text-white ">
      As a frontend web developer, I've developed a solid foundation in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Sanity CMS & Python Programming. With a deep interest in building engaging and user-friendly interfaces, I continuously work on houning my skills to create seamless web experiences. I am always eager to explore new frameworks and tools that enhance the user experience.

In addition to frontend development, I am also captivated by the dynamic field of artificial intelligence. I see AI as a transformative technology that intersects with many aspects of development and problem-solving. My curiosity drives me to stay informed about the latest advancements and explore how AI can be integrated into web technologies.

As a passionate learner, I thrive on the excitement of discovery and innovation. Each step in this journey fuels my enthusiasm for mastering new concepts and applying them in creative ways. The ever-evolving nature of technology inspires me to push boundaries and grow as a developer.
      </p>
      </div>
      <div className="flex flex-col justify-center items-center sm:text-center w-full border-4 rounded-md px-2 py-2 border-double border-purple-600 mb-8 sm:mt-8 transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(170,81,197)] hover:scale-105">
      <span className="text-4xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600  via-pink-500 to-purple-500 mb-7 transition-shadow duration-300 ease-in hover:shadow-[0_0_8px_8px_rgba(182,27,79)] rounded-full border-4 border-blue-500 animate-superman p-6 mt-5">EDUCATION

</span>
            <p className="lg:text-2xl text-base sm:text-xl m-5 text-white ">
            I matriculated in 2010 from Islamia Girls High School with 81% in Science. Currently, I am pursuing my Intermediate education and passed HSC-Part I in 2024 with 86% in Commerce. I also completed an Intermediate Level English Language Course from SKH Online Education.

Now, I am enrolled in the Governor Initiative for Artificial Intelligence, Agentic AI & Robotics AI. In Quarter 1, I learnt TypeScript, in Quarter 2, I learnt Next.js Additionally, I joined the Xounity Online Frontend Bootcamp, where I learnt the basics of HTML, CSS, JavaScript, DOM Manipulation, and React.js, in Quarter 3, I have been learning Python & Now I'm Learning Agentic AI in Quarter 4 .
             
            </p>
            </div>
      
    <div className='grid grid-cols-1 md:grid-cols-2 gap-7 p-4'>
  {/* Image 1 */}
  <div className="max-w-[600px] max-h-[600px] w-full h-auto mx-auto my-4 md:my-10 hover:scale-105 transition-transform duration-300">
    <img 
      src={event} 
      alt="img" 
      className="w-full h-full object-contain border-4 border-blue-500 p-2 hover:shadow-[0_0_10px_10px_rgba(182,27,79)]"
    />
  </div>

  {/* Image 2 */}
  <div className="max-w-[600px] max-h-[600px] w-full h-auto mx-auto my-4 md:my-10 hover:scale-105 transition-transform duration-300">
    <img 
      src={certificate} 
      alt="certificate" 
      className="w-full h-full object-contain border-4 border-blue-500 p-2 hover:shadow-[0_0_10px_10px_rgba(182,27,79)]"
    />
  </div>
</div>
<div className='p-4'>
  <div className="max-w-[600px] max-h-[600px] w-full h-auto mx-auto my-4 md:my-10 hover:scale-105 transition-transform duration-300">
    <img 
      src={frontend_xounity} 
      alt="certificate" 
      className="w-full h-full object-contain border-4 border-blue-500 p-2 hover:shadow-[0_0_10px_10px_rgba(182,27,79)]"
    />
  </div>
</div>
    </div>
  )
}

export default About