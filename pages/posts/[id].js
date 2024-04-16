import Header from '../../pageparts/Header';
import Main from '../../pageparts/Main';
import Sidebar from '../../pageparts/Sidebar';
import Footer from '../../pageparts/Footer';

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
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

import Image from 'next/image';
import { Link, Typography } from '@mui/material';

//20240319
import { Tags, Tag, tags } from '../../lib/tag'

const defaultTheme = createTheme();

export default function Post({ postData }) {
  return (
    <ThemeProvider theme={defaultTheme}>
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

          <Box justifyContent="space-between" display="flex">
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

          <Typography
            sx={{
              fontSize: 16, textAlign: "right"
            }} color="text.secondary" >
            {postData.writer}
          </Typography>

          <Box textAlign="left">
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