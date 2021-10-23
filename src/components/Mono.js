import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import mono from "../imgs/mono1.jpg";
import mono2 from "../imgs/mono2.jpg";
import mono3 from "../imgs/mono3.jpg";
import mono4 from "../imgs/mono4.jpg";
import mono5 from "../imgs/mono5.jpeg";
import mono6 from "../imgs/mono6.jpeg";
import mono7 from "../imgs/mono7.jpg";
import mono8 from "../imgs/mono8.jpg";
import mono9 from "../imgs/mono9.jpg";
import mono10 from "../imgs/mono10.jpg";
import click from "../audio/click.mp3";
import Emoji from "../components/Emoji";

function Mono() {
  const [imagen, setImagen] = useState(mono);
  const handlerChangeImage = () => {
    const monos = [
      mono,
      mono2,
      mono3,
      mono4,
      mono5,
      mono6,
      mono7,
      mono8,
      mono9,
      mono10,
    ];
    let rand = Math.floor(Math.random() * 10);
    setImagen(monos[rand]);
    let audio = new Audio(click);
    audio.play();
    console.log(audio);

  };
  return (
    <div>
      <Card sx={{ maxWidth: 345 }} onClick={handlerChangeImage}>
        <CardActionArea>
          <CardMedia component="img" height="140" alt={imagen} image={imagen} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mono
              <Emoji symbol="👍" label="dedo" />
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Mono;
