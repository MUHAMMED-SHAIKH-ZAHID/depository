import React from 'react'
import '../Components/testcss.css'

const TestingComponent = () => {
  const strings = [
    "B",
    "l",
    "a",
    "c",
    "k",
    " ",
    "C",
    "l",
    "o",
    "t",
    "h",
    "i",
    "n",
    "g",
  ];

  return(
    <div className="flex justify-center h-screen overflow-hidden">
    <div className="animate-marquee">
      {strings.map((item, index) => (
        <div key={index} className="py-2">
          {item}
        </div>
      ))}
    </div>
  </div>
  )
}

export default TestingComponent