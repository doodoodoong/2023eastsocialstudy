"use client";
import { Box, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";

export default function Home() {
  return (
    <Box h={"100vh"} w={"100vw"}>
      <VideoBackground videoSrc="/assets/video/background.mp4" />
      <Header fontColor={"white"} />
      <Text fontSize={"3xl"} color={"white"} zIndex={"1"}>
        Hello, world
      </Text>
    </Box>
  );
}
