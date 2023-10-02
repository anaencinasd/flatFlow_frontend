
import Navbar from "../../Components/Atoms/NavBar";
import Header from "../../Components/Atoms/Header";
import { useEffect, useState } from "react";
import Nav from "../../Components/BottomNavigation";
import { useTheme, Container } from "@mui/material";
import GroupDataService from "./../../../Config/Service/group.service";
import { useParams } from "react-router-dom";
import "./showgroups.css";
import UserList from "../../Components/Atoms/UserList";
import PopUp from "../../Components/Atoms/PopUp"; 

export default function ShowGroup(props) {
  const theme = useTheme();
  const [group, setGroup] = useState([]);
  const { id } = useParams();
  const [openAddUserDialog, setOpenAddUserDialog] = useState(false); 

  useEffect(() => {
    GroupDataService.get(id)
      .then((response) => {
        setGroup(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener información del grupo", error);
      });
  }, [id]);

  const handleOpenAddUserDialog = () => {
    setOpenAddUserDialog(true);
  };

  const handleCloseAddUserDialog = () => {
    setOpenAddUserDialog(false);
  };

  return (
    <>
      <Navbar />
      <Header subtitle={group ? group.name : "Cargando el nombre del grupo"} />
      <div className="circularImage">
        <img src={group ? group.picprofile : ""} alt={group.name} />
      </div>

      <Container>
        <UserList
          groupId={id}
          openAddUserDialog={openAddUserDialog}
          onOpenAddUserDialog={handleOpenAddUserDialog}
          onCloseAddUserDialog={handleCloseAddUserDialog}
        />
      </Container>
      <PopUp
        open={openAddUserDialog}
        onClose={handleCloseAddUserDialog}
        groupId={id}
      />
      <Nav />
    </>
  );
}

