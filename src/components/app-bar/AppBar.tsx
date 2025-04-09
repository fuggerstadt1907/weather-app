import GitHubButton from "./GitHubButton";
import ThemeToggle from "./ThemeToggle";

const AppBar: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 flex items-center gap-4">
      <ThemeToggle />
      <GitHubButton />
    </div>
  );
};

export default AppBar;
