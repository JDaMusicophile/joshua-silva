import React, { useState, useContext } from 'react';
import { Flex, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Button, useDisclosure, HStack } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Image from 'next/image'; 
import DarkModeSwitch from './DarkModeSwitch';
import NextLink from 'next/link';
import {SocialIcon } from 'react-social-icons';
import styles from '../styles/Home.module.css';
import AuthContext from '../Components/Context/AuthContext'


const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const { user, logoutUser } = useContext(AuthContext)

  return (
    

    <Flex
      p={1}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      bgColor='black'
    >
    <Flex>  
        <a href="/">  
        <Image
        src="/Josh_Logo_White.png"
        alt="Author Logo"
        width={45}
        height={45} />
        </a>
        
        <DarkModeSwitch/>
    </Flex>

             
        <Flex
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
        >
          <div>
      <Menu>
        <MenuButton as={Button} colorScheme="red">
          Profile
        </MenuButton>
        <MenuList>
          <MenuGroup title="Profile">
            {user ? (
              <MenuItem as="a" href="/account" >
                {user.email}
              </MenuItem>
            ) : (
                <MenuItem as="a" href="/login">
                  Log in
                </MenuItem>
            )}
            
            
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Options">
            
              <MenuItem as="a" href="https://github.com/JDaMusicophile/joshua-silva">Source Code</MenuItem>
              <MenuItem as="a" onClick={logoutUser}><a>Logout</a></MenuItem>
  
          </MenuGroup>
        </MenuList>
      </Menu>
        

      </div> &nbsp;&nbsp;

          <Button ref={btnRef} bgColor="teal" onClick={onOpen} alignSelf="flex-end">
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
            ReactDOM.render(<SocialIcon url="https://github.com/JDaMusicophile"/>, document.body);

            </HStack>
          </footer>
         
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
      
      </Flex>     

      
      
    </Flex>
  );
};

export default Header;