import {
  Box,
  Flex,
  Center,
  Text,
  Image,
  Button,
  Divider,
} from "@chakra-ui/react";

export const Home = () => {
  return (
    <Box w="100vw" h="100vh" bgGradient="linear(to-t, gray.300, blue.200)">
      <Flex
        h="100vh"
        flexDir="column"
        align="center"
        justify="space-evenly"
        pt="20"
      >
        <Center>
          <Text
            fontSize={["1.4rem", "1.6rem", "2rem"]}
            fontWeight="900"
            textAlign="center"
          >
            A place where you can exchange, buy and take care of you crypto
            coins
          </Text>
        </Center>
        <Image src="/home-bitcoin.png" alt="Home background" w="40rem" />

        <Button type="button" variant="filled" color="gray.900" bg="blue.300">
          Get Started
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
