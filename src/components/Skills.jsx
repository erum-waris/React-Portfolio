import React from "react";
import image1 from "/assets/skills/bootstrape.jpg";
import image2 from "/assets/skills/css.jpg";
import image3 from "/assets/skills/tailwind.jpg";
import image4 from "/assets/skills/ts.jpg";
import image5 from "/assets/skills/html.png";
import image6 from "/assets/skills/js.png";
import image7 from "/assets/skills/next-js.png";
import image8 from "/assets/skills/react-js.png";
import image9 from "/assets/skills/python_logo.png";


function SkillsCard({ image,level }) {
  return (
    <div className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 bg-transparent rounded-lg overflow-hidden flex flex-col justify-between items-center border-2 border-purple-400 text-center ">
      <div className="relative mt-6 w-4/5 h-44">
        <img
          src={image}
          alt="skills images"
          object-fit="cover"
          className="shadow-[0_0_8px_4px_rgb(160,84,190)] rounded-md w-[100%] h-[100%]"
        />
      </div>
      <div className="w-60 h-8 bg-slate-400 mt-8 mb-8 shadow-[0_0_8px_4px_rgb(160,84,190)] rounded-full text-white font-bold text-xl"> {level}%</div>
    </div>
  );
}

const skills = [
  { image: image1,level:20 },
  { image: image2, level:60 },
  { image: image3,  level:70 },
  { image: image4,  level:60 },
  { image: image5,  level:80 },
  { image: image6,  level:60 },
  { image: image7,  level:60 },
  { image: image8, level:10 },
  { image: image9, level:70 },
];

const Skills = () => {
  return (
    <div className="container mx-auto mb-8 p-8">
      <h2 className="lg:text-4xl md:text-4xl text-3xl font-bold text-center mb-24 text-white">
        My{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-pink-500 to-blue-400 font-serif lg:text-5xl md:text-5xl text-4xl">
          Skills
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <SkillsCard key={index} image={skill.image}  level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
