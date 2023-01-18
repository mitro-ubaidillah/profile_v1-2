import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';

const CardTech = ({title, img}) => {
    return (
        <Flex
            color={'primary.dark'}
            flexDirection={'column'}
            align={'center'}
            gap={'3'}
            bg={'white'}
            py={'5'}
            px={{base:'2',md:'5'}}
            borderRadius={'2xl'}
        >
            <Img 
                src={img}
                maxWidth={{ base:'50px', md:'45px',lg:'60px' }}
                maxHeight={{ base:'50px', md:'45px',lg:'60px' }}
                objectFit={'contain'}
            />
            <Text
                fontSize={{ base:'18px',md:'20px',lg:'24px' }}
            >
                {title}
            </Text>
        </Flex>
    );
}

export default CardTech;
