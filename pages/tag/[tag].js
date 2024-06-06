import Link from "next/link";
import Head from "next/head";
import {
  getAllTags,
  getSortedPostsData,
} from "../../lib/posts";
import Date from "../../components/date";
import Layout from "../../components/layout";
import Footer from '../../pageparts/Footer';
import Header from '../../pageparts/Header';
import Main from '../../pageparts/Main';
import Sidebar from '../../pageparts/Sidebar';

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
  Typography,
} from "@mui/material";

const darkTheme = createTheme();

export default function Tag({ postData, tag }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{
        maxWidth: "800px", backgroundColor: "aliceblue", minHeight: "100vh"
      }}>
        <Header></Header>
        <Main></Main>

        <Grid container item spacing={5} sx={{ mt: 2, mb: 0, pb: 1 }}>
          <Container textAlign="ce" maxWidth="lg">
            <Typography sx={{
              textAlign: "center",
              fontSize: 40,
              color: "#212121",
            }}>
              #{tag}
            </Typography>

            <Grid
              container sx={{ mb: 1 }} spacing={1} // containe spacing : ã¢ã¤ãã å¹ã®èª¿æ´
            >
              {postData.map(({ id, date, title }, card) => (
                <Grid key={card} xs={12} sm={16} md={4} paddingLeft={2.5} paddingY={1}>
                  <Card
                    component="a"
                    href={`/posts/${id}`}
                    style={{ color: "aliceblue" }}
                    sx={{
                      display: 'flex', flexDirection: 'column'
                    }}>
                    <CardContent sx={{ flex: '10 auto' }} >

                      <Box
                        px={2}
                        sx={{ pt: 1 }} color='aliceblue'
                        display="flex" justifyContent="space-between">
                        <Typography color="#1a1a1a" fontSize={17} fontWeight="Bold" >
                          {title}
                        </Typography >
                        <Typography
                          py={1}
                          sx={{
                            color: "#1a1a1a",
                            fontSize: 18,
                            fontWeight: "bold",
                          }}>
                          {date}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Grid>
      </Container>
      <Footer></Footer>
    </ThemeProvider>
  )
}

{/*----------------------------------------------*/ }

export async function getStaticProps({ params }) {
  const tag = params.tag;
  const allPosts = getSortedPostsData();
  const postData = allPosts.filter((data) => data.tag.includes(tag));
 
  const posts = getPostsByTag(params.tag, [
    'title',
    'date',
    'slug',
    'tags',
    'content',
    'categories',
  ])

  return {
    props: {
      posts: posts.map(post => ({
        ...post,
        category: post.categories ? post.categories[0] : 'diary',
      })),
      allTags: getAllTags(),
    },
  };
}

export async function getStaticPaths() {
  const tags = getAllTags();
  return {
    paths: tags.map((tag) => {
      return {
        params: {
          tag: tag.toLowerCase(),
        },
      }
    }),
    fallback: false,
  }
}