import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#6b9080",
        borderRadius: "3px",
        padding: "10px",
        margin: "2px",
      }}
    >
      <Stack direction="row" spacing={2}>
        <NavLink
          to="/"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/form"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          FORM
        </NavLink>
        <NavLink
          to="/displaydata"
          style={({ isActive, isPending, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
              textDecoration: isActive ? "none" : "none",
            };
          }}
        >
          DATA
        </NavLink>
      </Stack>
    </AppBar>
  );
}

export default Header;
