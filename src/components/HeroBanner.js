import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HerBannerImage from "../assets/images/banner.png";
import { fontSize } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative"
      }}
      px="20px"
    >
      <Typography color="#FF2625" fontWeight="bold" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercices
      </Typography>
      <Button
        href="#exercices"
        variant="contained"
        color="error"
        sx={{ backgroundColor: "#FF2625", padding: "10px" }}
      >
        Explore Exercices
      </Button>
      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: "0.1", display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Explore Exercices
      </Typography>
      <img src={HerBannerImage} alt="BannerImage" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
