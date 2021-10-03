import Link from 'next/link';
import { 
    useColorMode,
    Button,
    Box,
    Flex
} from '@chakra-ui/react';
import DarkModeSwitch from "./DarkModeSwitch";

const Container = ({ children }) => {
    const { colorMode } = useColorMode();

    const bgColor = {
        light: "white",
        dark: "#171717"
    }

    const navBorderColor = {
        light: "1px solid black",
        dark: "1px solid white"
    }

    const color = {
        light: "black",
        dark: "white"
    }

    return (
        <>
            <Flex
                as="nav"
                top="0"
                px={[2, 6, 6]}
                py={2}
                my={[0, 0, 8]}
                mx={[0, 0, "auto"]}
                zIndex="10"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="800px"
                minWidth="356px"
                width="100%"
                bg={bgColor[colorMode]}
                backdropFilter="saturate(180%) blur(20px)"
                pos="sticky"
                transition="height .5s line-height .5s"
                borderBottom={navBorderColor[colorMode]}
            >
                <Box>
                    <Link href="/" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                            m={[1, 2, 4]}
                            width="60px"
                            borderRadius="none"
                            className="nav-link"
                            _hover={{
                                background: "none",
                            }}
                        >
                            Home
                            <Box 
                                height="1.5px"
                                width={0}
                                position="absolute"
                                bottom={0}
                                left={0}
                                overflow="hidden"
                                background={color[colorMode]}
                                transition= "width .3s ease-out"
                                sx={{
                                    ".nav-link:hover &": {
                                        width: "100%",
                                        transition: "width .8s ease-out"
                                    },
                                }}
                            />
                        </Button>
                    </Link>
                    <Link href="/blog" passHref>
                        <Button
                            as="a"
                            variant="ghost"
                            p={[1, 2, 4]}
                            m={[1, 2, 4]}
                            width="60px"
                            borderRadius="none"
                            className="nav-link"
                            _hover={{
                                background: "none",
                            }}
                        >
                            Blog
                            <Box 
                                height="1.5px"
                                width="0px"
                                position="absolute"
                                bottom={0}
                                left={0}
                                overflow="hidden"
                                background={color[colorMode]}
                                transition= "width .3s ease-in-out"
                                sx={{
                                    ".nav-link:hover &": {
                                        width: "100%",
                                        transition: "width .8s ease-in-out"
                                    },
                                }}
                            />
                        </Button>
                    </Link>
                    
                </Box>
                <DarkModeSwitch />
            </Flex>
            <Flex
                as="main"
                justifyContent="center"
                flexDirection="column"
                bg={bgColor[colorMode]}
                color={color[colorMode]}
                px={[0, 4, 4]}
                mt={[4, 8, 8]}
            >
                {children}
            </Flex>
        </>
    )
}

export default Container;