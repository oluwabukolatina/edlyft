import React from 'react';
// import { Link } from 'react-router-dom';
import PopularSeries from './PopularSeries';
import Footer from '../layouts/Footer';
import Multimedia from './Multimedia';
const Home = () => (
  <>
    <PopularSeries />
    <Multimedia />
    <Footer />
  </>
);

export default Home;
