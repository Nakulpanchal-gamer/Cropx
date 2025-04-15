import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const features = [
  { title: 'Smart Irrigation', description: 'Optimize water usage with precision.' },
  { title: 'Soil Monitoring', description: 'Analyze soil health for better yields.' },
  { title: 'Crop Analytics', description: 'Track growth and predict harvest times.' },
];

const CardStyled = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #E8F5E9, #C8E6C9)',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
  },
  borderRadius: '15px',
  padding: '20px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
}));

const Features = () => (
  <Container sx={{ padding: '60px 20px' }}>
    <Typography
      variant="h4"
      gutterBottom
      align="center"
      color="primary"
      sx={{ fontWeight: 700, fontSize: { xs: '1.8rem', sm: '2.2rem' } }}
    >
      Our Features
    </Typography>
    <Grid container spacing={4} justifyContent="center">
      {features.map((feature, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <CardStyled>
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                color="primary"
                sx={{ fontWeight: 600, fontSize: { xs: '1rem', sm: '1.2rem' } }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}
              >
                {feature.description}
              </Typography>
            </CardContent>
          </CardStyled>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Features;
