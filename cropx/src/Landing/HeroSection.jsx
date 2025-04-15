import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HeroSection = () => (
  <Box
    sx={{
      backgroundColor: '#27ae60',
      color: 'white',
      padding: '50px 20px',
      textAlign: 'center',
    }}
  >
    <Typography variant="h2" gutterBottom>
      Welcome to CropX
    </Typography>
    <Typography variant="h5" gutterBottom>
      Empowering farmers with smart solutions.
    </Typography>
      <Link to="/login">
    <Button variant="contained" color="secondary" size="large">
      Get Started
    </Button>
      </Link>
  </Box>
);

export default HeroSection;
