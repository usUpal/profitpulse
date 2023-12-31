import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import FlexboxBetween from "@/components/FlexboxBetween";
import PixIcon from "@mui/icons-material/Pix";
type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexboxBetween mb='0.25rem' p='0.5rem 0rem' color={palette.grey[300]}>
      {/* left side */}
      <FlexboxBetween gap='0.75rem'>
        <PixIcon sx={{ fontSize: "28px" }} />
        <Typography variant='h4' fontWeight='16px'>
          PROFITPULSE
        </Typography>
      </FlexboxBetween>
      {/* right side */}
      <FlexboxBetween gap='2rem'>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to='/'
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            <Typography variant='h6' fontWeight='16px'>
              Dashboard
            </Typography>
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to='/predictions'
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            <Typography variant='h6' fontWeight='16px'>
              Predictions
            </Typography>
          </Link>
        </Box>
      </FlexboxBetween>
    </FlexboxBetween>
  );
};

export default Navbar;
