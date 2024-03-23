import React from "react";
import { Box, Heading, Flex, Spacer, Link } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
      <Heading as="h1" size="lg">
        Todo App 📝
      </Heading>
      <Spacer />
      <Box>
        <Link mr="4">Home</Link>
        <Link>About</Link>
        <Link ml="4" href="/horses">
          Horses
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
