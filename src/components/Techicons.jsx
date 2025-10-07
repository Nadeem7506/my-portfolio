import React from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export const Techicons = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-500 w-16 h-16" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-600 w-16 h-16" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-16 h-16" /> },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500 w-16 h-16" />,
    },
    // { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-16 h-16" /> },
    // { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-16 h-16" /> },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss className="text-sky-400 w-16 h-16" />,
    },
  ];

  return (
    <section className="mt-12">
        <div className="">
        <h1 className="font-bold text-xl  pt-7 underline">Skills</h1>
       </div>
      <div className="flex flex-row  justify-around gap-5 py-2
     my-2 ">
        {skills.map((item, index) => {
          return (
            <div key={index} className=" shadow-2xl shadow-gray-500 bg-gray-300 flex flex-col justify-center items-center px-8 py-4 rounded-3xl hover:scale-105 transition-all ease-in-out duration-300 ">
              {item.icon}
              <p className=" text-black font-bold ">{item.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
