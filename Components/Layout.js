import { useState } from 'react';
import { Flex, Box, Text, useColorMode} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon, PhoneIcon } from '@chakra-ui/icons';
import Link from 'next/Link';
import Image from 'next/image'
import DarkModeSwitch from './DarkModeSwitch';

const MenuItem = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

const Header = (props) => {
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);
  return (
    

    <Flex
      mb={8}
      p={8}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
    >
    <Flex>    
        <Image
        src="/Josh_Logo.png"
        alt="Author Logo"
        width={45}
        height={45}/>
        
        <DarkModeSwitch/>
    </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

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
          
          <MenuItem to="/">Home</MenuItem>
          <MenuItem to="/Contact">Contact</MenuItem>
          <MenuItem to="/About">About</MenuItem>
          <MenuItem to="/More" isLast>
            More
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;