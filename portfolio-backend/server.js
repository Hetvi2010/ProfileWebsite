// Import necessary packages
const express = require('express');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Enable CORS (Cross-Origin Resource Sharing) to allow requests from the React frontend
app.use(cors());

// Define a route to serve the profile and projects data
app.get('/data', (req, res) => {
  res.json({
    profile: {
      name: 'Hetvi Patel',
      profilePic: 'https://res.cloudinary.com/dfu0zhpxj/image/upload/v1726790463/IMG_1562_oasayj.jpg' // Replace with your actual image URL
    },
    projects: [
      {
        id: 1,
        title: 'GreenCart',
        description: 'A cool web app that helps streamline workflow.',
        wallpaper: 'https://res.cloudinary.com/dfu0zhpxj/image/upload/v1726791115/greencart_u1fkyq.png', // Replace with your actual project image URL
        githubLink: 'https://github.com/YashSahsani/GreenCart' // Replace with your actual GitHub link
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'A mobile app that solves real-world challenges.',
        wallpaper: 'https://example.com/project2.jpg',
        githubLink: 'https://github.com/hetvi/project2'
      }
    ]
  });
});

// Start the server on port 5000
app.listen(5001, () => {
  console.log('Server is running on http://localhost:5001');
});
