import Header from '../../pageparts/Header';
import Main from '../../pageparts/Main';
import Sidebar from '../../pageparts/Sidebar';
import Footer from '../../pageparts/Footer';
import Share from "../../pageparts/Share";
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import markdownToHtml from '../../lib/markdownToHtml';
import styles from '../../components/layout.module.css';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  Divider,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet';
import Image from 'next/image';
//20240319
import { Tags, Tag, tags } from '../../lib/tag'

const defaultTheme = createTheme();

export default function Post({ postData }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Head>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@F4sant" />
        <meta name="twitter:creator" content="@nakazuba" />
        <meta property="og:url" content={`https://ne-fa.vercel.app/posts/${postData.id}`} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta property="og:type" content="kiji" />
        <meta property="og:image" content={`https://ne-fa.vercel.app/${postData.thumbNa}`} />
      </Head>

      {/*
        <meta property="twitter:image"  content="https://ne-fa.vercel.app/images/na.png" />
        <meta property="og:description" content="撃たれまい。。。" />
        <meta property="og:image"       content={`https://ne-fa.vercel.app/${postData.thumbNa}`} />
      */}

      <Container fixed style={{ maxWidth: "800px", backgroundColor: "aliceblue", minHeight: "100vh" }}>
        <Header></Header>
        <Main></Main>
        <Box
          sx={{ backgroundColor: "aliceblue" }}>
          <Card>
            <CardMedia
              component="img"
              image={postData.thumbNa}
              alt="thumbna"
              height={270} />
          </Card>

          <Box
            justifyContent="space-between"
            display="flex">
            <Typography py={1}
              sx={{
                fontSize: 18,
                fontWeight: "bold",
                color: "text.secondary"
              }}>
              {postData.date}
            </Typography>
            <Typography py={1}>
              {postData.tag.map((val) =>
                <Link key={Link} sx={{
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

          <Typography sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 44,
            color: "#212121",
          }}>
            {postData.title}
          </Typography>

          <Box
            justifyContent="space-between" display="flex" verticalAlign="bottom">

            <Share
              title={postData.title}
              url={`https://ne-fa.vercel.app/posts/${postData.id}`}
              image={`https://ne-fa.vercel.app${postData.thumbNa}`}/>

            <Typography sx={{
              fontSize: 19, textAlign: "right", verticalAlign: "top", color: "text.secondary" }}>
              {postData.writer}
            </Typography>
          </Box>

          <Box>
            <div
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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