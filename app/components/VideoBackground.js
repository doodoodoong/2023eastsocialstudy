"use client";

import { Box } from "@chakra-ui/react";

export default function VideoBackground({ videoSrc }) {
  return (
    <>
      <Box
        position={"fixed"}
        top={"0"}
        left={"0"}
        zIndex={"-1"}
        w={"100%"}
        h={"100%"}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </>
  );
}
