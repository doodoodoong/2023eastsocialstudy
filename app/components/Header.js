"use client";
import NextLink from "next/link";
import { Box, Flex, Link, Text } from "@chakra-ui/react";

export default function Header({ fontColor }) {
  return (
    <Flex
      gap={"10px"}
      backdropFilter={"auto"}
      backdropBlur={"8px"}
      backdropContrast={"40%"}
      p={"10px"}
      borderRadius={"lg"}
    >
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
