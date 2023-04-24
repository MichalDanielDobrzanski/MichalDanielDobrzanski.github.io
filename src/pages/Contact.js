import React from 'react';
import { Container } from 'react-bootstrap';
import Button from '@mui/material/Button';

export default function Contact() {
  return (
    <Container>
      <h1>Welcome to My Landing Page</h1>
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
      <p>
        This is a simple landing page created with React and Bootstrap.
      </p>
    </Container>
  );
}

