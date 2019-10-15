import React from 'react';
import 'roboto-fontface';
import { AppBar, Toolbar, Typography, Paper, Card, Grid } from '@material-ui/core'
import Box from '@material-ui/core/Box';

function App() {

  const paper = { marginTop: 40, width: '80%', padding: 20 };
  const card = { width: 150 };

  //{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(value => (
  /*
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
            13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
            25
  */
  return (
    <React.Fragment>
      <AppBar position="static" style={{ marginBottom: 15 }}>
        <Toolbar>
          <Typography style={{ flexGrow: 1 }} variant="h4">
            Gustavo de Almeida Santos
          </Typography>
        </Toolbar>
      </AppBar>

      <Grid container justify="center">
        <Grid item xs={10}>

          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={12}>
              <Paper style={{ padding: 5 }}>
                <Box display="flex" justifyContent="center">
                  <Typography>
                    Gustavo de Almeida Santos | xs={12} sm={12} md={12}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper style={{ padding: 5 }}>xs={12} sm={12} md={6}</Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper style={{ padding: 5 }}>xs={12} sm={12} md={6}</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper style={{ padding: 5 }}>xs={12} sm={6} md={4}</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper style={{ padding: 5 }}>xs={12} sm={6} md={4}</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper style={{ padding: 5 }}>xs={12} sm={6} md={4}</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper style={{ padding: 5 }}>xs={12} sm={6} md={4}</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper style={{ padding: 5 }}>xs={12} sm={6} md={4}</Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper style={{ padding: 5 }}>xs={12} sm={6} md={4}</Paper>
            </Grid>
          </Grid>

        </Grid>
      </Grid>

    </React.Fragment>
  );
}

export default App;
