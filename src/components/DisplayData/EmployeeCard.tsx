import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useContext } from "react";
import ProfilesContext from "../../context/ProfilesContext";

interface Props {
  id: string;
  name: string;
  dob: string;
  position: string;
}
const EmployeeCard = ({ id, name, dob, position }: Props) => {
  const contextValue = useContext(ProfilesContext);
  if (!contextValue) {
    return <div>No feedback available</div>; // Handle the case when contextValue is undefined
  }
  const { deleteProfile } = contextValue;
  return (
    <Card sx={{ minWidth: 200, maxWidth: 500, margin: 2 }}>
      <CardContent>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="subtitle1">D.O.B : {dob}</Typography>
        <Typography>Position :{position}</Typography>
        <Button onClick={() => deleteProfile(id)}>Delete</Button>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
