import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import { useTheme } from "./hooks/theme";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";

const App = () => {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme, theme } = useTheme();

  useEffect(() => {
    handleAuthenticateUser();

    handleInitTheme();
  }, [handleAuthenticateUser, handleInitTheme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      Meu texto para teste
    </ThemeProvider>
  );
};

export default App;
