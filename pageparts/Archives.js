import React from 'react';
import Link from '@mui/material/Link';

import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '../components/searchIcon';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import AppBar from '@mui/material/AppBar';
import GlobalStyles from '@mui/material/GlobalStyles';
import { Grid, Box } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';



function Archives({ years = [], months = [] }) {

  const getMonth = (year, month) => {
    return months.find(item => item.year === `${year}` && Number(item.month) === month)
  }

  return (
    <Grid item xs={12} md={4}>

    
      <Box>
          {years.length > 0 && years.map((year) => (
            <li key={year.id}>
              {/* ... */}
              <ul className="by-month">
                {(new Array(12)).fill(1).map((e, i) => i + 1).map((month) => {
                  const data = getMonth(year.id, month)
                  if (!data) {
                    return (
                      <li key={`${year}-${month}`}>
                        <span className="month-label count-zero">
                          <b>{month}</b>
                        </span>
                      </li>
                    )
                  }
                  return (
                    <li key={`${year}-${month}`}>
                      <span className="month-label">
                        <a href={`/${data.year}/${data.month}`}>{data.month}</a>
                        <var className="count">{data.count}</var>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}

      </Box>

      <Box
        sx={{ pb: 2 }}
      ></Box>

      
<Box
        sx={{ pb: 2 }}
      ></Box>

    </Grid>
  );
}




Archives.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Archives;
