'use client';

import React, { useState, useEffect } from 'react';
import supabase from '../components/supabaseClient';

import Header from '../pageparts/Header';
import Footer from '../pageparts/Footer';

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  createTheme,
  CssBaseline,
  Divider,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Typography,
} from '@mui/material';


const Page = () => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError('コメントの取得中にエラーが発生しました');
      console.error('Error fetching comments', error);
    } else {
      setComments(data);
      setError(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleCommentSubmit = async (event) => {
    event.preventDefault();
    if (!comment.trim()) return; // 空のコメントを防ぐ

    const { data, error } = await supabase
      .from('comments')
      .insert([{ content: comment }]);

    if (error) {
      setError('コメントの投稿中にエラーが発生しました');
      console.error('Error submitting comment', error);
    } else {
      setComment('');
      fetchComments();
      setError(null);
    }
  };

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container style={{ maxWidth: "800px", backgroundColor: "aliceblue", minHeight: "100vh" }}>
        <Header></Header>
        <Grid container sx={{ mt: 8.75, mb: 3.5 }}>
          <Container maxWidth="lg">
            <div>
              <Box>
                <Typography
                  align="center"
                  sx={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: 44,
                    color: "#212121",
                    mb: 1
                  }}>コメント
                </Typography>
              </Box>
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <form onSubmit={handleCommentSubmit}>

                <Box
                  flex align="right">
                  <TextField
                    fullWidth
                    multiline
                    minRows="4"
                    label="コメント"
                    variant="outlined"
                    color="secondary"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    placeholder="Enterで改行"
                  />
                  <Button
                  sx={{mt: 1}}
                    variant="contained"
                    type="submit"
                    disabled={loading}>
                    投稿
                  </Button>
                </Box>
              </form>
              {loading ? (
                <p>コメントを読み込んでいます...</p>
              ) : (
                <div>
                  
                  {comments.map((comment) => (
                    <Card
                    multiline
                    display="flex"
                      key={comment.id} 
                      style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                      {comment.content}
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </Grid>
      </Container>
      <Footer></Footer>
    </ThemeProvider >

  );
};

export default Page;
