"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={300}>
        <Tooltip.Trigger asChild>
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-yellow-300 hover:scale-110 transition-transform"
            aria-label="Toggle Dark Mode"
          >
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.span
                  key="light"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <LightModeIcon />
                </motion.span>
              ) : (
                <motion.span
                  key="dark"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <DarkModeIcon />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </Tooltip.Trigger>

        <Tooltip.Content
          side="bottom"
          align="center"
          className="px-2 py-1 rounded bg-gray-800 text-white text-sm shadow"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
          <Tooltip.Arrow className="fill-gray-800" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default ThemeToggle;
