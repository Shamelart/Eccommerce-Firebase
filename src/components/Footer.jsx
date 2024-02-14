import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapView from "./MapView";
import Schedules from "./Schedules";

export default function Footer() {
  const [isMapVisible, setIsMapVisible] = useState(false);
  const [isSchedules, setIsSchedules] = useState(false);

  const toggleMap = () => {
    setIsMapVisible(!isMapVisible);
  };

  const toggleSchedules = () => {
    setIsSchedules(!isSchedules);
  };

  return (
    <Box>
      <BottomNavigation
        sx={{
          width: "100%",
          height: "90%",
          bgcolor: "rgb(26, 32, 39)",
          display: "flex",
          marginTop: "auto",
        }}
      >
        <BottomNavigationAction
          sx={{ color: "white" }}
          label="conocenos"
          icon={<RestoreIcon />}
          onClick={toggleSchedules}
        />
        {isSchedules && (
          <Schedules
            TableContainer={
              <div
                style={{ maxWidth: "100%", height: "100vh", margin: "2em" }}
              />
            }
          />
        )}

        <BottomNavigationAction
          sx={{ color: "white" }}
          label="ubicacion"
          icon={<LocationOnIcon />}
          onClick={toggleMap} // Mostrar el mapa cuando se hace clic
        />
        {isMapVisible && (
          <MapView
            MapContainer={
              <div
                style={{ maxWidth: "100%", height: "100vh", margin: "2em" }}
              />
            }
          />
        )}
      </BottomNavigation>
    </Box>
  );
}
