import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '../components/searchIcon';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import GlobalStyles from '@mui/material/GlobalStyles';

import CssBaseline from '@mui/material/CssBaseline';

{/*0503 */ }
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch';

import Search from "../components/search";
import SearchForm from "../components/searchForm";
import { Container } from 'postcss';


const searchClient = algoliasearch('HRST160B7P', 'ce9fc76ff0661c1d8a523e4d26a97e66');

function Header(props) {
  return (
    <React.Fragment>
      {/*<GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />*/}
      <CssBaseline />
      <AppBar sx={{
        position: "flex",
        backgroundColor: "#00bfff",
      }}>
        <Toolbar sx={{
          position: "static",
          paddingTop: "5px"
        }}>
          <Link
            href="/"
            sx={{
              color: "inherit",
              fontStyle: "bold",
              flexGrow: 1,
              fontSize: 48,
              textDecoration: 'none'
            }}>
            Nakazuba
          </Link>

          {/*<Link
            href="/year"
            sx={{
              variant: "button",
              color: "#ffffff",
              fontSize: 20,
              marginRight: 1.5,
              textDecoration: 'none',
            }}>
            ARCHIVE
          </Link>*/}

          <Link
            href="/writers"
            sx={{
              variant: "button",
              color: "#ffffff",
              fontSize: 20,
              marginRight: 1.5,
              textDecoration: 'none',
            }}>
            WRITERS
          </Link>
          <Link
            href="/serialization"
            sx={{
              variant: "button",
              color: "#ffffff",
              fontSize: 20,
              marginRight: 1.5,
              textDecoration: 'none',
            }}>
            SERIALIZATION
          </Link>
          <Link
            href="/about"
            sx={{
              variant: "button",
              color: "#ffffff",
              fontSize: 20,
              marginRight: 1.5,
              textDecoration: 'none',
            }}>
            ABOUT
          </Link>
          <SearchForm />
        </Toolbar>

      </AppBar>
    </React.Fragment >
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
