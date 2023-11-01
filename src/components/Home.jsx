import React from 'react';
import {
  Box,
  Container,
  Heading,
  Image,
  Img,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/vimg1.jpeg';
import img3 from '../assets/vimg3.jpeg';
import img4 from '../assets/vimg4.jpeg';
import img5 from '../assets/vsvg.jpeg';
import Header from './Header';

const headingooptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  p: '4',
  tranform: 'translate(-50%,-50%)',
  texttransform: 'uppercase',
  size: '4xl',
};

const Home = () => {
  return (
    <>
      <Header />
      <Box>
        <MyCarousal />

        <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
          <Heading
            texttransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px solid'}
            m={'auto'}
          >
            Services
          </Heading>
          <Stack
            h={'full'}
            p={'4'}
            alignItems={'center'}
            direction={['column', 'row']}
          >
            <Img
              src={img5}
              h={'40,400'}
              filter={'hue-rotate(-100deg)'}
              borderRadius={'200%'}
            />
            <Text
              letterSpacing={'widest'}
              lineHeight={'190%'}
              p={['4', '16']}
              textAlign={'center'}
            >
              Elevate your video streaming experience with our cutting-edge
              video player service. Our platform offers a sleek and
              user-friendly interface, ensuring effortless navigation through
              your video library. Enjoy uninterrupted viewing with enhanced
              playback quality, even for high-definition content. Customize your
              preferences, from subtitles to playback speed, and savor a
              personalized experience. Our video player is designed for
              cross-platform compatibility, so you can access your videos on any
              device, whether it's your computer, tablet, or smartphone.
              Seamlessly stream content from various sources, as we support a
              wide range of video formats and integrate with popular streaming
              platforms.
            </Text>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const MyCarousal = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Img src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingooptions}>
        Unleash Your Imagination
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Img src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingooptions}>
        Your Entertainment Hub
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Img src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingooptions}>
        Quality Videos, Quality Time
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
