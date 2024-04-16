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
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from "@mui/material/CssBaseline";

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Header from '../pageparts/Header';
import Main from '../pageparts/Main';
import Sidebar from '../pageparts/Sidebar';
import Footer from '../pageparts/Footer';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';


const writerData = [
    {
        wart: '/images/itiroshirota.png',
        wname: '白田 一郎',
        wnameen: 'Shirota Ichiro',
        intro: '管理, 運営'
    },
    {
        wart: '/images/nakazuba640.png',
        wname: '柿本 建',
        wnameen: 'Kakimoto Ken',
        intro: `管理, エンジニア`
    },
    {
        wart: '/images/flowerncafe.png',
        wname: '英 世志香',
        wnameen: 'Hanabusa Yoshika',
        intro: '事務, デザイナー'
    },
    {
        wart: '/images/hitoriTravel.png',
        wname: '乾 洋典',
        wnameen: 'Inui Hironori',
        intro: '事務, 企画'
    },
    {
        wart: '/images/ekurosawa.png',
        wname: '黒澤 愛理',
        wnameen: 'Kurosawa Eri',
        intro: '事務, エンジニア'
    },
];


const darkTheme = createTheme();

export default function writers() {

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />

            <Container fixed style={{ backgroundColor: "aliceblue", minHeight: "100vh" }}>
                <link rel="icon" href='/images/nakazuba40white.png' />

                <Header></Header>

                <Main></Main>

                <Grid container item spacing={5} sx={{ mt: 2, mb: 0, pb: 1 }}>
                    <Container maxWidth="lg">
                        <Typography
                            component="h1"
                            variant="h4"
                            align="center"
                            sx={{ color: "#1a1a1a" }}
                        >
                            メンバー
                        </Typography >
                        <Grid
                            container sx={{ mb: 1 }} spacing={4} // containe spacing : アイテム幅の調整
                        >
                            {writerData.map(({ wart, wname, intro, wnameen }, index) => (
                                <Grid item key={index} xs={12} sm={12} md={6}>
                                        <Card
                                            component="a"
                                            href="#"
                                            style={{ color: "aliceblue" }}
                                            sx={{ display: 'flex', flexDirection: 'column' }} >
                                            <CardContent sx={{ flex: '10 auto' }} >
                                                <Box display="flex">
                                                    <CardMedia
                                                        component="img"
                                                        sx={{ width: 151 }}
                                                        image={wart}
                                                        alt="writer art"
                                                    />
                                                    <Box px={2} sx={{ pt: 1 }} color='inherit'>
                                                        <Typography color="#1a1a1a" fontSize={17} fontWeight="Bold"  >
                                                            {wname}
                                                        </Typography >
                                                        <Typography color="#1a1a1a" fontSize={11} sx={{ pb: 4 }}>
                                                            {wnameen}
                                                        </Typography>
                                                        <Box display="flex" justifyContent="flex-start">
                                                            <Typography color="#1a1a1a" fontSize={13} sx={{ whiteSpace: 'pre-line' }}  >
                                                                {intro}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
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
    return {
        props: {
            allPostsData,
        },
    };
}



