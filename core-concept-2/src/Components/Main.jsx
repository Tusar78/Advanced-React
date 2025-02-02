import React, { useState } from "react";
import UserForm from "./UserForm";
import ThemeToggle from "./ThemeToggle";

const Main = () => {
  const [theme, setTheme] = useState({
    mode: "light",
    backgroundColor: "#fff",
    color: "#000",
    borderColor: "#e5e7eb",
  });

  const toggleTheme = () => {
    setTheme(
      theme.mode == "light"
        ? {
            mode: "dark",
            backgroundColor: "#333",
            color: "#fff",
            borderColor: "#484848",
          }
        : {
            mode: "light",
            backgroundColor: "#fff",
            color: "#000",
            borderColor: "#e5e7eb",
          }
    );
  };

  return (
    <div className="p-6" style={{height: '100vh', backgroundColor: theme.backgroundColor}}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <UserForm theme={theme} />
    </div>
  );
};

export default Main;
