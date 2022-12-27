import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciceVideos from "../components/ExerciceVideos";
import SimilarExercices from "../components/SimilarExercices";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciceDetail = () => {
  const [exerciceDetail, setExerciceDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchExercicesData = async () => {
      const exerciceDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/channel/about";

      const exerciceDetailData = await fetchData(
        `${exerciceDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciceDetail(exerciceDetailData);
    };
    fetchExercicesData();
  }, [id]);
  return (
    <Box>
      <Detail exerciceDetail={exerciceDetail} />
      <ExerciceVideos />
      <SimilarExercices />
    </Box>
  );
};

export default ExerciceDetail;
