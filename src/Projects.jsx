import Card from "./components/Card";


export const Projects = () => {
    const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and contact information with smooth animations.",
    },
    {
      title: "Task Manager App",
      description:
        "A full-stack task manager built using Node.js, Express, and MongoDB — featuring authentication, CRUD operations, and a responsive dashboard.",
    },
    {
      title: "Weather App",
      description:
        "A React-based weather application that fetches live weather data using OpenWeather API, with location-based search and smooth UI animations.",
    },
  ];
  return (
    <section className="relative py-16 px-6 min-h-screen overflow-hidden">
     
      <h1 className="relative text-gray-200 z-10 font-bold text-4xl text-center underline mb-12  drop-shadow-sm">
        Projects
      </h1>

      {/* Card Container */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8">
      {projects.map((item, index) => {
      return  <Card key={index}title={item.title} desc={item.description
} />
      })}
       
      </div>
    </section>
  );
};
