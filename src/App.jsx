import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import axios from 'axios';

const App = () => {
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/data');
        setProfile(response.data.profile);
        setProjects(response.data.projects);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="pt-20">
        <About profile={profile} />
        <Projects projects={projects} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
