import React,{useContext} from "react";
import { Stack, Typography } from "@mui/material";
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu'
import Icon from "../assets/icons/gym.png";


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        background: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={()=>{
        setBodyPart(item);
        window.scroll({top:1800, left:100, behavior:'smooth'})
      }}
    >
      <img
        src={Icon}
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTrasform='capitalize' >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
