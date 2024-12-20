import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsList from '../../features/posts/PostsList'; 
import Container from 'react-bootstrap/Container';

function Home() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<PostsList />} />
      </Routes>
    </Container>
  );
}

export default Home;
