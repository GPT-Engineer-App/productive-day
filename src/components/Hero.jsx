import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box as="section" textAlign="center" py="8rem">
      <Heading as="h2" size="2xl" mb="4">Welcome to Todo App</Heading>
      <Text fontSize="xl" mb="8">Manage your tasks efficiently!</Text>
      <Button colorScheme="blue" size="lg">Hello</Button>
    </Box>
  );
};

export default Hero;