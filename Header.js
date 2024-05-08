import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Search from "../components/search";

import AppBar from '@mui/material/AppBar';
import GlobalStyles from '@mui/material/GlobalStyles';

import CssBaseline from '@mui/material/CssBaseline';
import { create } from 'domain';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { teal } from "@mui/material/colors";


const theme = createTheme();

function Header(props) {

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <link rel="icon" href='/images/nakazuba40white.png' />
        <AppBar
          position="fixed"
          elevation={1}
          style={{ backgroundColor: "#1a1a1a", textDecoration: 'none' }}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }} >
            <Link
              component="a"
              href="/"
              fontStyle="bold"
              variant="h5"
              style={{ color: "aliceblue", textDecoration: 'none' }}
              noWrap sx={{ flexGrow: 1 }}
            >
              Nakazuba
            </Link>
              <Link
                variant="button"
                href="/writers"
                sx={{ my: 1, mx: 1.5 }}
                style={{ color: "aliceblue", textDecoration: 'none' }}
              >
                Member
              </Link>
              <Link
                variant="button"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
                style={{ color: "aliceblue", textDecoration: 'none' }}
              >
                Serialization
              </Link>
              <Link
                variant="button"
                color="text.primary"
                href="#"
                sx={{ my: 1, mx: 1.5 }}
                style={{ color: "aliceblue", textDecoration: 'none' }}
              >
                About
              </Link>
              {/*20240315*/}
              <div className='search'>
                <Search />
              </div>
            {/*<Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>*/}










          </Toolbar>
        </AppBar>

        {/*
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {siteTitle}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Button variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
        </Toolbar>
        */}
      </React.Fragment>
    </ThemeProvider>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
