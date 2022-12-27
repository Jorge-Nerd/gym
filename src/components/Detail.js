import React from "react";

import { Stack, Typography, Button } from "@mui/material";

import BodyPartImg from "../assets/icons/body-part.png";
import TargetImg from "../assets/icons/target.png";
import EquipmentImg from "../assets/icons/equipment.png";


const Detail = ({ exerciceDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciceDetail;

  const extraDetail = [
    {
      icon: BodyPartImg,
      name: bodyPart,
    },
    {
      icon: TargetImg,
      name: target,
    },
    {
      icon: EquipmentImg,
      name: equipment,
    },
  ];
  console.log(gifUrl);
  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" fontWeight="bold" textTransform='capitalize'>
          {name}
        </Typography>
        <Typography variant="h6">
          Exercices keep you strong. <span sx={{ textTransform:'capitalize', fontWeight:'bold'}}>{name}</span>  {""}
          is one of the best exercices to target your {target}. It will help you
          improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#FFF2DB",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px" }}
              />
            </Button>
            <Typography sx={{ textTransform:'capitalize', fontWeight:'bold'}}>{item.name}</Typography>
          </Stack>
        ))};
        
      </Stack>
    </Stack>
  );
};

export default Detail;
