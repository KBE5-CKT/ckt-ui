"use client"

import React from "react";
import { useTheme } from "@/context/ThemeContext";

export default function Home() {
  const { themeKey, setThemeKey } = useTheme();

  const toggleTheme = () => {
    setThemeKey(themeKey === "blue" ? "pink" : "blue"); // 테마를 변경
    localStorage.setItem("themeKey", themeKey === "blue" ? "pink" : "blue"); // 로컬스토리지에 저장
  };

  return (
    <div>
      <h1>현재 테마: {themeKey}</h1>
      <button onClick={toggleTheme}>테마 변경</button>
    </div>
  );
}
