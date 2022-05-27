import * as React from "react";
import { Tab, Tabs, Box } from "@mui/material";
import { TabPanel, TabContext } from "@mui/lab";
import { Profile } from "../../components/Profile";
import { Projects } from "../../components/Projects";
import { Technologies } from "../../components/Technologies";
import { Contact } from "../../components/Contact";

export function Home() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          <Tabs onChange={handleChange}>
            <Tab sx={{ color: "#fefefe" }} label="Home" value="1" />
            <Tab sx={{ color: "#fefefe" }} label="Portfólio" value="2" />
            <Tab sx={{ color: "#fefefe" }} label="Tecnologias" value="3" />
            <Tab sx={{ color: "#fefefe" }} label="Contato" value="4" />
          </Tabs>
        </Box>
        <TabPanel value="1">
          <Profile />
        </TabPanel>
        <TabPanel value="2">
          <Projects />
        </TabPanel>
        <TabPanel value="3">
          <Technologies />
        </TabPanel>
        <TabPanel value="4">
          <Contact />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
