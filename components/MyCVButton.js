import React from 'react'
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export default function MyCVButton() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box align="center" my={4}>
        <Button
          onClick={onOpen}
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
        >
          My CV
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={0}>
            <Box height="100vh">
              <iframe
                src="/PhanDucSung_Resume.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="My CV"
              />
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
