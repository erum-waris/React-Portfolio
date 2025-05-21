import Avion from "/assets/avion.png"
import project2 from "/assets/project-2.png"
import parenting from "/assets/parenting.png"
import blogs from "/assets/blogs.png"
import library from "/assets/library.png"
import landingpage from "/assets/landingpage.png"
import quranacademy from "/assets/quranacademy.png"
import creative from "/assets/creative.png"
import quranapp from "/assets/quranapp.png"

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
    title: "Avion Market Place",
    description:
      "I have created Avion Ecommerce website using Next.js and Typescript so check it out and share your feedback",
    image:Avion,
    url: "https://figma-ui-ux-hackathon-mu.vercel.app",
  },
  {
    title: "Quran Academy ",
    description:
      "This is a Quran Academy website My Client's project I have created this website using Next.js and Typescript so check it out and share your feedback",
    image: quranacademy,
    url: "https://www.quranacademy.website"
  },
  {
    title: " Clothing E Commerce Website ",
    description:
      "Here is E Commerce website with Next js so check it out and share your feedback",
    image: project2,
    url: "https://e-commerce-website-pied-chi.vercel.app/",
  },
  {
    title: "Blog Website",
    description:
      "This is a Blog website I have created this website using Next.js & integrated Sanity CMS so check it out and share your feedback",
    image:parenting,
    url: "https://blog-website-gold-tau.vercel.app",
  },
  {
    title: "Parenting Blogs Website",
    description:
      "This is a Parenting Blog website I have created this website using Next.js & integrated Sanity CMS so check it out and share your feedback",
    image:blogs,
    url: "https://milestone-3-blog-website-two.vercel.app",
  },
  {
    title: "Creative Technologist",
    description:
      "This is a Creative Technologist website I have created this website using Figma Design, Next.js & Typescript so check it out and share your feedback",
    image: creative,
    url: "https://assignmen-4-figma.vercel.app/",
  },
  {
    title: "Library Management System",
    description:
      "This is a Library Management System I have created this website using Python and streamlit for UI so check it out and share your feedback",
    image: library,
    url: "https://librarymanagerpython.streamlit.app",
  },
  {
    title: "Landing Page",
    description:
      "I have created landing page using Next.js & Typescript so check it out and share your feedback", 
    image:landingpage,
    url: "https://assignment-5-navbar-menu.vercel.app",
  },
  {
   title: "Quran App",
    description:
      "This is a Quran App I have created this website using Python and streamlit for UI so check it out and share your feedback",
    image: quranapp,
    url: "https://quranapppythongit-ntsne7q8bfeetqibxfej8s.streamlit.app",
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


