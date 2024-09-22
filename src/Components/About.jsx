import React from 'react';

const About = ({ profile }) => {
  return (
    <section id="about" className="p-10 bg-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:items-center">
        {/* Left Column with Profile Picture */}
        <div className="lg:w-1/4 w-full flex justify-start lg:items-start">
          <img
            src={profile.profilePic}
            alt="Profile"
            className="w-25 h-25 rounded-full shadow-lg"
          />
        </div>

        {/* Right Column with About Me Text */}
        <div className="lg:w-3/4 w-full text-left lg:ml-10 mt-6 lg:mt-0">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            Currently pursuing a Master of Applied Computing at the University of Windsor, I am deepening my expertise in computer science, set to graduate in December 2024.
            My journey at Searce Inc as a Web Developer sharpened my skills in HTML5 and React.js, where I contributed to front-end development projects. Leveraging Google Sheets and spreadsheets,
            I've honed a meticulous approach to problem-solving and project management.
            <br />
            At Searce Inc, we focused on delivering a user-centric website, applying my newly acquired React.js skills and a foundational understanding of Google Cloud concepts.
            The experience solidified my commitment to creating intuitive and efficient digital experiences. In our team, we valued innovation, and I'm eager to bring that same forward-thinking mindset
            and collaborative spirit to future teams, enhancing projects with diverse perspectives and a relentless pursuit of excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
