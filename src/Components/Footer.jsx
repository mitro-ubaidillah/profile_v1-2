import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
    return (
        <Flex
            borderTop={'1px'}
            borderColor={'font.optional'}
            justify={'center'}
            py={'5'}
        >
            <Box
                alignSelf={'center'}
                color={'white'}
            >
                <Flex
                    flexDirection={'row'}
                    flexBasis={'20%'}
                    justify={'center'}
                >
                    <Text
                        fontSize={'36px'}
                        fontWeight={'600'}
                    >
                        {`<`}
                    </Text>
                    <Text
                        fontSize={'36px'}
                        fontWeight={'700'}
                        ml={'1'}
                        color={'#EA4335'}
                    >
                        {`.`}
                    </Text>
                    <Text
                        fontSize={'36px'}
                        fontWeight={'700'}
                        color={'#34A853'}
                    >
                        {`.`}
                    </Text>
                    <Text
                        fontSize={'36px'}
                        fontWeight={'700'}
                        color={'#4285F4'}
                        mr={'1'}
                    >
                        {`.`}
                    </Text>
                    <Text
                        fontSize={'36px'}
                        fontWeight={'600'}
                    >
                        {`>`}
                    </Text>
                </Flex>
                <Text>
                    Muchamad Mitro U &copy; 2023
                </Text>
            </Box>
        </Flex>
    );
}

export default Footer;
