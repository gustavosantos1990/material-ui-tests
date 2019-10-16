import React from 'react';
import { Typography, Card, Grid, Link } from '@material-ui/core'

function App() {

  const externalGrid = { marginTop: 40 }
  const card = { width: 300 }
  const link = { textDecoration: "none" }

  return (
    <React.Fragment>

      <Grid container style={externalGrid} justify="center">
        <Grid item xs={10}>

          <Grid container justify="center" padding={2}>

            <Grid item xs={6} sm={4} md={3}>
              <Link href="/other" style={link}>
                <Card style={card}>
                  <Typography variant="h4">
                    Other
                </Typography>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={6} sm={4} md={3}>
              <Card style={card}>
                <Typography variant="h4">
                  Other
                </Typography>
              </Card>
            </Grid>

          </Grid>

        </Grid>
      </Grid>

    </React.Fragment>
  );
}

export default App;
