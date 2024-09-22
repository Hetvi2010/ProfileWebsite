import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="p-10 bg-white text-center">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="flex overflow-x-auto space-x-6 pb-4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.githubLink}
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 min-w-[250px] flex-shrink-0"
            target="_blank"
            rel="noopener noreferrer" // To improve security
          >
            <div className="flex justify-center mb-4">
              <img
                src={project.wallpaper}
                alt={project.title}
                className="w-20 h-20 object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
