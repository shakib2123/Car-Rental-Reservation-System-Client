import { useEffect, useState } from "react";
import { IoSunnySharp, IoMoonSharp, IoDesktopSharp } from "react-icons/io5";

const themeOptions = [
  {
    icon: <IoSunnySharp />,
    text: "light",
  },
  {
    icon: <IoMoonSharp />,
    text: "dark",
  },
  {
    icon: <IoDesktopSharp />,
    text: "system",
  },
];

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    // Call it on mount to apply correct theme
    onWindowMatch();

    // Listen to system theme changes when using 'system' theme
    darkQuery.addEventListener("change", onWindowMatch);

    // Cleanup event listener
    return () => darkQuery.removeEventListener("change", onWindowMatch);
  }, [darkQuery]);

  useEffect(() => {
    // Apply theme based on the selected option
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;

      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  return (
    <div className="max-w-lg rounded-xl border border-gray-500 p-2 max-h-10 flex items-center justify-center gap-2 bg-second">
      {themeOptions?.map((opt) => (
        <button
          onClick={() => setTheme(opt.text)}
          key={opt.text}
          className={`text-xl size-8 rounded-full  ${
            theme === opt.text
              ? "text-orange-500 hover:text-orange-600"
              : "text-gray-200 hover:text-gray-400"
          }`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
