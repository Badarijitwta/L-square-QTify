import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Carousel from "../Carousel";
import axios from "axios";
// import Rock from "../FilteredSections/rock";

// import TabPanel from "@mui/lab/TabPanel";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    marginLeft: 0,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#34c94b",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontFamily: "Poppins",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: "rgba(255, 255, 255, 0.7)",
    "&.Mui-selected": {
      color: "#fff",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "--css-primary",
    },
  })
);
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function CustomizedTabs({ data }) {
  const [value, setValue] = React.useState(1);
  // const [genre, setGenre] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // React.useEffect(() => {
  //   axios.get(`https://qtify-backend-labs.crio.do/genres`).then(({ data }) => {
  //     setGenre(data);
  //   });
  // }, []);
  // console.log(genre);

  return (
    // < sx={{ width: '100%' }}>
    //   <Box sx={{ bgcolor: '#fff' }}>
    //     <AntTabs value={value} onChange={handleChange} aria-label="ant example">
    //       <AntTab label="Tab 1" />
    //       <AntTab label="Tab 2" />
    //       <AntTab label="Tab 3" />
    //     </AntTabs>
    //     <Box sx={{ p: 3 }} />
    //   </Box>
    <Box sx={{ bgcolor: "#121212" }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="All" value={1} />
        <StyledTab label="Rock" value={2} />
        <StyledTab label="Pop" value={3} />
        <StyledTab label="Jazz" value={4} />
        <StyledTab label="Blues" value={5} />
      </StyledTabs>
      <TabPanel value={value} index={1}>
        <Carousel data={data} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Carousel data={data.filter((item) => item.genre.key === "rock")} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Carousel data={data.filter((item) => item.genre.key === "pop")} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Carousel data={data.filter((item) => item.genre.key === "jazz")} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Carousel data={data.filter((item) => item.genre.key === "blues")} />
      </TabPanel>
    </Box>
  );
}
