import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tab1 from "components/Tab1";
import Tab3 from "components/Tab3";
import Tab2 from "components/Tab2";

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
    padding: "0px",
  },
});
// 탭 컴포넌트 (스토리(구현), 새소식, 서포터 컴포넌트로 구성 (진행))
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

const TabList = React.memo(({ content, comments, supportCount, pageIdx }) => {
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
        <Tab label="새소식" className={classes.tab} />
        <Tab label="서포터" className={classes.tab} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Tab1 content={content} pageIdx={pageIdx} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Tab2 />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Tab3
          comments={comments}
          lenOfComments={supportCount}
          pageIdx={pageIdx}
        />
      </TabPanel>
    </Paper>
  );
});

export default TabList;
