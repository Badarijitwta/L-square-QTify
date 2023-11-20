import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Accordion = styled((props) => (
  <MuiAccordion
    disableGutters={false}
    elevation={1}
    square={false}
    {...props}
  />
))(({ theme }) => ({
  border: `1px solid #FFFF`,
  borderRadius: "10px",
  width: "62.5rem",
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "40px", color: "#34C94B" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#121212",
  flexDirection: "row",

  borderRadius: "10px",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const theme = createTheme({
  typography: {
    backgroundColor: "white",
    fontFamily: "Poppins",
    fontSize: "20px",
    h6: {
      fontWeight: 500,
      fontSize: "20px",
      color: "white",
    },
  },
});
export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="h6">Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes! It is 100% free, and has 0% ads!</Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography variant="h6">
              Can I download and listen to songs offline?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}
