"use client";

import { Container, Icon } from "@chakra-ui/react";
import Header from "../components/Header";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function FirstPage() {
  return (
    <>
      <Container ml={0} display={"flex"} alignItems={"center"}>
        <HamburgerIcon width={30} height={30} />
        <Header />
      </Container>
    </>
  );
}
