import { Box, Button, ButtonGroup, Flex, Img, Link, Text } from '@chakra-ui/react';
import React from 'react';
import profile from '../assets/profile.png';
import { HiOutlineDownload } from 'react-icons/hi';
import ButtonScroll from './ButtonScroll';

const Hero = () => {

    return (
        <Flex
            flexDirection={{ base: 'column-reverse', lg: 'row' }}
            align={'center'}
            gap={'20'}
            minHeight={'prose'}
            height={'full'}
            bg={'primary.dark'}
            px={{ base: '20', lg: '20', xl: '48' }}
            py={'20'}
            width={'auto'}
        >
            <Box>
                <Text
                    color={'primary.button'}
                    fontSize={'32px'}
                    fontWeight={'500'}
                >
                    Hi, I'am Muchamad Mitro Ubaidillah
                </Text>
                <Text
                    color={'font.dark'}
                    fontSize={'60px'}
                    fontWeight={'600'}
                    mb={'12'}
                    lineHeight={'58px'}
                >
                    Front End Engineer.
                </Text>
                <Text
                    color={'font.dark'}
                    fontSize={'18px'}
                    fontWeight={'500'}
                    lineHeight={'8'}
                >
                    I'am from Indonesia and I have been working as a Front End Engineer.
                    Proficient in HTML, CSS, Javascript, and modern libraries such as TailwindCSS/Bootstrap and React/Next JS.
                </Text>
                <ButtonGroup
                    mt={'5'}
                >
                    <ButtonScroll 
                        bg={'primary.button'}
                        border={'none'}
                        color={'font.dark'}
                        px={'10'}
                        _hover={{ bg: '#1439cc' }}
                        fontWeight={'500'}
                        link={'projects'}
                    />
                    <Link
                        bg={'transparent'}
                        color={'font.optional'}
                        _hover={{ bg: 'transparent', borderColor: 'font.optional', border: '1px' }}
                        fontWeight={'500'}
                        target={'_blank'}
                        href='https://drive.google.com/uc?export=download&id=181w2bVVvtgaFITjYH4g7-vsouaAbrV9x'
                        px={'15px'}
                        py={'4px'}
                        borderRadius={'md'}
                    >
                        <Flex
                            gap={'2'}
                            align={'center'}
                        >
                            <HiOutlineDownload size={'30'} />
                            Download  Resume
                        </Flex>
                    </Link>
                </ButtonGroup>
            </Box>
            <Box>
                <Img
                    src={profile}
                    borderRadius={'full'}
                    alt='Mitro'
                    maxWidth={'350px'}
                />
            </Box>
        </Flex>
    );
}

export default Hero;
