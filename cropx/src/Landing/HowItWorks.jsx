import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import DataUsageIcon from '@mui/icons-material/DataUsage';

const HowItWorks = () => (
  <Container sx={{ padding: { xs: '40px 20px', sm: '60px 20px' }, backgroundColor: '#E8F5E9' }}>
    <Typography
      variant="h4"
      gutterBottom
      align="center"
      color="primary"
      sx={{ fontWeight: 700, fontSize: { xs: '1.8rem', sm: '2.2rem' } }}
    >
      How It Works
    </Typography>
    <Grid container spacing={4} justifyContent="center" sx={{ marginTop: '20px' }}>
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <ExploreIcon color="primary" fontSize="large" />
          <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            CropX collects data from the field using IoT sensors and satellite imagery.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <DataUsageIcon color="secondary" fontSize="large" />
          <Typography variant="body1" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
            Analyze data in real-time to optimize crop management decisions.
          </Typography>
        </Box>
      </Grid>
    </Grid>

    {/* Responsive Video */}
    <Box sx={{ marginTop: '30px', position: 'relative', paddingTop: '56.25%' }}>
      <iframe
        src="https://www.youtube.com/watch?v=KPUh1OFfo1A"
        title="How CropX Works"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          borderRadius: '10px',
        }}
      />
    </Box>
  </Container>
);

export default HowItWorks;
