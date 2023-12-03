import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { MdOutlinePersonSearch } from "react-icons/md";
import Stack from "@mui/material/Stack";

interface Props {
  heading: string;
  content: string;
  linkto?: string;
  linkhd?: string;
}
const Info = ({ heading, content, linkto, linkhd }: Props) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 500, borderRadius: 2 }}>
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          {heading}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ paddingBottom: 2 }}
        >
          {content}
        </Typography>
        <Stack direction="row" spacing={1}>
          <Link to={`/${linkto}`}>{linkhd}</Link>
          {heading === "New Hire" && <BsFillPersonPlusFill />}
          {heading === "Employee Data" && <MdOutlinePersonSearch />}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Info;
