import "./App.css";
import { Home } from "./pages/Home";

import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#996DFF",
    },
    secondary: {
      main: "#606060",
      two: "#fefefe",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
