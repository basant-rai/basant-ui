import { Button } from "simple_ui_elements";
import { useTheme } from "../hook/useTheme";


const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Button
        color="primary"
        onClick={toggleTheme}
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"} Mode
      </Button>
    </div>
  )
}

export default Header