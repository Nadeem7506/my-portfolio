import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export const Techicons = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 w-12 h-12" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-12 h-12" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-12 h-12" /> },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500 w-12 h-12" />,
    },
    // { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-12 h-12" /> },
    // { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-12 h-12" /> },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-sky-400 w-12 h-12" />,
    },
  ];

  return (
    <section>
        <h1 className="font-bold">Skills</h1>
      <div className="flex flex-row  justify-around gap-5 py-2 my-2">
        {skills.map((item, index) => {
          return (
            <div key={index} className=" bg-gray-300 flex flex-col justify-center items-center px-4 py-3 rounded-3xl shadow-2xl ">
              {item.icon}
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
