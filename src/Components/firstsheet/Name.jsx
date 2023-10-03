import React, { useEffect, useState } from 'react'

const Name = () => {
    const [name, setName] = useState('');
    const [showDefault, setShowDefault] = useState(false);
  
    useEffect(() => {
      const languages = ['English', 'Arabic','Greek', 'Hindi', 'German'];
      let currentIndex = 0;
      let loopCount = 0;
  
      const interval = setInterval(() => {
        if (currentIndex < languages.length) {
          setName(getNameForLanguage(languages[currentIndex]));
          currentIndex++;
        } else {
          loopCount++;
          currentIndex = 0;
          setShowDefault(true);
          setTimeout(() => {
            setShowDefault(false);
            if (loopCount >= 4) {
              clearInterval(interval);
              setShowDefault(true);
            }
          }, 400);
        }
      }, 200); 
  
      return () => {
        clearInterval(interval); 
      };
    }, []);
  
    const getNameForLanguage = (language) => {
      switch (language) {
        case 'English':
          return 'Shaikh Zahid';
        case 'Arabic':
          return 'شيخ زاحد';
        case 'German':
          return 'Scheich Zahid';
        case 'Hindi':
          return 'शेख ज़ाहिद';
        case 'Greek':
          return 'Σέιχ Ζαχίντ';
        default:
          return 'Shaikh Zahid';
      }
    };
  
    return (
      <div >
   {showDefault ? 'Shaikh Zahid' : name}
      </div>
    );
  };

export default Name