import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import CardTech from '../Components/CardTech';
import DividerTitle from '../Components/DividerTitle';
import { tech } from '../Utils/Tech';
import { dataProject } from '../Utils/Projects';
import CardProject from '../Components/CardProject';
import { MdOutlineVerticalAlignTop } from 'react-icons/md';
import { contact } from '../Utils/Contact';
import ButtonContact from '../Components/ButtonContact';
import { animateScroll as scroll } from 'react-scroll';

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
            <Box
                px={'20'}
                pb={'20'}
                align={'center'}
                width={{ base: '100%', lg: '70%' }}
                mx={'auto'}
                my={'28'}
            >
                <Text
                    fontSize={'36px'}
                    color={'font.optional'}
                    fontWeight={'500'}
                    id='contact'
                >
                    Contact Me
                </Text>
                <DividerTitle />
                <Text
                    fontSize={'20px'}
                    fontWeight={'500'}
                    color={'white'}
                    mb={{ base: '16', md: '20' }}
                    width={{ base: '100%', lg: '80%' }}
                >
                    Jl. Sulawesi RT 02 RW 01, Kel. Klampok, Kec. Sananwetan, Kota Blitar, Jawa Timur, Indonesia, 66136
                </Text>
                <Flex
                    gap={{ base: '5', lg: '10' }}
                    justify={'center'}
                    flexWrap={'wrap'}
                >
                    {
                        contact.map(data => (
                            <ButtonContact {...data} key={data.id} />
                        ))
                    }
                </Flex>
                <Button
                    mt={'10'}
                    onClick={() => scroll.scrollToTop()}
                    borderRadius={'full'}
                    width={'50px'}
                    height={'50px'}
                    p={'2'}
                    bg={'primary.button'}
                    border={'none'}
                    _hover={{ bg: '#1439cc' }}
                >
                    <MdOutlineVerticalAlignTop
                        size={'35'}
                        color={'white'}
                    />
                </Button>
            </Box>
            <Footer />
        </Box>
    );
}

export default Home;
