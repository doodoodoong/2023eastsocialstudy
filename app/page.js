"use client";
import { Box, Button, Flex, Link, Text, useDisclosure } from "@chakra-ui/react";
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";
import { CSSTransition } from "react-transition-group";
import { NextLink } from "next/link";

export default function Home() {
  const { isOpen, onOpen } = useDisclosure();
  return (
    <Box h={"100vh"} w={"100vw"} pos={"relative"}>
      <VideoBackground videoSrc="/assets/video/background.mp4" />
      <Box
        backdropFilter={"auto"}
        backdropBlur={"8px"}
        backdropContrast={"30%"}
        borderRadius={"lg"}
      >
        <Text fontSize={"4xl"}>2023. 전남동부권사회과연구회</Text>
      </Box>
      <Flex
        w={"100%"}
        h={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Link as={NextLink} href="/home">
          <Button
            bgColor={"black"}
            borderRadius={"full"}
            _hover={{ transform: "scale(5)" }}
          >
            Enter
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
