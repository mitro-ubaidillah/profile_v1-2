import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <Flex
            px={{ base: '10', lg: '20' }}
            py={'3'}
            justify={'space-between'}
            flexWrap={'wrap'}
            color={'white'}
            align={'center'}
            borderBottom={'1px'}
            borderColor={'font.optional'}
        >
            <Flex
                flexDirection={'row'}
                flexBasis={'20%'}
            >
                <Text
                    fontSize={'24px'}
                    fontWeight={'600'}
                >
                    {`<`}
                </Text>
                <Text
                    fontSize={'24px'}
                    fontWeight={'700'}
                    ml={'1'}
                    color={'#EA4335'}
                >
                    {`.`}
                </Text>
                <Text
                    fontSize={'24px'}
                    fontWeight={'700'}
                    color={'#34A853'}
                >
                    {`.`}
                </Text>
                <Text
                    fontSize={'24px'}
                    fontWeight={'700'}
                    color={'#4285F4'}
                    mr={'1'}
                >
                    {`.`}
                </Text>
                <Text
                    fontSize={'24px'}
                    fontWeight={'600'}
                >
                    {`>`}
                </Text>

            </Flex>

            <Flex
                flexBasis={'80%'}
                gap={'10'}
                justify={'flex-end'}
            >
                <Link
                    to='tech'
                    smooth={true}
                    duration={500}
                    _hover={{ color: 'primary.light' }}
                >
                    <Text
                        as={'a'}
                        cursor={'pointer'}
                    >
                        Tech Stack
                    </Text>
                </Link>
                <Link
                    to='projects'
                    smooth={true}
                    duration={600}
                    _hover={{ color: 'primary.light' }}

                >
                    <Text
                        as={'a'}
                        cursor={'pointer'}
                    >
                        Projects
                    </Text>
                </Link>
                <Link
                    to='contact'
                    smooth={true}
                    duration={800}
                    _hover={{ color: 'primary.light' }}
                >
                    <Text
                        as={'a'}
                        cursor={'pointer'}
                    >
                        Contact Me
                    </Text>
                </Link>
            </Flex>

        </Flex>
    );
}

export default Navbar;
