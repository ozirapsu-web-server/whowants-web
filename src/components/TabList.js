import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tab1 from "components/Tab1";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: "#fff",
    boxShadow: "none",
  },
  tabs: {
    display: "flex",
    justifyContent: "space-around",
  },
  tab: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#000",
  },
  box: {
    padding: "20px",
  },
});

const TabPanel = React.memo((props) => {
  const { children, value, index, ...other } = props;
  const classes = useStyles();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3} className={classes.box}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
});

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const TabList = React.memo(({ content }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        className={classes.tabs}
        variant="fullWidth"
        centered
      >
        <Tab label="스토리" className={classes.tab} />
        <Tab label="새소식" className={classes.tab} disabled />
        <Tab label="서포터" className={classes.tab} disabled />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Tab1 content={content} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Paper>
  );
});

export default TabList;
