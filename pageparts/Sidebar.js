import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Box, Card, Toolbar } from '@mui/material';

import TwitterIcon from '@mui/icons-material/Twitter';
import Container from '@mui/material/Container';



export default function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <Container maxWidth="lg">
      <Grid sx={{ py: 6 }} item xs={12} md={4}>

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Archives
        </Typography>

        {archives.map(({ archive, title, url },) => (
          <Link display="block" variant="body1" href={archives.url} key={title} style={{ textDecoration: 'none', color: "black" }}>
            {title}
          </Link>
        ))}

        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Social
        </Typography>

        <Grid
          container spacing={4}>
          {social.map((network, name, key) => (
            <Grid item key={network.name} xs={12} sm={6} md={4}>
              <Card sx={{
                aspectRatio: 1 / 0.3,
                alignItems: "center",
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}>
                <Link
                  display="block"
                  variant="body1"
                  href="#"
                  key={network.name}
                  sx={{ mb: 0.5 }}
                  style={{ textDecoration: 'none' }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <network.icon />
                    <span>{network.name}</span>
                  </Stack>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}




Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  description: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};


