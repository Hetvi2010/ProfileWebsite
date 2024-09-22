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
      profilePic: 'https://res.cloudinary.com/dfu0zhpxj/image/upload/v1726976144/myprofile_q7lam4.jpg' // Replace with your actual image URL
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
        title: 'Digital Escort',
        description: 'A mobile app that solves real-world challenges.',
        wallpaper: 'https://res.cloudinary.com/dfu0zhpxj/image/upload/v1726976911/digital-escort_q6rvym.png',
        githubLink: 'https://github.com/Hetvi2010/Digital_escort'
      },
      {
        id: 3,
        title: 'Rent Ripple',
        description: 'A cool web app that helps streamline workflow.',
        wallpaper: 'https://res.cloudinary.com/dfu0zhpxj/image/upload/v1726977093/Rent-ripple_iieeb9.jpg', // Replace with your actual project image URL
        githubLink: 'https://github.com/RentRipple' // Replace with your actual GitHub link
      },
      {
        id: 4,
        title: 'Socket Programming',
        description: 'A cool web app that helps streamline workflow.',
        wallpaper: 'https://res.cloudinary.com/dfu0zhpxj/image/upload/v1726977389/socket_ot5ing.jpg', // Replace with your actual project image URL
        githubLink: 'https://github.com/Hetvi2010/Socket-Programming' // Replace with your actual GitHub link
      }
    ]
  });
});

// Start the server on port 5000
app.listen(5001, () => {
  console.log('Server is running on http://localhost:5001');
});
