import { useState, useEffect, useRef } from 'react';

export const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      category: "Graphic Design",
      items: [
        { name: "Figma", level: 85 },
        { name: "Adobe Photoshop", level: 80 },
        { name: "Adobe Illustrator", level: 75 },
        { name: "UI/UX Design", level: 85 },
        { name: "Canva", level: 90 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative">

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Expertise</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((category, idx) => (
            <div 
              key={idx}
              className={`bg-card rounded-xl border border-blue-500/30 p-6 hover:border-purple-500/50 transition-all duration-700 transform backdrop-blur-sm ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-6 pb-3 border-b-2 border-gradient-to-r from-blue-500 to-purple-500">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  {category.category}
                </span>
              </h3>
              
              <div className="space-y-5">
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium group-hover:text-blue-400 transition-colors">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-1000 ease-out group-hover:scale-105 origin-left shadow-lg shadow-blue-500/50"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${idx * 150 + skillIdx * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};