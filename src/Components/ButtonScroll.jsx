import { Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-scroll';

const ButtonScroll = ({link, ...properties}) => {
    return (
        <Link
            to={link}
            smooth={true}
            duration={500}
        >
            <Button
                {...properties}
            >
                View Work
            </Button>
        </Link>
    );
}

export default ButtonScroll;
