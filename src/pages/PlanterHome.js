import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Background from '../assets/background.jpg';
import { useTheme } from '@mui/material/styles';
import AndroidStoreButton from '../components/AndroidStoreButton.js';
import IosStoreButton from '../components/IosStoreButton.js';
import HexConverter from '../utils/HexConverter.js';

const cards = [
  {
    title: "Plant List",
    descr: "Check your plants in an intuitive way with search tool and quick actions",
  },
  {
    title: "Plant Details",
    descr: "Inspect your plant in a detailed way showcasing the plant condition",
  },
  {
    title: "Plant Diary",
    descr: "Browse the plant diary for past actions and events",
  },
  {
    title: "Plant Calendar",
    descr: "Browse main calendar with all of your plants in order not to miss anything!",
  },
  {
    title: "Adding a plant",
    descr: "Add customizable options which you can change any time!",
  },
  {
    title: "Editing a plant",
    descr: "Edit plant details in an intuitive way",
  },
  {
    title: "Dark Mode",
    descr: "Switch to dark mode or better contrast at night",
  },
];

const style = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default function PlanterHome() {
  const theme = useTheme();
  const contrastTextColor = theme.palette.getContrastText("#000000")
  const backgroundColor = HexConverter("#404040", 0.4);

  return (
    <main >
      <div style={style}>
        <Box>
          <Container
            sx={{
              pt: 8,
              pb: 6,
            }}
            maxWidth="md"
          >
            <Paper sx={{
              p: 8,
              backgroundColor: backgroundColor,
            }} elevation={10}>
              <Typography sx={{
                wordWrap: "break-word"
              }}
                component="h3"
                variant="h3"
                align="center"
                color={contrastTextColor}
                gutterBottom
              >
                Welcome to Planter
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color={contrastTextColor}
                paragraph
              >
                <div>
                  Planter meets all of your plant diary needs.
                </div>
                <p/>
                It is a beautiful, intuitive mobile application, which helps you taking care of your plants.
              </Typography>
            </Paper>
            <Container
              sx={{
                pt: 8,
                pb: 6,
              }}
              maxWidth="sm">
              <IosStoreButton />
              <Box sx={{ height: 48 }} />
              <AndroidStoreButton />
            </Container>
          </Container>
        </Box>

        <Container
          sx={{}}
          maxWidth="md"
        >
          <Grid
            container
            spacing={4}
          >
            {cards.map((card) => (
              // https://mui.com/material-ui/api/grid/
              <Grid
                item
                key={card}
                xs={12}
                sm={6}
                md={6}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  elevation={10}
                >
                  <CardMedia
                    sx={{
                      width: '100%',
                      objectFit: 'contain',
                    }}
                    height="500"
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent
                    sx={{ flexGrow: 1 }}
                  >
                    <Typography
                      gutterBottom
                      fontWeight="600"
                      variant="h5"
                      component="h2">
                      {card.title}
                    </Typography>
                    <Typography
                      paragraph>
                      {card.descr}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>


        <Container sx={{ py: 8 }} maxWidth="md">
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              padding: "24px"
            }}
          >
            <Typography variant="h4">
              We love plants right?
            </Typography>
            <p />
            <Typography>
              So how many of them you have in your home? 20, 50, or more than 100?
              It can get difficult to handle all of them and it might be easy to lose track of them.
              Which one has been watered? Was this Ficus fertilised lately?
            </Typography>
            <p />
            <Typography variant="h6">
              Planter is a tool which has all those answers in a single place.
            </Typography>
            <p />
            <Typography>
              This is the tool dedicated to help you with your everyday duties around your plants.
              <p />
              It helps you keep a watchful eye on your plants.
              <p />
              The app has a diary and a calendar view to help you browse and track any plant related events and actions.
              <p />
              <Typography variant="h6">
                Planter makes your plant care fully customisable.
              </Typography>
              <p />
              You can adjust any plant property like like sunlight intensity, pruning, misting, fertilizing requirements at any time.
            </Typography>
            <p />
            <Typography variant="h6">
              Simplicity
            </Typography>
            <p />
            Planter is designed to be minimalistic and intutive application with least distraction screens. <p />

            <Typography variant="h6">
              Cross platform
            </Typography>
            <p />
            The app works on both iOS devices and Android ones as well.
            <p />
          </Card>
        </Container>
      </div >
    </main>
  );
}