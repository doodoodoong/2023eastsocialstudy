"use client";
import { Text } from "@chakra-ui/react";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Text fontSize={"3xl"}>Hello, world</Text>
    </>
  );
}
