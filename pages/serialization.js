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
import Image from 'next/image';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Noto_Sans_JP } from "next/font/google";

const NSJ = Noto_Sans_JP({
    weight: "400",
    subsets: ["latin"],
})

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function serialization() {

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />

            <Header></Header>

            <Main></Main>
            <Typography sx={{
                py: 37,
                textAlign: 'center',
            }}>
                siriailaze-shon
            </Typography>

            <div
              >
                <img src="./public/na.png" alt="logo" />
            </div>

            <Footer></Footer>
        </ThemeProvider>
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