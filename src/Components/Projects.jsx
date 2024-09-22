import React from 'react';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="p-10 bg-white text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.wallpaper}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                View on GitHub
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-600">Loading projects...</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
