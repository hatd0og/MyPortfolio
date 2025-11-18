import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [designElements, setDesignElements] = useState([]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    checkTheme();
    generateStars();
    generateMeteors();
    generateDesignElements();

    const handleResize = () => {
      generateStars();
      generateDesignElements();
    };

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      checkTheme();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const checkTheme = () => {
    setIsDark(document.documentElement.classList.contains('dark'));
  };

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];
    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];
    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: -(Math.random() * 15), // Negative delay to start mid-animation
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  };

  const generateDesignElements = () => {
    const numberOfElements = 15;
    const newElements = [];
    
    for (let i = 0; i < numberOfElements; i++) {
      const shapes = ['circle', 'square', 'triangle', 'pentagon'];
      newElements.push({
        id: i,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 40 + 20,
        rotation: Math.random() * 360,
        opacity: Math.random() * 0.15 + 0.05,
        duration: Math.random() * 25 + 20,
        delay: Math.random() * 5,
        color: Math.random() > 0.5 ? 'blue' : 'purple',
      });
    }
    setDesignElements(newElements);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark Mode: Stars and Meteors */}
      {isDark && (
        <>
          {stars.map((star) => (
            <div
              key={star.id}
              className="star animate-pulse-subtle"
              style={{
                width: star.size + "px",
                height: star.size + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity,
                animationDuration: star.animationDuration + "s",
              }}
            />
          ))}

          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="meteor"
              style={{
                width: meteor.size * 50 + "px",
                height: meteor.size + "px",
                left: meteor.x + "%",
                top: meteor.y + "%",
                animation: `meteor-fall ${meteor.animationDuration}s linear infinite`,
                animationDelay: meteor.delay + "s",
              }}
            />
          ))}
        </>
      )}

      {/* Light Mode: Colorful Design Elements */}
      {!isDark && (
        <>
          {designElements.map((element) => (
            <div
              key={element.id}
              className="absolute animate-float"
              style={{
                left: element.x + "%",
                top: element.y + "%",
                width: element.size + "px",
                height: element.size + "px",
                opacity: element.opacity,
                animationDuration: element.duration + "s",
                animationDelay: element.delay + "s",
                transform: `rotate(${element.rotation}deg)`,
              }}
            >
              {element.shape === 'circle' && (
                <div 
                  className={`w-full h-full rounded-full ${
                    element.color === 'blue' 
                      ? 'bg-gradient-to-br from-blue-300 to-blue-400' 
                      : 'bg-gradient-to-br from-purple-300 to-purple-400'
                  }`}
                />
              )}
              {element.shape === 'square' && (
                <div 
                  className={`w-full h-full ${
                    element.color === 'blue' 
                      ? 'bg-gradient-to-br from-blue-300 to-blue-400' 
                      : 'bg-gradient-to-br from-purple-300 to-purple-400'
                  }`}
                  style={{ transform: 'rotate(45deg)' }}
                />
              )}
              {element.shape === 'triangle' && (
                <div 
                  className="w-0 h-0"
                  style={{
                    borderLeft: `${element.size / 2}px solid transparent`,
                    borderRight: `${element.size / 2}px solid transparent`,
                    borderBottom: `${element.size}px solid ${
                      element.color === 'blue' ? '#93c5fd' : '#c4b5fd'
                    }`,
                  }}
                />
              )}
              {element.shape === 'pentagon' && (
                <div 
                  className={`w-full h-full rounded-lg ${
                    element.color === 'blue' 
                      ? 'bg-gradient-to-br from-blue-300 to-blue-400' 
                      : 'bg-gradient-to-br from-purple-300 to-purple-400'
                  }`}
                  style={{ clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' }}
                />
              )}
            </div>
          ))}

          {/* Subtle color dots for light mode */}
          {stars.slice(0, 30).map((star) => (
            <div
              key={`light-${star.id}`}
              className="absolute rounded-full bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse-subtle"
              style={{
                width: star.size * 1.5 + "px",
                height: star.size * 1.5 + "px",
                left: star.x + "%",
                top: star.y + "%",
                opacity: star.opacity * 0.3,
                animationDuration: star.animationDuration + "s",
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};