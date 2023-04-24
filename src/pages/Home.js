import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function PlanterHome() {
  return (
    <main>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Welcome to Oscillator Michał Dobrzański Landing Page
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="text.secondary"
          paragraph
        >
          Please navigate to the dedicated section
        </Typography>
      </Container>
    </main>
  );
}