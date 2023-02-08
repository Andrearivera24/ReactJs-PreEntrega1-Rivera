

  import { ChevronDownIcon, } from '@chakra-ui/icons';
  import { Flex,} from '@chakra-ui/react';
  import {
  
    Container,
    Heading,
    Avatar,
    Menu,
    Box,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
   
  } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import CartWidget from './CartWidget';
import logo from '../assets/logo.jpg';


const NavBar =() =>{
return <div>
<Container className='navBar' bg='#5015bd' maxW="100%" h='60px'>
  
  <Menu>
   <Flex alignItems ='center' justifyContent='space-around' gap= '2'>
      <Avatar src={logo} />
      <Heading  mr='800px' color='whitesmoke' mt='auto' className='navBar'> SpanishByHispanics </Heading> 
      <MenuButton colorScheme='purple' mt='10px' as={Button } rightIcon={<ChevronDownIcon />}>
       Courses
      </MenuButton>
       <MenuList> 
         <MenuItem>Verbal Tenses</MenuItem>
         <MenuItem>Most Used Phrases</MenuItem>
         <MenuItem>Learn 3.500 Spanish Words</MenuItem>
       </MenuList>
    <CartWidget/>
  </Flex>

 </Menu>

</Container>


           </div>

};
export default NavBar;