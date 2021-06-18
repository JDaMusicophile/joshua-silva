import { Button, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,} from '@chakra-ui/react'

import galleries from '../gallery.json'



function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
          
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            {galleries.map(gallery => (
                <div key={product.name} className={styles.product}>
                <ModalBody>
            
                
                {gallery.name}
                
                </ModalBody>
                </div>
            ))}
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Secondary Action</Button>
            </ModalFooter>
           
          </ModalContent>
        </Modal>
      </>
    )
  }