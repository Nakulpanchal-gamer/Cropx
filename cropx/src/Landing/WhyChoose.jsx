import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import NatureIcon from '@mui/icons-material/Nature';
import SpeedIcon from '@mui/icons-material/Speed';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const features = [
  {
    icon: <NatureIcon fontSize="large" />,
    title: 'Sustainable Farming',
    description: 'Optimizing resources to promote eco-friendly agriculture.',
  },
  {
    icon: <SpeedIcon fontSize="large" />,
    title: 'Fast & Reliable',
    description: 'Real-time data processing for quick insights.',
  },
  {
    icon: <CheckCircleOutlineIcon fontSize="large" />,
    title: 'Proven Results',
    description: 'Trusted by thousands of farmers worldwide.',
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: '24/7 Support',
    description: 'Our team is always ready to assist you.',
  },
];

const WhyChoose = () => (
  <Box sx={{ backgroundColor: '#f9f9f9', py: { xs: 4, sm: 5 }, px: 2 }}>
    <Typography
      variant="h3"
      align="center"
      gutterBottom
      sx={{ color: '#27ae60', fontSize: { xs: '1.8rem', sm: '2.4rem' }, fontWeight: 'bold' }}
    >
      Why Choose CropX?
    </Typography>
    <Typography
      variant="h6"
      align="center"
      sx={{ mb: 4, color: '#555', fontSize: { xs: '0.9rem', sm: '1rem' } }}
    >
      Empowering farmers with innovative, data-driven solutions for better yields and sustainability.
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Paper
            elevation={3}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: 3, // Uniform padding
              maxWidth: 300, // Fixed width for consistency
              textAlign: 'center',
              borderRadius: 2,
              transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
              margin: '0 auto', // Centering the box
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              },
            }}
          >
            <Box
              sx={{
                bgcolor: '#27ae60',
                mb: 1,
                width: 60,
                height: 60,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                color: 'white',
                fontSize: '1.8rem',
              }}
            >
              {feature.icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              {feature.title}
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 0 }}>
              {feature.description}
            </Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default WhyChoose;
