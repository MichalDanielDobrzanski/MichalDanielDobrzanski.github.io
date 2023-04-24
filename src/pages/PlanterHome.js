import React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Background from '../assets/background.jpg';
import { useTheme } from '@mui/material/styles';
import AndroidStoreButton from '../components/AndroidStoreButton.js';
import IosStoreButton from '../components/IosStoreButton.js';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const style = {
  backgroundImage: `url(${Background})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

export default function PlanterHome() {
  const theme = useTheme();
  const color = theme.palette.getContrastText("#000000")

  return (
    <main >
      <div style={style}>
        <Box>
          <Container
            sx={{
              pt: 8,
              pb: 6,
            }}
            maxWidth="sm"
          >
            <Typography
              component="h2"
              variant="h2"
              align="center"
              color={color}
              gutterBottom
            >
              Welcome to Planter
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color={color}
              paragraph
            >
              <div>
                Planter meets all of your plant diary needs.
              </div>
              It is a beautiful, intuitive mobile application, which helps you taking care of your plants.
            </Typography>
            <Box sx={{ height: 48 }} />
            <IosStoreButton />
            <Box sx={{ height: 48 }} />
            <AndroidStoreButton />
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div >
    </main>
  );
}