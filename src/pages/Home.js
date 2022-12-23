import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { Search } from "@mui/icons-material";

import HeroBanner from "../components/HeroBanner";
import SearchExercices from "../components/SearchExercices";
import Exercices from "../components/Exercices";

const Home = () => {
  const [exercices, setExercices] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");
  return (
    <Box>
      <HeroBanner />
      <SearchExercices
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercices={setExercices}
      />
      <Exercices
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercices={setExercices}
      />
    </Box>
  );
};

export default Home;
