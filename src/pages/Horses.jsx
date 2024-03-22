import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Horses = () => {
  return (
    <Box as="section" py="4rem">
      <Heading as="h2" size="xl" mb="4">
        Horse Services
      </Heading>
      <Text fontSize="lg">We offer a variety of services for horses, including:</Text>
      <ul>
        <li>Boarding</li>
        <li>Training</li>
        <li>Riding Lessons</li>
        <li>Grooming</li>
      </ul>
    </Box>
  );
};

export default Horses;
