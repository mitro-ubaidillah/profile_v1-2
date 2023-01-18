import { Box, Button, Text } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
    return (
        <Box>
            <Text>Halo guys</Text>
            <Button>
                Primary
            </Button>
            <Text
                fontWeight={'600'}
                fontSize={'30px'}
            >
                Nggak Error
            </Text>
        </Box>
    );
}

export default Home;
