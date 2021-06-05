import React, { useState } from 'react';
import { Flex, Box,  Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure, HStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image'; 
import DarkModeSwitch from './DarkModeSwitch';
import NextLink from 'next/link';
import {SocialIcon } from 'react-social-icons';
import styles from '../styles/Home.module.css'


const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    

    <Flex
      mb={8}
      p={1}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bgColor='black'
    >
    <Flex>    
        <Image
        src="/Josh_Logo_White.png"
        alt="Author Logo"
        width={45}
        height={45}/>
        
        <DarkModeSwitch/>
    </Flex>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        flexBasis={{ base: '100%', md: 'auto' }}
      >
        
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen} alignSelf="flex-end">
          <HamburgerIcon/>
          </Button>
          <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize='3xl'>Menu</DrawerHeader>

          <DrawerBody>
            <Flex flexDir="column" alignContent="flex-start" >
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/About" passHref>
                <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                  About
                </Button>
              </NextLink>
              <NextLink href="/Contact" passHref>
                <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                  Contact
                </Button>
              </NextLink>
              <NextLink href="/More" passHref>
                <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                  More
                </Button>
              </NextLink>
            </Flex>
          </DrawerBody>

          <DrawerFooter>
          
          <footer className={styles.footer}>
            <HStack>
            ReactDOM.render(<SocialIcon url="https://twitter.com/JDaMusicophile"/>, document.body);
            ReactDOM.render(<SocialIcon url="https://www.instagram.com/j_damusicophile/"/>, document.body);
            ReactDOM.render(<SocialIcon url="https://www.facebook.com/JDaMusicophile/"/>, document.body);
            </HStack>
          </footer>
         
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
          
          
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;