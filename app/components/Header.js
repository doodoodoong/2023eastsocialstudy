"use client";
import NextLink from "next/link";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

export default function Header({ fontColor }) {
  function BackdropFilters() {
    const innerBoxStlyes = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      boxSize: "full",
      color: "white",
      textShadow: "0 0 20px black",
      fontWeight: "bold",
      fontSize: "20px",
    };
  }
  return (
    <Flex
      gap={"10px"}
      backdropFilter={"auto"}
      backdropBlur={"8px"}
      backdropContrast={"40%"}
      p={"10px"}
    >
      <Text color={fontColor}>2023. 전남동부권사회과연구회</Text>
      <Link
        color={fontColor}
        as={NextLink}
        href="/about"
        style={{ textDecoration: "none" }}
      >
        About
      </Link>
      <Link
        color={fontColor}
        as={NextLink}
        href="/timeline"
        style={{ textDecoration: "none" }}
      >
        TimeLine
      </Link>
      <Link
        color={fontColor}
        as={NextLink}
        href="/result"
        style={{ textDecoration: "none" }}
      >
        Result
      </Link>
      <Link
        color={fontColor}
        as={NextLink}
        href="/contact"
        style={{ textDecoration: "none" }}
      >
        Contact Us
      </Link>
    </Flex>
  );
}
