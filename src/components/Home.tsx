import React from 'react';
// import { Link } from 'react-router-dom';
import Header from '../layouts/Header';
import PopularSeries from './PopularSeries';
import Footer from '../layouts/Footer';
import Multimedia from './Multimedia';
const Home = () => (
  <>
    <Header />
    <PopularSeries />
    <Multimedia />
    <Footer />
  </>
);

export default Home;
