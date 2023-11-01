import { Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const Videos = () => {
  return (
    <>
      <Stack direction={['coloumn', 'row']} h={'100vh'}>
        <VStack w={'full'}>
          <video
            src=""
            controls
            controlsList="nodownload"
            style={{
              width: '100%',
            }}
          ></video>
          <VStack alignItems={'flex-start'} p={'8'} w={'full'}>
            <Heading>Sample Video 1</Heading>
            <Text>dljjlfjdkdfjdkdfjbdjbdjfbljljljljjljlj</Text>
          </VStack>
        </VStack>
        <VStack w={['full', 'xl']}></VStack>
      </Stack>
    </>
  );
};

export default Videos;
