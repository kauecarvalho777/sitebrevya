import { useCallback, useEffect, useState } from "react";

const listeners = new Set<(dark: boolean) => void>();

const getInitial = () => {
  if (typeof window === "undefined") return true;
  return localStorage.getItem("theme") !== "light";
};

let currentDark = getInitial();

export const useTheme = () => {
  const [dark, setDark] = useState(currentDark);

  useEffect(() => {
    const handler = (v: boolean) => setDark(v);
    listeners.add(handler);
    // sync in case another instance toggled before mount
    if (dark !== currentDark) setDark(currentDark);
    return () => { listeners.delete(handler); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    currentDark = dark;
  }, [dark]);

  const toggle = useCallback(() => {
    const next = !currentDark;
    currentDark = next;
    listeners.forEach((fn) => fn(next));
  }, []);

  return { dark, toggle };
};
