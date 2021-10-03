import {
  useColorMode,
  Flex,
  Heading, 
  Stack,
  Text,
} from '@chakra-ui/react';
import Head from 'next/head';
import Container from '../components/Container';

export default function Index() {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400"
  }

  return (
    <Container>
      <Head>
        <title>Home - John Brix Francisco</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justify="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxW="700px"
        px={2}
      >
        <Flex
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxW="700px"
        >
          <Heading
            mb={2}
          >
            Hi! I'm John Brix Francisco
          </Heading>
          <Text
            color={colorSecondary[colorMode]}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, dolorem labore porro eligendi odit tenetur officia amet. Sit, ipsa totam. Laudantium, dolorem labore porro eligendi odit tenetur officia amet. Sit, ipsa totam. Laudantium, dolorem labore porro eligendi odit tenetur officia amet. Sit, ipsa totam.
          </Text>
        </Flex>
      </Stack>
    </Container>
  )
}
