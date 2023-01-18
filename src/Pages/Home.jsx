import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <Box
            bg={'primary.dark'}
        >
           <Navbar />
           <Hero />
           <Footer />
        </Box>
    );
}

export default Home;
