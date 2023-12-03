import { useState } from "react";
import { useContext } from "react";
import ProfilesContext from "../../context/ProfilesContext";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const initialFormData = {
  fullname: "",
  dob: "",
  position: "",
};

function AddingData() {
  const [formData, setFormData] = useState(initialFormData);

  const contextValue = useContext(ProfilesContext);
  if (!contextValue) {
    return <div>No feedback available</div>; // Handle the case when contextValue is undefined
  }
  const { addProfile } = contextValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedField = e.target.name;
    const newValue = e.target.value;
    setFormData((currData) => {
      return { ...currData, [changedField]: newValue };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProfile(formData);
    resetForm();
  };
  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <Box display="flex" justifyContent="start">
      <Grid>
        <Grid item>
          <Typography variant="h3" sx={{ margin: 4, paddingLeft: 20 }}>
            Register Youself!!
          </Typography>
        </Grid>
        <Grid item sx={{ margin: 2 }}>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              fullWidth
              sx={{ margin: 2 }}
            />

            <TextField
              required
              id="outlined-basic"
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              fullWidth
              sx={{ margin: 2 }}
            />

            <TextField
              required
              id="outlined-basic"
              label="Position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              fullWidth
              sx={{ margin: 2 }}
            />

            <Button type="submit" variant="contained" sx={{ marginLeft: 2 }}>
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AddingData;
