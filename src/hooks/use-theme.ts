import { useEffect, useSyncExternalStore } from "react";

const THEME_STORAGE_KEY = "theme";
const themeListeners = new Set<() => void>();

const getStoredTheme = () => {
  if (typeof window === "undefined") {
    return true;
  }

  return localStorage.getItem(THEME_STORAGE_KEY) !== "light";
};

const syncThemeClass = (dark: boolean) => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.classList.toggle("dark", dark);
};

const setTheme = (dark: boolean) => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(THEME_STORAGE_KEY, dark ? "dark" : "light");
  syncThemeClass(dark);
  themeListeners.forEach((listener) => listener());
};

const subscribe = (listener: () => void) => {
  themeListeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) {
      listener();
    }
  };

  window.addEventListener("storage", handleStorage);

  return () => {
    themeListeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
};

export const useTheme = () => {
  const dark = useSyncExternalStore(subscribe, getStoredTheme, () => true);

  useEffect(() => {
    syncThemeClass(dark);
  }, [dark]);

  return { dark, toggle: () => setTheme(!dark) };
};
