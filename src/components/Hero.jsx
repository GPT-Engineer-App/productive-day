import React, { useState } from "react";
import { Box, Heading, Text, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from "@chakra-ui/react";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState("Hello");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleButtonTextChange = (e) => setButtonText(e.target.value);

  return (
    <Box as="section" textAlign="center" py="8rem">
      <Heading as="h2" size="2xl" mb="4">
        Welcome to Todo App
      </Heading>
      <Text fontSize="xl" mb="8">
        Manage your tasks efficiently!
      </Text>
      <Button colorScheme="blue" size="lg" onClick={openModal}>
        {buttonText}
      </Button>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Button Text</ModalHeader>
          <ModalBody>
            <Input value={buttonText} onChange={handleButtonTextChange} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={closeModal}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Hero;
