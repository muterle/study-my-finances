import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setTheme } from "../redux/slices/themeSlice";

const THEME_KEY = import.meta.env.VITE_LOCAL_STORAGE_THEME_KEY;

export const useTheme = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const handleInitTheme = () => {
    const theme = localStorage.getItem(THEME_KEY);

    if (theme === "light") {
      dispatch(setTheme("light"));
    } else if (theme === "dark") {
      dispatch(setTheme("dark"));
    }
  };

  const handleToggleTheme = () => {
    if (theme === "light") {
      dispatch(setTheme("dark"));
      localStorage.setItem(THEME_KEY, "dark");
    } else {
      dispatch(setTheme("light"));
      localStorage.setItem(THEME_KEY, "light");
    }
  };

  return {
    theme,
    handleInitTheme,
    handleToggleTheme,
  };
};
