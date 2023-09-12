import React, { useState } from "react";
// import '../../firstsheet/index.css'
// import htmlsvg from '../../Images/svg/html.6e7b1b463015c056aeb9a624c8dc2876.svg'
// import csssvg from '../../Images/svg/css3.9cecabbf6ce67609c48bc4f280a11002.svg'
// import jssvg from '../../Images/svg/javascript.svg'
// import Reactsvg from '../../Images/svg/reactjs.svg'
// import Tailwindsvg from '../../Images/svg/tailwind.79614a5f61617ba49a0891494521226b.svg'
// import scss from '../../Images/svg/scss.svg'
// import figma from '../../Images/svg/figma.svg'
// import bootstrap from '../../Images/svg/bootstrap.svg'
// import redux from '../../Images/svg/redux.svg'
// import git from '../../Images/svg/git.svg'
// import mongodb from '../../Images/svg/mongodb.png'
// import node from '../../Images/svg/nodejs.svg'

const Test2 = () => {
  const iconData = [
    // { src: jssvg, title: "Java Script", description: "Dynamic" },
    // { src: Reactsvg, title: "React", description: "Component-Based" },
    // { src: htmlsvg, title: "HTML5", description: "Markup" },
    // { src: csssvg, title: "CSS3", description: "Styling" },
    // { src: Tailwindsvg, title: "Tailwind CSS", description: "Utility-First" },
    // { src: scss, title: "SCSS", description: "Stylesheets" },
    // { src: figma, title: "Figma", description: "Design" },
    // { src: bootstrap, title: "Bootstrap", description: "Framework" },
    // { src: redux, title: "Redux", description: "State Management" },
    // { src: git, title: "Git", description: "Version Control" },
    // { src: mongodb, title: "MongoDB", description: "NoSQL Database" },
    // { src: node, title: "Node", description: "JavaScript Runtime" },
  ];

  const [iconname, setIconname] = useState({
    title: '',
    description: '' 
  });
  
  const [isTouchActive, setIsTouchActive] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  
  const handleTouchStart = (index) => {
    setIsTouchActive(true);
    setActiveItemIndex(index);
  }

  const handleTouchEnd = () => {
    setIsTouchActive(false);
    setActiveItemIndex(null)
  }

  const handleclick = (title,description) =>{
    console.log("clicked",title)
    setIconname(prevState => ({
      ...prevState,
      title: title, 
      description: description
    }));
  }

  const Randomdelay = () =>{
    return Math.floor(Math.random()*2)+1  
  }
  return (
    <div className="pt-14  md:overflow-x-hidden">
      <div className=" flex md:hidden justify-center items-center pb-2"> Tech Stack</div>
    <div className="flex  ">
      <div className="md:font-semibold  md:medium sm:small flex  ">
        <div className="hidden md:flex tech">
          
       <div className="pt-0 md:pt-2 pb-10 md:pb-0"> Tech Stack </div>
        </div><span className="md:mx-5 mx-1 mr-2 w-[10px] h-12 border-r md:border-r border-black hidden md:flex tech "></span>
        <div class="logos relative  ">
          
        <ul className="md:flex gap-2 items-center text-center align-middle justify-center md:gap-5 icon-list hidden">
  {iconData?.map((icon, index) => (<>
 
    <li key={index} className="icon-item" style={{ animationDelay: `${index * 0.3}s` }}
    >
      <div className="icon-wrapper relative">
      <div className=" background  bg-gray-400 bg-opacity-40 backdrop-blur-md md:p-4 rounded-lg"></div>
        <img
          className="h-10 w-10 icon"
          src={icon.src}
          title={icon.title}
          alt="skill-icon"
        />
       
        <div className="title">
          <div className="grid grid-cols-1 justify-center">
           <div className="name text-[.8rem]">{icon.title}</div>
          <div className="description text-[.6rem] font-extralight ">{icon.description}</div>
          </div>
        </div>
      </div>
    </li>
    </>
  ))}
</ul>
<div>
  <div className="md:hidden block">
      <ul className="flex gap-2 items-center text-center align-middle justify-center md:gap-5 icon-list ">
        {iconData?.map((icon, index) => (
          <li
            key={index}
            className={`icon-items ${activeItemIndex === index ? 'active' : ''}`}
            style={{ animationDelay: `${index * 0.3}s` }}
            onTouchStart={() => handleTouchStart(index)}
            onTouchEnd={handleTouchEnd}
          >
            <div className="icon-wrapper relative" onClick={() => handleclick(icon.title, icon.description)}>
              <img
                className="h-10 w-10 icon"
                src={icon.src}
                title={icon.title}
                alt="skill-icon"
              />
            </div>
          </li>
        ))}
      </ul>
      {isTouchActive && (
        <div className={` grid justify-center items-center pt-4 `}>
          <div className="flex justify-center items-center">
            <div className="">{iconname.title}</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="small">{iconname.description}</div>
          </div>
        </div>
      )}
    </div>
    </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Test2;
