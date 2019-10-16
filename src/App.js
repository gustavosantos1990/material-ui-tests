import React from 'react';
import {
  Typography
  , Card
  , Grid
  , Link
  , Box
  , Avatar
  /*,Paper
  ,CardActionArea
  ,CardActions
  ,CardContent
  ,CardMedia*/
} from '@material-ui/core'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import BarChartRounded from '@material-ui/icons/BarChartRounded';
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';

function App() {

  const externalDiv = { marginTop: 50 }
  const card = {}
  const link = { textDecoration: "none" }

  return (
    <React.Fragment>
      <div >
        <Grid container style={externalDiv} justify="center">
          <Grid item xs={12} sm={11} md={10}>
            <Grid container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={2}>

              <Grid item xs={12} sm={4} md={3}>
                <Link href="/other" style={link}>
                  <Card style={card}>
                    <Box display="flex" p={2}>
                      <Box p={1} >
                        <Avatar>
                          <PeopleAltRoundedIcon />
                        </Avatar>
                      </Box>
                      <Box p={1}>
                        <Typography gutterBottom variant="h6">
                          Customers
                    </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12} sm={4} md={3}>
                <Link href="/other" style={link}>
                  <Card style={card}>
                    <Box display="flex" p={2}>
                      <Box p={1} >
                        <Avatar>
                          <BusinessCenterRoundedIcon />
                        </Avatar>
                      </Box>
                      <Box p={1}>
                        <Typography gutterBottom variant="h6">
                          Enterprises
                    </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12} sm={4} md={3}>
                <Link href="/other" style={link}>
                  <Card style={card}>
                    <Box display="flex" p={2}>
                      <Box p={1} >
                        <Avatar>
                          <TrendingUpRoundedIcon />
                        </Avatar>
                      </Box>
                      <Box p={1}>
                        <Typography gutterBottom variant="h6">
                          Sales
                    </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Link>
              </Grid>

              <Grid item xs={12} sm={4} md={3}>
                <Link href="/other" style={link}>
                  <Card style={card}>
                    <Box display="flex" p={2}>
                      <Box p={1} >
                        <Avatar>
                          <BarChartRounded fontSize="large" />
                        </Avatar>
                      </Box>
                      <Box p={1}>
                        <Typography gutterBottom variant="h6">
                          Statistics
                    </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Link>
              </Grid>

            </Grid>
          </Grid>
        </Grid>

      </div>
    </React.Fragment>
  );
}

export default App;
