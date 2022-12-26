import React from "react";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciceCard from "./ExerciceCard";

const Exercices = ({ exercices, setExercices, bodyPart }) => {
  const exercicesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercice = currentPage * exercicesPerPage;

  const indexOfFirstExercice = indexOfLastExercice - exercicesPerPage;

  const currentExercice = exercices.slice(
    indexOfFirstExercice,
    indexOfLastExercice
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scroll({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercicesData = async () => {
      let exercicesData = [];

      if (bodyPart === "all") {
        exercicesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions);
      } else {
        exercicesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions);
      }

      setExercices(exercicesData);
    };
    fetchExercicesData();
  },[bodyPart]);

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
        {currentExercice.map((exercice, index) => (
          <p>
            <ExerciceCard key={index} exercice={exercice} />
          </p>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercices.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercices.length / exercicesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercices;
