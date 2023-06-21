import React from "react";
import htmlsvg from '../Images/svg/html.6e7b1b463015c056aeb9a624c8dc2876.svg'
import csssvg from '../Images/svg/css3.9cecabbf6ce67609c48bc4f280a11002.svg'
import jssvg from '../Images/svg/javascript.de4c2594613e34b15666206bbede7327.svg'
import Reactsvg from '../Images/svg/react.afac9c43724070bf6674f2692b7356a9.svg'
import Tailwindsvg from '../Images/svg/tailwind.79614a5f61617ba49a0891494521226b.svg'

const Stack = () => {
  return (
    <div className="flex mt-14">
      <div className="font-semibold flex">
        Tech Stack <span className="px-5">|</span>
        <div class="logos">
          <ul className="flex gap-5">
            <li>
              <img
                className="h-10 w-10"
                src={htmlsvg}
                title="HTML5"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
               className="h-10 w-10"
                src={csssvg}
                title="CSS3"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
               className="h-10 w-10"
                src={jssvg}
                style={{mixBlendMode:'overlay'}}
                title="Java Script"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
               className="h-10 w-10"
                src={Reactsvg}
                title="React"
                alt="skill-icon"
              />
            </li>
            <li>
              <img
               className="h-10 w-10"
                src={Tailwindsvg}
                title="Tailwind CSS"
                alt="skill-icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Stack;
