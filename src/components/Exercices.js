import React from "react";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercices = ({ exercices, setExercices, bodyPart }) => {
  console.log(exercices)
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" component="h4" mb="46px">
        Show Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercices.map((exercice, index) => (
          <p key={exercice.name}>{exercice.name}</p>
        ))}
      </Stack>
    </Box>
  );
};

export default Exercices;
