// import React from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';
// import { Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

// const blogPosts = [
//   {
//     id: 1,
//     title: 'The Future of Smart Farming',
//     excerpt: 'Discover how smart technologies are revolutionizing the agriculture industry...',
//     image: 'https://th.bing.com/th/id/OIP.v9F6lcxlyV4tMOMdfJ7FYAHaE8?rs=1&pid=ImgDetMain',
//   },
//   {
//     id: 2,
//     title: '5 Tips for Sustainable Agriculture',
//     excerpt: 'Learn about eco-friendly farming practices that improve yield and protect the planet...',
//     image: 'https://th.bing.com/th/id/OIP.F1hmrLQT9aUmixliAOExggEyDM?rs=1&pid=ImgDetMain',
//   },
//   {
//     id: 3,
//     title: 'How to Improve Crop Yield Effectively',
//     excerpt: 'Explore strategies and technologies that boost crop production with less effort...',
//     image: 'https://source.unsplash.com/600x400/?crops', // Placeholder image
//   },
// ];

// const BlogSection = () => {
//   return (
//     <>
//       <Navbar />
//       <Container maxWidth="xl" sx={{ py: 10 }}>
//         <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
//           Our Blog
//         </Typography>
//         <Typography variant="h6" align="center" sx={{ color: 'text.secondary', mb: 6 }}>
//           Insights, tips, and stories from the world of agriculture and technology.
//         </Typography>

//         <Grid container spacing={4}>
//           {blogPosts.map((post) => (
//             <Grid item xs={12} sm={6} md={4} key={post.id} sx={{ display: 'flex' }}>
//               <Card
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   height: '100%',
//                   minHeight: '450px',
//                   boxShadow: 3,
//                   transition: 'transform 0.3s ease-in-out',
//                   '&:hover': {
//                     transform: 'scale(1.02)',
//                   },
//                   flex: 1,
//                 }}
//               >
//                 <CardMedia
//                   component="img"
//                   alt={post.title}
//                   image={post.image}
//                   sx={{
//                     height: '200px',
//                     objectFit: 'cover',
//                   }}
//                 />
//                 <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                   <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
//                     {post.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                     {post.excerpt}
//                   </Typography>
//                   <Button variant="contained" color="primary" fullWidth>
//                     Read More
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default BlogSection;

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Container, Grid, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Smart Farming',
    excerpt: 'Discover how smart technologies are revolutionizing the agriculture industry...',
    image: 'https://th.bing.com/th/id/OIP.v9F6lcxlyV4tMOMdfJ7FYAHaE8?rs=1&pid=ImgDetMain',
  },
  {
    id: 2,
    title: '5 Tips for Sustainable Agriculture',
    excerpt: 'Learn about eco-friendly farming practices that improve yield and protect the planet...',
    image: 'https://th.bing.com/th/id/OIP.F1hmrLQT9aUmixliAOExggEyDM?rs=1&pid=ImgDetMain',
  },
  {
    id: 3,
    title: 'How to Improve Crop Yield Effectively',
    excerpt: 'Explore strategies and technologies that boost crop production with less effort...',
    image: 'https://th.bing.com/th/id/OIP.yyfPEda-15ftefTDxiM-qAHaE8?rs=1&pid=ImgDetMain', // New image
  },
];

const BlogSection = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="xl" sx={{ py: 10 }}>
        <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
          Our Blog
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: 'text.secondary', mb: 6 }}>
          Insights, tips, and stories from the world of agriculture and technology.
        </Typography>

        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item xs={12} sm={6} md={4} key={post.id} sx={{ display: 'flex' }}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  minHeight: '450px',
                  boxShadow: 3,
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.02)',
                  },
                  flex: 1,
                }}
              >
                <CardMedia
                  component="img"
                  alt={post.title}
                  image={post.image}
                  sx={{
                    height: '200px',         // Fixed height for all images
                    objectFit: 'cover',      // Maintains the aspect ratio
                    width: '100%',           // Full width of the card
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {post.excerpt}
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default BlogSection;