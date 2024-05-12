import Header from '../../pageparts/Header';
import Main from '../../pageparts/Main';
import Sidebar from '../../pageparts/Sidebar';
import Footer from '../../pageparts/Footer';
import Share from "../../pageparts/Share";
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Hero from "@mui/material";
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import markdownToHtml from '../../lib/markdownToHtml';

import styles from '../../components/layout.module.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import { Helmet } from 'react-helmet';

import Image from 'next/image';
import { Link, Typography } from '@mui/material';

//20240319
import { Tags, Tag, tags } from '../../lib/tag'

export const metadata = {
  openGraph: {
    title: 'Next.js',
    description: 'The React Framework for the Web',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://ne-fa.vercel.app/images/hig_2.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://ne-fa.vercel.app/images/hig_2.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const defaultTheme = createTheme();

export default function Post({ postData }) {
  return (

    <ThemeProvider theme={defaultTheme}>
      {/*
      <Helmet
        title={postData.title}
        meta={[
          { name: "description", content: "説明" },
          { property: "og:url", content: `https://ne-fa.vercel.app/posts/${postData.id}` },
          { property: "og:title", content: postData.title },
          { property: "og:image", content: postData.thumbNa },
          { name: "twitter:card", content: 'summary' },
          { name: 'twitter:site', content: '@akameco' },
          { name: 'twitter:image', content: postData.thumbNa }
        ]}/>
      */}

      <link rel="icon" href="favi.ico" />

      <Container fixed style={{ maxWidth: "800px", backgroundColor: "aliceblue", minHeight: "100vh" }}>

        <Header></Header>

        <title>{postData.title}</title>
        <Box sx={{ backgroundColor: "aliceblue" }}>
          <Card>
            <CardMedia
              component="img"
              image={postData.thumbNa}
              alt="thumbna"
              height={270} />
          </Card>

          <Box
            justifyContent="space-between" display="flex">
            <Typography
              py={1}
              sx={{
                fontSize: 18,
                fontWeight: "bold",
                color: "text.secondary"
              }}>
              {postData.date}
            </Typography>
            <Typography
              py={1}>
              {postData.tag.map((val) =>
                <Link
                  key={Link}
                  sx={{
                    fontSize: 17,
                    color: "text.secondary",
                    textDecoration: 'none'
                  }}
                  href={`/tag/${encodeURIComponent(val)}`}>
                  #{val} {'      '}
                </Link>
              )}
            </Typography>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 44,
              color: "#212121",
            }}>
            {postData.title}
          </Typography>

          <Box justifyContent="space-between" display="flex" verticalAlign="bottom">
            <Share
              url={`https://ne-fa.vercel.app/posts/${postData.id}`}
              title={postData.title}
            />
            <Typography
              sx={{
                fontSize: 19, textAlign: "right", verticalAlign: "top", color: "text.secondary"
              }}  >
              {postData.writer}
            </Typography>
          </Box>

          <Box>
            <div
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </Box>
        </Box>
        <Box sx={{ height: "15vh" }}></Box>
      </Container>
      <Footer></Footer>
    </ThemeProvider >
  );
}

export async function getStaticProps({ params }) {
  // markdownToHtmlで
  const content = await markdownToHtml(Post.content || '')
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}