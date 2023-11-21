import { Avatar, Box, Grid, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              N
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={10}>
          <div className="space-y-2">
            <div>
              <p className="font-semibold text-lg">Ram</p>
              <p className="opacity-70">5th April 2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quod
            incidunt numquam nostrum quaerat, fuga omnis repudiandae laboriosam
            aperiam molestias, recusandae perferendis cupiditate perspiciatis
            doloribus facilis, ipsa porro totam iure.
          </p>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductReviewCard;
