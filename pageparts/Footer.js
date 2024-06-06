import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Toolber from "@mui/material/Toolbar";
import Appbar from "@mui/material/AppBar";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'  '}
      {new Date().getFullYear()}
      {'  '}
      <Link sx={{ fontWeight: "bold" }} color="inherit" href="/" style={{ textDecoration: 'none' }}>
        F4SANT
      </Link>{'  '}
      All Rights Reserved.
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer({ tags }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
      </Container>
      <Appbar
        component="footer"
        position="static"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: "#87cefa"
        }}
      >
        <Container justifycontent
        >
          <Typography sx={{ fontWeight: "bold" }} color="#444444">
            Nakazuba
          </Typography>
          <Copyright />
        </Container>
        <Container >

        </Container>
      </Appbar>

      <ul>
          {tags && tags.map((tag) => (
            <li key={tag} className="tag-label tag-lv-5">
              <Link href={`/tags/${tag.toLowerCase()}`}>
                <a>{tag}</a>
              </Link>
              {/* TODO: Tag Count */}
              {/* <var className="count">20</var> */}
            </li>
          ))}
        </ul>
        
    </ThemeProvider>
  );
}
