import WidgetContainer from "components/WidgetContainer";
import FlexBetween from "components/FlexBetween";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Padding } from "@mui/icons-material";

const Advert = () => {
  const adverts = [
    {
      company: "Swift Motors",
      url: "www.swiftmotors.com",
      description: "Brand new cars at unbeatable prices!",
      image:
        "https://media.istockphoto.com/id/1407762380/photo/yellow-lit-engine-error-sign-on-car-dashboard-close-up.jpg?s=612x612&w=0&k=20&c=Il60hkQKKtaB38uMl3ZWjuumRzpBx64DTWYyoDZbWHw=",
    },
    {
      company: "Green Thumbs",
      url: "www.greenthumbs.com",
      description: "Transform your space with beautiful plants!",
      image:
        "https://media.istockphoto.com/id/1370829832/photo/unrecognizable-woman-working-in-greenhouse-shop-choosing-at-taking-young-plant-in-pot-medium.jpg?s=612x612&w=0&k=20&c=aQmkW9PbiBF6n6La_40pEwphkNGZj0CGVobQgE0zBLI=",
    },
    {
      company: "Tech Savvy",
      url: "www.techsavvy.com",
      description: "Stay ahead of the game with cutting-edge tech!",
      image:
        "https://media.istockphoto.com/id/1350722246/photo/server-room-background.jpg?s=612x612&w=0&k=20&c=f6CoZ-PmbMo5zCsRPAP9B4tdwS8yvkSKBnCfC3GRmqU=",
    },
  ];
  const randomAdvert = adverts[Math.floor(Math.random() * adverts.length)];

  return (
    <WidgetContainer>
      <Typography variant="subtitle2" sx={"fontWeight:500px"} pb="10px">
        Sponsored
      </Typography>
      <Box borderRadius={"10px"} width="12rem" overflow="hidden">
        <img src={randomAdvert.image} width="100%" height="auto" alt="advert" />
      </Box>
      <FlexBetween>
        <Box>{randomAdvert.company}</Box>
        <Box color="grey">{randomAdvert.url}</Box>
      </FlexBetween>
      <Box color="grey">{randomAdvert.description}</Box>
    </WidgetContainer>
  );
};

export default Advert;
