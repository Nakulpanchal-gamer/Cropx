import React from 'react';
import HeroSection from './HeroSection';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import WhyChoose from './WhyChoose';
import Testimonials from './Testimonials';
import LatestUpdates from './LatestUpdates';
import theme from '../theme';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import Navbar from './Navbar';


const LandingPage = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box>
    <Navbar />
      <HeroSection />
      <Features />
      <WhyChoose />
      <Testimonials />
      <HowItWorks />
      <LatestUpdates />
      <Footer />
    </Box>
  </ThemeProvider>
);

export default LandingPage;
