import React from 'react';
import { Container } from 'react-bootstrap';

export default function Home() {
  return (
      <Container>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={"https://i.imgur.com/MK3eW3As.jpg"} alt="Image" style={{ width: '100%' }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{"First line of text"}</p>
            <p style={{ fontSize: '1.5rem', margin: 0 }}>{"First line of text"}</p>
          </div>
        </div>

        <h1>Welcome to My Landing Page</h1>
        <p>
          This is a simple landing page created with React and Bootstrap.
        </p>
      </Container>
  );
}