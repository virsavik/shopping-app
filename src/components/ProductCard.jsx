import React from "react";
import { Paper, Box, Typography, Rating, IconButton } from "@mui/material";
import { Favorite } from "@mui/icons-material";

export default function ProductCard({ id, name, price, imageUrl, stars, sx }) {
  return (
    <Paper m={1} elevation={2} sx={sx}>
      <img
        src={imageUrl}
        alt={name}
        loading="lazy"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <Box display="flex" p={2} flexDirection="column">
        <Typography variant="h6" mb={1}>
          {name}
        </Typography>
        <Typography variant="body2" color="error" mb={1}>
          {price}
        </Typography>
        <Box
          component="div"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <IconButton color="error" aria-label="like" sx={{ height: "24px" }}>
              <Favorite />
            </IconButton>
            <Typography variant="body2">whoo</Typography>
          </Box>
          <Box
            component="div"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Rating
              size="small"
              value={stars}
              sx={{ height: "24px" }}
              readOnly
            />
            <Typography variant="body2">Nhật Bản</Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
