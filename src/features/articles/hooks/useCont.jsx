
import React, { createContext, useContext, useState } from "react";
import { Paper, Typography, Stack, Button } from "@mui/material";

//  Creamos el contexto
const UserContext = createContext();


const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Mariana", role: "Estudiante" });

  const changeName = (name) => {
    setUser({ name, role: name === "Carlos" ? "Instructor" : "Estudiante" });
  };

  return <UserContext.Provider value={{ user, changeName }}>{children}</UserContext.Provider>;
};


const UserControls = () => {
  const { changeName } = useContext(UserContext);

  return (
    <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
      <Button variant="contained" color="primary" onClick={() => changeName("Ana")}>
        Ana
      </Button>
      <Button variant="contained" color="secondary" onClick={() => changeName("Carlos")}>
        Carlos
      </Button>
      <Button variant="contained" color="success" onClick={() => changeName("Mariana")}>
        Mariana
      </Button>
    </Stack>
  );
};


const UserInfo = () => {
  const { user } = useContext(UserContext);

  return (
    <Typography variant="h6" sx={{ fontWeight: 600 }}>
      {user.name} - {user.role}
    </Typography>
  );
};


export const UseCont = () => {
  return (
    <UserProvider>
      <Paper
        elevation={6}
        sx={{
          width: 250,
          p: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: 3,
          textAlign: "center",
          bgcolor: "#f0f0f0",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ mb: 2, textTransform: "uppercase", letterSpacing: 1, color: "text.secondary" }}
        >
          useContext
        </Typography>

        <UserControls />
        <UserInfo />
      </Paper>
    </UserProvider>
  );
};