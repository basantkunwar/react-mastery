import { useEffect, useState } from "react";

export default function ThemePage() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
document.body.style.backgroundColor = theme === "light" ? "white" : "black";
document.body.style.color = theme === "light" ? "black" : "white";
document.body.style.transition = "background-color 0.3s ease, color 0.3s ease";
   document.title =
      theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode";
  }, [theme]);
  
  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        theme === "light"
          ? "bg-slate-100"
          : "bg-slate-900"
      }`}
    >
      <div
        className={`p-8 rounded-xl shadow-lg text-center w-96 ${
          theme === "light"
            ? "bg-white text-black"
            : "bg-slate-800 text-white"
        }`}
      >
        <h1 className="text-3xl font-bold mb-5">
          Theme Switcher
        </h1>

        <h2 className="text-xl mb-6">
          Current Theme:
          <span className="font-bold">
            {" "}
            {theme}
          </span>
        </h2>

        <button
          onClick={toggleTheme}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
}