


import React from 'react'
import project1 from "/assets/project-1.png"
import project2 from "/assets/project-2.png"
import project3 from "/assets/project-3.png"
import project4 from "/assets/project-4.png"
import project5 from "/assets/project-5.png"
import project6 from "/assets/project-6.png"
import project7 from "/assets/project-7.png"
import project8 from "/assets/project-8.png"
import project9 from "/assets/project-9.png"

function ProjectsCard({
  title,
  description,
  image,
  url,
}) {
  return (
    <div className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 bg-transparent rounded-lg overflow-hidden flex flex-col justify-between items-center border-2 border-purple-400 text-center ">
    <div className="relative mt-6 w-4/5 h-44">
    <img
      src={image} 
      alt={title}
      object-fit="cover"
      className="shadow-[0_0_8px_4px_rgb(160,84,190)] rounded-md w-[100%] h-[100%]"
    />
    </div>
    <div className="p-4">
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 mb-6 mt-0">{title}</h3>
      <p className="text-white mb-4 font-serif">{description}</p>
      <a
        href={url}
        target="_blank"
        className="px-1 py-1 rounded-full  bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 "> <span className=" border-2 border-transparent hover:scale-150 hover:border-[#d62c8f] bg-[#112651] rounded-full px-3 py-2 text-white">Live Demo</span>
        </a>
       
    </div>
  </div>
  )
}



const projects = [
  {
    title: "Next js Calculator",
    description:
      "I have created website using html css and javascript so check it out and share your feedback",
    image: project1,
    url: "https://calculator-next-js-six.vercel.app/ ",
  },
  {
    title: "Clothing E Commerce Website ",
    description:
      "Here is E Commerce website with Next js so check it out and share your feedback",
    image: project2,
    url: "https://e-commerce-website-pied-chi.vercel.app/"
  },
  {
    title: " E Commerce Book Store ",
    description:
      "Here is Book Store ECommerce website Project live link below click there and check it",
    image: project3,
    url: "https://xounity-assignment-2.vercel.app/",
  },
  {
    title: "Periodic Table",
    description:
      "I made this Periodic Table Using HTML & CSS Check it from Live link below",
    image:project4,
    url: " https://html-css-assignments-omega.vercel.app/",
  },
  {
    title: "Quiz App",
    description:
      "I made this CLI Based Quiz App with Typescript & Node js Check it From GitHub Source code",
    image:project8,
    url: "https://github.com/erum-waris/Quizz_app.git",
  },
  {
    title: "Easypaisa App",
    description:
      "I have Created CLI based an Easypaisa App Using Typescript and Node js Check it on GitHub Source code",
    image: project9,
    url: "https://github.com/erum-waris/EasyPaisaApp.git",
  },
  {
    title: "Simple Website",
    description:
      "I have created a simple website Using HTML & CSS Here is Live Link check it and share your feedback",
    image: project5,
    url: " https://html-css-assignments-o94x.vercel.app/",
  },
  {
    title: "Book Website Landing Page",
    description:
      "I have created Book website Landing Page Here is a Live link below",
    image:project6,
    url: "https://xounity-assignments.vercel.app/",
  },
  {
    title: "Static Resume",
    description:
      "I Have created Static Resume Using HTML CSS and Typescript Here is a live link below",
    image: project7,
    url: "https://static-resume-xi-roan.vercel.app/",
  },
];
 
const Projects = () => {
  return (
    <div className="container mx-auto mb-8 p-8 ">
      <h2 className="lg:text-4xl md:text-4xl text-3xl  font-bold text-center mb-24 text-white">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
          Projects
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
        {projects.map((project ,index) => (
          
          
          <ProjectsCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            url={project.url}
          />
          
        
        ))}
        </div>
    </div>
  );
}; 

export default Projects;


// https://calculator-next-js-six.vercel.app/ calculator live link
// https://vercel.com/erum-waris-projects/e-commerce-website website
// https://static-resume-xi-roan.vercel.app/ static resume
// https://vercel.com/erum-waris-projects/xounity-assignment-2 qasim ali shah live link
// https://html-css-assignments-o94x.vercel.app/ Ai Assignment
// https://vercel.com/erum-waris-projects/xounity-assignments book website live link
// https://vercel.com/erum-waris-projects/html-css-assignments periodic table live link
