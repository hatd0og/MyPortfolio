import { useState, useEffect, useRef } from 'react';

export const ProjectSection = () => {
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

  const projects = [
    {
      title: "Graphic Design Projects",
      description: "A full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard.",
      tags: ["Logo", "Poster", "Packaging"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      link: "#"
    },
    {
      title: "Canva Projects",
      description: "Collaborative task manager with real-time updates, drag-and-drop functionality, and team features.",
      tags: ["Activity Books", "School Facebook Page Visuals", "Logo"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      link: "#"
    },
    {
      title: "UI/UX Design Projects",
      description: "Modern portfolio site with animations, dark mode, and responsive design for showcasing creative work.",
      tags: ["Figma"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
      link: "#"
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-transparent bg-clip-text gradient">Projects</span>
          </h2>
          <p className="text-gray-400 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative experiments
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative bg-card rounded-xl border border-blue-500/30 overflow-hidden transition-all duration-700 transform hover:border-purple-500/50 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-purple-400 transition-colors group/link"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};