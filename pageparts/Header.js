import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import GlobalStyles from '@mui/material/GlobalStyles';

import CssBaseline from '@mui/material/CssBaseline';

{/*0503 */ }
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch';

import Search from '../components/search';

const searchClient = algoliasearch('HRST160B7P', 'ce9fc76ff0661c1d8a523e4d26a97e66');

function Header(props) {
  return (
    <React.Fragment>

      {/*<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />*/}
      <CssBaseline />
      <AppBar
        sx={{
          position: "static",
          backgroundColor: "#00bfff",
        }}>
        <Toolbar
          sx={{ flexWrap: 'wrap' }}>
          <Link
            fontStyle="bold"
            variant="h5"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
            href="/"
            style={{ textDecoration: 'none' }}>
            Nakazuba
          </Link>
          <Link
            variant="button"
            color="#ffffff"
            href="/writers"
            sx={{ my: 1, mx: 1.5 }}
            style={{ textDecoration: 'none' }}
          >
            WRITERS
          </Link>
          <Link
            variant="button"
            color="#ffffff"
            href="/serialization"
            sx={{ my: 1, mx: 1.5 }}
            style={{ textDecoration: 'none' }}
          >
            SERIALIZATION
          </Link>
          <Link
            variant="button"
            color="#ffffff"
            href="/about"
            sx={{ my: 1, mx: 1.5 }}
            style={{ textDecoration: 'none' }}
          >
            ABOUT
          </Link>

          <Search />

        </Toolbar>
      </AppBar>
    </React.Fragment>
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
