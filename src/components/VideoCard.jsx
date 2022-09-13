import React from "react";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  console.log(videoId, snippet);
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        border: "1px solid black",
        boxShadow: "none",
        borderRadius: 0,
        hover:"1",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : ""}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "white", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : ""}>
          <Typography variant="subtitle1" fontWeight="bold" color="black">
   
            {snippet?.title.slice(0, 60)}
           
          </Typography>
        </Link>
        
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : ""}>
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
          
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
