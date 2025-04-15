import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const updates = [
  { title: 'CropX Launches New Smart Irrigation System', date: 'March 25, 2025', content: 'A revolutionary system for efficient water usage.' },
  { title: 'Sustainable Farming Tips for 2025', date: 'March 20, 2025', content: 'Learn how to farm sustainably with CropX.' },
  { title: 'CropX in the News!', date: 'March 15, 2025', content: 'CropX featured in top agricultural journals.' },
];

const LatestUpdates = () => (
  <Container sx={{ padding: '60px 20px' }}>
    <Typography variant="h4" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
      Latest Updates
    </Typography>
    <Grid container spacing={4}>
      {updates.map((update, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ padding: '20px', height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {update.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {update.date}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: '10px' }}>
                {update.content}
              </Typography>
              <Button variant="outlined" sx={{ marginTop: '10px' }}>
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default LatestUpdates;
