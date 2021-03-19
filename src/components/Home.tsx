import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import Popular from './Popular';
import Footer from '../layouts/Footer';
import Movies from './Movies';

const Home = () => (
  <div className="app">
    <Header />
    <Popular />
    <Movies />
    <Footer />
  </div>
);

export default Home;
