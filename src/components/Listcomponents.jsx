export const Listcomponents = () => {

  const Links = [
    {
      name:"Home",
      link:"#Home"
    },
     {
      name:"skills",
      link:"#skills"
    },
     {
      name:"contact",
      link:"#contact"
    },
     {
      name:"About",
      link:"#About"
    },
     {
      name:"Projects",
      link:"#Projects"
    }
  ]
  return (
    <div class="w-96 flex flex-col justify-center items-center justify-self-center ">
        <ul class="text-white hover:text-gray-300 cursor-pointer transition-all duration-200 ease-in-out px-6 capitalize flex flex-row justify-self-center gap-5 p-3 mt-6 border-3 rounded-2xl" >
          <li>home</li>
          <li>skills </li>
          <li>contact</li>
          <li>About</li>
          <li>Projects</li>
        </ul>
    </div>
  );
};
