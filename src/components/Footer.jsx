import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineSend } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['coloumn', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Subscribe to our newsletter
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder="Enter Email here..."
                borderRadius="none"
                border="none"
                outline="none"
                borderBottom={'10px'}
                focusBorderColor="none"
              />
              <Button
                p={'0'}
                colorScheme="purple"
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend />
              </Button>
            </HStack>
          </VStack>
          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              VidVista
            </Heading>
            <Text>All right received</Text>
          </VStack>
          <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
              Social Media
            </Heading>
            <HStack w={'full'} p={'5'} paddingLeft={'95px'}>
              <Button variant={'link'}>
                <a href="https://github.com/shrey0404" target="_blank">
                  <AiFillGithub size={'40%'} />
                </a>
              </Button>
              <Button variant={'link'}>
                <a
                  href="https://www.linkedin.com/in/shreybhatnagar04/"
                  target="_blank"
                >
                  <AiOutlineLinkedin size={'40%'} />
                </a>
              </Button>
              <Button variant={'link'}>
                <a href="https://www.instagram.com/shreyy0412/" target="_blank">
                  <AiFillInstagram size={'40%'} />
                </a>
              </Button>
            </HStack>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
