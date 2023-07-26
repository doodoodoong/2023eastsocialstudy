"use client";
import NextLink from "next/link";
import { Flex, Link, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex gap={"10px"} margin={"5px"}>
      <Text>2023. 전남동부권사회과연구회</Text>
      <Link as={NextLink} href="/about">
        About
      </Link>
    </Flex>
  );
}
