import { getAllTags, getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";
import Link from "next/link";
import Head from "next/head";
import Date from "../components/date";

import Header from '../pageparts/Header';
import Main from '../pageparts/Main';
import Sidebar from '../pageparts/Sidebar';
import Footer from '../pageparts/Footer';

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  Typography
} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function nov2023({ postData, tag, id }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Container fixed style={{ backgroundColor: "aliceblue", marginBottom: "0" }}>

        <Header></Header>
        <Main></Main>


        <Grid container item spacing={5} sx={{ mt: 2, mb: 0, pb: 1 }}>
          <Container maxWidth="lg">
            <Typography>
              <Link
                variant="button"
                color="#ffffff"
                href={`/001_higanbana`}
                sx={{ my: 1, mx: 1.5 }}
                style={{ textDecoration: 'none' }}
              >
              </Link>
            </Typography>


            {/*
            <Typography
              component="h1"
              align="center"
              sx={{ color: "#1a1a1a" }}
              marginBottom={4}>
              #{tag}
            </Typography>

            <Grid
              container sx={{ mb: 1 }} spacing={1} // containe spacing : アイテム幅の調整
              >
              {postData.map(({ id, date, title }, card) => (
                <Grid key={card} xs={12} sm={16} md={4} paddingLeft={2.5} paddingY={1}>
                  <Card
                    component="a"
                    href={`/posts/${id}`}
                    style={{ color: "aliceblue" }}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                  >
                    <CardContent sx={{ flex: '10 auto' }} >
                      <Box px={2} sx={{ pt: 1 }} color='inherit' display="flex" justifyContent="space-between">
                        <Typography color="aliceblue" fontSize={17} fontWeight="Bold"  >
                          {title}
                        </Typography >
                        <Typography
                          py={1}
                          sx={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "aliceblue"
                          }}>
                          {date}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            */}
          </Container>
        </Grid>
      </Container>
      <Footer></Footer>
    </ThemeProvider>
  )
}

export async function getStaticPaths() {
  const tags = getAllTags();
  const paths = tags.map((tag) => {
    return {
      params: {
        tag: tag,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const tag = params.tag;
  const allPosts = getSortedPostsData();
  const postData = allPosts.filter((data) => data.tag.includes(tag));

  return {
    props: {
      postData,
      tag,
    },
  };
}