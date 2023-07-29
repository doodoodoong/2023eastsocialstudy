"use client";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import VideoBackground from "./components/VideoBackground";
import { NextLink } from "next/link";

export default function Home() {
  return (
    <Box h={"100vh"} w={"100vw"} pos={"relative"}>
      <VideoBackground videoSrc="/assets/video/background.mp4" />
      <Box
        backdropFilter={"auto"}
        backdropBlur={"8px"}
        backdropContrast={"30%"}
        borderRadius={"lg"}
        padding={"2"}
        w={"100%"}
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
            color={"white"}
          >
            Enter
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}
