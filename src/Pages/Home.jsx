import { Box, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import CardTech from '../Components/CardTech';
import DividerTitle from '../Components/DividerTitle';
import { tech } from '../Utils/Tech';
import { dataProject } from '../Utils/Projects';
import CardProject from '../Components/CardProject';

const Home = () => {
    return (
        <Box
            bg={'primary.dark'}
        >
            <Navbar />
            <Hero />
            <Box
                px={{ base: '10', lg: '20' }}
                pb={'20'}
            >
                <Text
                    fontSize={'36px'}
                    color={'font.optional'}
                    fontWeight={'500'}
                    id='tech'
                >
                    Tech Stack
                </Text>
                <DividerTitle />
                <Grid
                    templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }}
                    gap={{ base: '3', lg: '8' }}
                    mx={{ base: '3', md: '8', lg: '12', xl: '20' }}
                    justifyContent={'center'}
                >
                    {
                        tech.map(data => (
                            <CardTech
                                key={data.id}
                                {...data}
                            />
                        ))
                    }
                </Grid>
            </Box>
            <Box
                px={'20'}
                pb={'20'}
            >
                <Text
                    fontSize={'36px'}
                    color={'font.optional'}
                    fontWeight={'500'}
                    id='projects'
                >
                    Projects Personal
                </Text>
                <DividerTitle />
                <Grid
                    templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
                    gap={'10'}
                >
                    {
                        dataProject.map(data => (
                            <CardProject
                                {...data}
                                key={data.id}
                            />
                        ))
                    }
                </Grid>
            </Box>
            <Footer />
        </Box>
    );
}

export default Home;
