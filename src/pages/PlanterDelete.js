import React from 'react';
import { Container } from 'react-bootstrap';
import EmailPlanter from '../components/EmailPlanter.js';

export default function PlanterDelete() {
  return (
    <Container>
      <h2>Delete Planter account</h2>
      <p>In order to delete your account please write a request to the following e-mail address: <EmailPlanter /></p>
    </Container>
  );
}

