import React, { useEffect } from "react";
import Nav from "../../Components/BottomNavigation";
import Navbar from "../../Components/Atoms/NavBAr";
import Header from "../../Components/Atoms/Header";
import { Container, Typography, Paper, useTheme, Button } from "@mui/material";
import { useState } from "react";
import UserDataService from "./../../../Config/Service/user.service";
import { Link } from "react-router-dom";

export default function IndexGroup() {
  const theme = useTheme();
  const [userGroups, setUserGroups] = useState([]);

  useEffect(() => {
    UserDataService.getGroupsForUser()
      .then((response) => {
        setUserGroups(response.data.groups);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener los grupos para el usuario", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Header subtitle="Tus grupos" />
      <Container
        sx={{
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {userGroups && userGroups.length === 0 ? (
          <Typography variant="subtitle1">
            El usuario no está en ningún grupo.
          </Typography>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            {userGroups.map((group, index) => (
              <Link key={index} to={`/groupdetail/${group.id}`}>
                <Paper
                  key={index}
                  elevation={3}
                  sx={{
                    width: "150px",
                    height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    margin: "16px",
                    backgroundColor: theme.palette.secondary.main, 
                    backgroundImage: `url(${group.picprofile})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "8px",
                    borderRadius: "8px",
                    color: theme.palette.primary.contrastText, 
                    position: "relative", 
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: `rgba(17, 28, 36, 0.5)`, 
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {group.name}
                  </div>
                </Paper>
              </Link>
            ))}
          </div>
        )}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "150px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "16px",
              backgroundColor: theme.palette.background.default,
            }}
          >
            <Link to="/newgroup">
              <Button
                variant="outlined"
                color="primary"
                size="large"
                startIcon={<span>+</span>}
                style={{ border: "none" }}
              >
                Crear Nuevo Grupo
              </Button>
            </Link>
          </Paper>
        </div>
      </Container>
      <Nav />
    </>
  );
}
