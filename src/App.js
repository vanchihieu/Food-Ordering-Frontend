import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import darkTheme from "./theme/DarkTheme";
import NavBar from "./components/Navbar/Navbar";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <NavBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
