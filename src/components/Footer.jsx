import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" py="2rem" textAlign="center" borderTop="1px" borderColor="gray.200">
      <Text>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;