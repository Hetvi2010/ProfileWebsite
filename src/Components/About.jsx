import React from 'react';

const About = ({ profile }) => {
  return (
    <section id="about" className="pt-24 p-10 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <img
          src={profile.profilePic}
          alt="Profile"
          className="w-48 h-48 rounded-full shadow-lg lg:mr-10 mb-6 lg:mb-0"
        />
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            {profile.name ? profile.name : 'Loading...'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
