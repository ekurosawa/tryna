import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

import Grid from '@mui/material/Unstable_Grid2';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';

import Header from '../pageparts/Header';
import Main from '../pageparts/Main';
import Sidebar from '../pageparts/Sidebar';
import Footer from '../pageparts/Footer';
import Share from '../pageparts/Share';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Noto_Sans_JP } from "next/font/google";

import { generateIndex } from "../lib/algolia";
import { LineIcon } from 'react-share';

const NSJ = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
})

const posts = ['   '];

const sections = [

  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const sidebar = {
  title: 'hororo',
  description:
    'kekekekekekekekekekekekekekekekekekekekkekekekekekekkekekekekekekekke',
  archives: [
    { title: 'Nov 2023', url: '#' },
    { title: 'Oct 2023', url: '#' },

  ],
  social: [
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
    { name: 'Line', icon: LineIcon },
  ],
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});


export default function Home({ allPostsData }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />

      <Container fixed style={{ backgroundColor: "aliceblue", marginBottom: "0" }}>
        <link rel="icon" href='/images/nakazuba40white.png' />

        <Header></Header>
        <Main></Main>

        <Grid container spacing={5} sx={{ mt: 2 }}>
          <Container maxWidth="lg">
            <Box>
              <Typography
                className={NSJ.className}
                align="center"
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 44,
                  color: "#212121",
                  mb: 1
                }}>
                記事一覧
              </Typography>
            </Box>

            {/*<Divider sx={{pb: 5, pt: 5}}/>*/}

            <Grid
              container spacing={4}>
              {allPostsData.map(({ id, date, title, writer, thumbNa }, card, index) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    component="a"
                    href={`/posts/${id}`}
                    style={{ backgroundColor: "#ffeeff" }}
                    sx={{ aspectRatio: 1 / 1, display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9 4:3
                        pt: '75%',
                        backgroundColor: "#FFFFFF"
                      }}
                      image={thumbNa}
                      alt="image"
                      href={`/posts/${id}`}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box justifyContent="space-between" display="flex">
                        <Typography sx={{ fontSize: 11, color: "#1a1a1a", textDecoration: 'none' }} color="text.secondary">
                          {date}
                        </Typography>
                        <Typography sx={{ fontSize: 11.5, color: "#1a1a1a", textDecoration: 'none' }} color="text.secondary" >
                          {writer}
                        </Typography>
                      </Box>
                      <Typography sx={{ fontSizeAdjust: 0.56, color: "#1a1a1a", textDecoration: 'none' }} color="text.secondary" className={NSJ.className}>
                        {title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>

        <Box
          sx={{ pb: 10 }}
        ></Box>

        <Share
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />

      </Container>
      <Footer></Footer>
    </ThemeProvider>
  );
}


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        nakazuba
      </Link>{' '}
      {2023}
      {'.'}
    </Typography>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  await generateIndex();
  return {
    props: {
      allPostsData,
    },
  };
}



