import React, { useEffect, useState } from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercices = () => {
  const [search, setSearch] = useState("");
  const [exerceices, setExercices] = useState([]);
  const[bodyParts, setBodyParts]= useState([])

  useEffect(()=>{
    const fetchExerciceData= async ()=>{
      const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts('all', ...bodyPartsData)
    }
    fetchExerciceData();
  },[])

  const handleSearch = async () => {
    if (search) {
      const exerciceData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercice = exerciceData.filter((exercice) => {
        exercice.name.toLocaleLowerCase().includes(search) ||
          exercice.bodyPart.toLocaleLowerCase().includes(search) ||
          exercice.target.toLocaleLowerCase().includes(search)
      });
      setSearch("");
      setExercices(searchedExercice)
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercices You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "40px",
          }}
          type="text"
          height="76px"
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
          placeholder="Search Exercices"
          value={search}
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
        <Box sx={{position:'relative', width:'100%', p:'20px'}}>
          <HorizontalScrollbar data={bodyParts} />
        </Box>
      </Box>
    </Stack>
  );
};

export default SearchExercices;
