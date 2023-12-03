import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import ProfilesContext from "../../context/ProfilesContext";
import EmployeeCard from "./EmployeeCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";

function DisplayData() {
  const [term, setTerm] = useState("");
  const contextValue = useContext(ProfilesContext);
  if (!contextValue) {
    return <div>No feedback available</div>; // Handle the case when contextValue is undefined
  }
  const { profiles } = contextValue;

  console.log(profiles);

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h3" sx={{ margin: 2, textAlign: "center" }}>
        Employee Data
      </Typography>
      <TextField
        label="Search..."
        variant="outlined"
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
        onChange={(e) => setTerm(e.target.value)}
      />

      <Grid container spacing={0}>
        {profiles
          .filter((profile) => profile.fullname.toLowerCase().includes(term))
          .map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Typography key={index} variant="body1">
                <EmployeeCard
                  id={item.id}
                  name={item.fullname}
                  dob={item.dob}
                  position={item.position}
                />
              </Typography>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

export default DisplayData;
