import { Box, Card, Flex, Heading, Link, Text } from '@chakra-ui/react';
import React from 'react';

const CardProject = ({ bgCard, title, description, link }) => {
    return (
        <Card
            backgroundImage={`url(${bgCard})`}
            backgroundPosition={'center'}
            backgroundSize={'cover'}
            backgroundRepeat={'no-repeat'}
            border={'none'}
            height={'250px'}
            color={'white'}
        >
            <Link
                target={'_blank'}
                href={link}
                textDecoration={'none'}
                background={'transparent'}
                _hover={{ bg: '#2653f4cd', color: 'white' }}
                color={'transparent'}
                borderRadius={'md'}
            >
                <Flex
                    height={'250px'}
                    justify={'center'}
                    align={'center'}
                >
                    <Box
                        textAlign={'center'}
                    >
                        <Text
                            flexBasis={'100%'}
                            fontSize={'36px'}
                            fontWeight={'500'}
                        >
                            {title}
                        </Text>
                        <Text>
                            {description}
                        </Text>
                    </Box>
                </Flex>
            </Link>
        </Card>
    );
}

export default CardProject;
