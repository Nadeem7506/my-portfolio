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
        <ul className="w-96 flex justify-center  items-center text-white bg-neutral-50/15 hover:text-gray-300 cursor-pointer transition-all duration-200 ease-in-out px-6 capitalize justify-self-center gap-5 p-3 mt-6 border-3 rounded-2xl" >
      {
        Links.map((item,index) => {
      return <li className=" hover:text-gray-300" key={index}>{item.name} </li>
        })
      }
        </ul>
  );
};
