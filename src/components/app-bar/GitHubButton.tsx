"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitHubButton: React.FC = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={300}>
        <Tooltip.Trigger asChild>
          <a
            href="http://github.com/fuggerstadt1907/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-white hover:scale-110 transition-transform"
            aria-label="GitHub Profil"
          >
            <GitHubIcon />
          </a>
        </Tooltip.Trigger>
        <Tooltip.Content
          side="bottom"
          align="center"
          className="px-2 py-1 rounded bg-gray-800 text-white text-sm shadow"
        >
          GitHub-Profil
          <Tooltip.Arrow className="fill-gray-800" />
        </Tooltip.Content>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default GitHubButton;
