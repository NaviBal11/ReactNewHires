import Info from "../Info";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function home() {
  return (
    <Box sx={{ margin: 2 }}>
      <Stack spacing={2}>
        <Info
          heading="About"
          content=" At HI-TECH, we are passionate about crafting
        cutting-edge solutions that redefine the digital landscape. As a leading
        software development company, we combine innovation, expertise, and
        dedication to deliver unparalleled results to our clients."
        />

        <Info
          heading="New Hire"
          content="Welcome to HI-TECH! We are excited to have you on
    board and look forward to the positive energy and fresh perspectives
    we know you'll bring to our team. If you have any questions or need
    assistance as you settle in, feel free to reach out. Here's to a
    successful and rewarding journey with us!Please add your informtaion so that we can create an ID for you."
          linkto="form"
          linkhd="Add your Info"
        />
        <Info
          heading="Employee Data"
          content="You can find Employee informtion here!!"
          linkto="displaydata"
          linkhd="Want to find someone?"
        />
      </Stack>
    </Box>
  );
}

export default home;
