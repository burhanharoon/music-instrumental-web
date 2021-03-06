import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { BsTools } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';

// const data = {
//   imageURL:
//     'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
//   name: 'Wayfarer Classic',
//   price: 4.5
// };



function Card({ name, price, image }) {
  console.log('name ', name, price, image)
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative">


        <Image
          src={'acousticGuitar_512x512.jpg'}
          alt={`Picture of ${name}`}
          roundedTop="lg"
          height={300}
          width={300}
          style={{ objectFit: 'cover' }}

        />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {/* {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )} */}
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated>
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={'top'}
              color={'gray.800'}
              fontSize={'1.2em'}>
              <chakra.a href={'#'} display={'flex'}>
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">

            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                $
              </Box>
              {price}
            </Box>
          </Flex>
          <Button onClick={onOpen}>Description</Button>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Item</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text count={2} >Enter Text Here </Text>
              </ModalBody>

              <ModalFooter>
                <Button variantColor="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button as="a" href={'../packages'} leftIcon={<BsTools />} variant="ghost">Add-on Services</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Flex>
  );
}

export default Card;

// Front-End
// Card is dedicated to the products that are showing in the categories. 
// This is the card layout  and modal 