// functional components dont need to deal with state
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={HeaderStyle}>
      <h1> ToDo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}

const HeaderStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
};
