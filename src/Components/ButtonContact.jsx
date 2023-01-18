import { Button, Flex, Link } from '@chakra-ui/react';
import React from 'react';

const ButtonContact = ({ icon, text, href }) => {
    return (
        <Link
            target={'_blank'}
            href={href}
            textDecoration={'none'}
            bg={'primary.button'}
            color={'font.dark'}
            _hover={{ bg: '#1439cc', color:'font.dark' }}
            fontWeight={'500'}
            border={'none'}
            width={{ base: '100%', sm:'60%', lg: 'auto' }}
            px={'16'}
            py={'3'}
            borderRadius={'lg'}
        >
            <Flex
                justify={'center'}
                align={'center'}
                gap={'2'}
                fontSize={'lg'}
            >
                {icon}
                {text}
            </Flex>
        </Link>
    );
}

export default ButtonContact;
