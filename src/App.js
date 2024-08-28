import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import darkTheme from "./theme/DarkTheme";
import NavBar from "./components/Navbar/Navbar";
import HomePage from "./components/Home/HomePage";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <NavBar />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
