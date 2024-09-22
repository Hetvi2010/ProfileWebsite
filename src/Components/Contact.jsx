// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-6 text-center bg-gray-50">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg text-gray-700 mb-4">
        You can reach me at: <a href="mailto:hp712793@gmail.com" className="text-blue-600 hover:underline">hp712793@gmail.com</a>
      </p>
      <p className="text-lg text-gray-700">
        Find me on:
        <a href="https://github.com/Hetvi2010" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">GitHub</a> | 
        <a href="https://www.linkedin.com/in/hetvi-patel-272852175/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">LinkedIn</a> | 
        <a href="https://codeforces.com/profile/hetu_20" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mx-2">Codeforces</a>
      </p>
    </section>
  );
};

export default Contact;
