import React from 'react';
import { Box, Typography, Container, Grid, Avatar, Paper, Divider } from '@mui/material';
import Navbar from './Navbar';
import Footer from './Footer';

const team = [
  {
    name: 'Amit Verma',
    role: 'Founder & Agritech Specialist',
    img: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'Neha Kapoor',
    role: 'Data Scientist',
    img: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Raj Singh',
    role: 'Frontend Developer',
    img: 'https://i.pravatar.cc/150?img=3',
  },
];

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Page Title */}
        <Typography
          variant="h3"
          align="center"
          sx={{ fontWeight: 'bold', color: 'primary.main', mb: 2 }}
        >
          About CropX
        </Typography>
        <Divider sx={{ mb: 4, borderColor: 'primary.main', mx: 'auto', width: '60px' }} />

        {/* Intro Section */}
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 6, color: 'text.secondary', maxWidth: 900, mx: 'auto' }}
        >
          <strong>CropX</strong> is not just another agri-startup. We are a technology-driven
          movement working to transform how farming is done. With a mission rooted in innovation
          and sustainability, we partner with farmers, agronomists, and researchers to deliver
          practical, real-time tools that elevate productivity and ensure food security for future
          generations.
        </Typography>

        {/* Mission Section */}
        <Box sx={{ mb: 10 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ fontWeight: 'bold', color: 'secondary.main', mb: 3 }}
          >
            Our Mission
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ color: 'text.secondary', maxWidth: 950, mx: 'auto', lineHeight: 1.8 }}
          >
            At <strong>CropX</strong>, our mission is clear — to empower every farmer, from smallholders to
            large-scale cultivators, with the tools and insights they need to thrive in a changing
            world. Through IoT-based sensors, machine learning models, and intuitive mobile
            platforms, we provide:
            <br /><br />
            • Real-time soil and weather data<br />
            • Smart irrigation and crop rotation recommendations<br />
            • Predictive analytics for yield forecasting<br />
            • A support network of agritech professionals<br /><br />
            We believe that the future of agriculture is data-driven, and we are committed to
            ensuring that no farmer is left behind in this technological shift.
          </Typography>
        </Box>

        {/* Meet the Team */}
        <Box>
          <Typography
            variant="h4"
            align="center"
            sx={{ fontWeight: 'bold', color: 'primary.main', mb: 4 }}
          >
            Meet the Team
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {team.map((member, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Paper
                  elevation={4}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    textAlign: 'center',
                    transition: '0.3s ease',
                    backgroundColor: 'background.paper',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Avatar
                    src={member.img}
                    alt={member.name}
                    sx={{
                      width: 100,
                      height: 100,
                      mx: 'auto',
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {member.role}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Footer />
    </>
  );
};

export default AboutUs;
