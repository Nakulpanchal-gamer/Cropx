// import React from 'react';
// import { Container, Typography, Grid, Box, Avatar } from '@mui/material';

// const testimonials = [
//   { name: 'John Doe', feedback: 'CropX has revolutionized the way we manage our crops. Highly recommended!', avatar: 'https://i.pravatar.cc/100' },
//   { name: 'Jane Smith', feedback: 'An amazing tool that saves both time and resources.', avatar: 'https://i.pravatar.cc/101' },
//   { name: 'Alex Johnson', feedback: 'Thanks to CropX, our farm productivity has skyrocketed.', avatar: 'https://i.pravatar.cc/102' },
// ];

// const Testimonials = () => (
//   <Container sx={{ padding: { xs: '40px 20px', sm: '60px 20px' }, backgroundColor: '#F1F8E9' }}>
//     <Typography
//       variant="h4"
//       gutterBottom
//       align="center"
//       sx={{ fontWeight: 'bold', color: '#27ae60', fontSize: { xs: '1.8rem', sm: '2.2rem' } }}
//     >
//       What Our Users Say
//     </Typography>
//     <Grid container spacing={4} justifyContent="center">
//       {testimonials.map((testimonial, index) => (
//         <Grid item xs={12} sm={6} md={4} key={index}>
//           <Box
//             sx={{
//               width: 300, // Fixed width for all boxes
//               textAlign: 'center',
//               padding: 3,
//               backgroundColor: '#fff',
//               borderRadius: 2,
//               boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               mx: 'auto', // Center the box horizontally
//               '&:hover': {
//                 transform: 'translateY(-8px)',
//                 boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
//               },
//             }}
//           >
//             <Avatar
//               src={testimonial.avatar}
//               sx={{
//                 width: 90,
//                 height: 90,
//                 margin: '0 auto',
//                 mb: 2,
//                 border: '3px solid #27ae60',
//                 boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
//               }}
//             />
//             <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2, color: '#555', lineHeight: 1.5 }}>
//               "{testimonial.feedback}"
//             </Typography>
//             <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
//               - {testimonial.name}
//             </Typography>
//           </Box>
//         </Grid>
//       ))}
//     </Grid>
//   </Container>
// );

// export default Testimonials;
import React from 'react';
import { Container, Typography, Box, Avatar } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  { name: 'John Doe', feedback: 'CropX has revolutionized the way we manage our crops. Highly recommended!', avatar: 'https://i.pravatar.cc/100' },
  { name: 'Jane Smith', feedback: 'An amazing tool that saves both time and resources.', avatar: 'https://i.pravatar.cc/101' },
  { name: 'Alex Johnson', feedback: 'Thanks to CropX, our farm productivity has skyrocketed.', avatar: 'https://i.pravatar.cc/102' },
  { name: 'Emily Davis', feedback: 'CropX’s data-driven insights have transformed our yields.', avatar: 'https://i.pravatar.cc/103' },
  { name: 'Michael Lee', feedback: 'The best support team! Always ready to help with any queries.', avatar: 'https://i.pravatar.cc/104' },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,  // Show 3 items on large screens
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024, // When the screen width is 1024px or less
      settings: {
        slidesToShow: 2, // Show 2 items on medium-sized screens
      },
    },
    {
      breakpoint: 768, // When the screen width is 768px or less
      settings: {
        slidesToShow: 1, // Show 1 item on small screens
      },
    },
  ],
};

const Testimonials = () => (
  <Container sx={{ padding: { xs: '40px 20px', sm: '60px 20px' }, backgroundColor: '#F1F8E9' }}>
    <Typography
      variant="h4"
      gutterBottom
      align="center"
      sx={{ fontWeight: 'bold', color: '#27ae60', fontSize: { xs: '1.8rem', sm: '2.2rem' } }}
    >
      What Our Users Say
    </Typography>

    <Slider {...sliderSettings}>
      {testimonials.map((testimonial, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: '#fff',
            borderRadius: 2,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            padding: 3,
            textAlign: 'center',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            },
            height: 'auto', // Let height adjust based on content
            marginRight: '20px', // Spacing between boxes
            marginBottom: '15px', // Spacing at the bottom in case the boxes wrap
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Avatar
            src={testimonial.avatar}
            sx={{
              width: 90,
              height: 90,
              margin: '0 auto',
              mb: 2,
              border: '3px solid #27ae60',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
            }}
          />
          <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2, color: '#555', lineHeight: 1.5 }}>
            "{testimonial.feedback}"
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#2E7D32' }}>
            - {testimonial.name}
          </Typography>
        </Box>
      ))}
    </Slider>
  </Container>
);

export default Testimonials;
