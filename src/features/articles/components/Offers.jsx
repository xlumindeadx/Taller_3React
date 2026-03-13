import React from 'react';
import { Favorite } from '../hooks/Favorite';
import { StatusBar } from '../hooks/useOnline';
import { UseSta } from '../hooks/useSta';
import { UseEffect } from '../hooks/useEffect';
import { UseCallback } from '../hooks/useCallback';
import { UseRef } from "../hooks/UseRef";
import { UseReducer } from "../hooks/UseReducer";
import { UseMemo } from "../hooks/useMemo";
import { UseCont } from '../hooks/useCont';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';

export const Offers = () => {

  const components = [
    <StatusBar />,
    <UseSta />,
    <UseEffect />,
    <UseMemo />,
    <UseCont />,
    <UseCallback />,
    <UseRef />,
    <UseReducer />,
    <Favorite />,
  ];

  return (
    <Box sx={{ p: 0, width: "100%" }}>
      <Grid container spacing={3} sx={{ m: 0, width: "100%" }}>
        {components.map((Component, index) => (
          
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: "flex" }}>
            <Box
              sx={{
                width: "100%",
                height: 400,
                border: "1px solid #e0e0e0",
                borderRadius: 2,
                boxShadow: 2,
                p: 2,
                backgroundColor: "black",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                overflow: "auto",
              }}
            >
              {Component}
            </Box>
            
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Offers;