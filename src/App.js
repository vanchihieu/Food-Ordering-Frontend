import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import darkTheme from "./theme/DarkTheme";
import Routers from "./Routers/Routers.jsx";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
