import React from 'react';
import { Container } from 'react-bootstrap';
import EmailPlanter from '../components/EmailPlanter';

export default function About() {
  return (
    <Container>
      <h1>About</h1>
      <h3>Hello!</h3>
      <p>
        I am a passionate mobile developer, who followed the idea to launch the rich, beautiful mobile app for taking care of plants named Planter
      </p>
      <p>
        I am actively maintaining it it and my goal is to make it even better.
      </p>
      <p>
        I am curious what you think about it!
      </p>
      <p>
        You can share your thoughts with me via this e-mail: <EmailPlanter />
      </p>
      <p>
        For other programming work I invite to <a href='https://github.com/MichalDanielDobrzanski/'>my Github Page</a>
      </p>

      <p />
      <p />
      <p />
    </Container>
  );
}
