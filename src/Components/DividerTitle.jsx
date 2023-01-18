import { Divider } from '@chakra-ui/react';
import React from 'react';

const DividerTitle = () => {
    return (
        <Divider
            border={'8px'} 
            borderRadius={'10px'}
            borderColor={'#003cff'}
            mb={{ base:'8',md:'10' }}
            mt={'10px'}
        />
    );
}

export default DividerTitle;
