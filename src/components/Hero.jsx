import { Listcomponents } from "./Listcomponents";

export const Hero = () => {
  return (
    <div class="flex flex-col justify-self-center items-center mt-8">
      <Listcomponents />
      <div className="mt-20">
        <h1 className="text-4xl pb-2 tracking-wide text-center text-white text-shadow-gray-500 text-shadow-lg">Jr. <strong className="text-gray-200">Frontend Engineer</strong></h1>
        <h1 className="text-3xl text-center tracking-wide text-gray-300">Hello, my name is Nadeem chaudhary</h1>
      </div>
      <p className=" text-white text-center w-3/4 mt-7 text-xl">
        I’m a Front‑End Engineer with 1 year of experience building responsive,
        user‑friendly websites using HTML, CSS, JavaScript, and React. I focus
        on clean, efficient code, performance optimization, and creating
        seamless digital experiences while continuously upgrading my skills.
      </p>

      <button class="border-2 rounded-2xl bg-black text-white  px-3 hover:text-gray-300 cursor-pointer mt-5 text-xl py-2  text-shadow-gray-500 text-shadow-md">
        Download cv
      </button>
    </div>
  );
};
