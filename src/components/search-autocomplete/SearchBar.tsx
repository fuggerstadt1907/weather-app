type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Stadt eingeben..."
      value={value}
      onChange={onChange}
      className="w-full px-6 py-3 rounded-full shadow-md bg-white text-black dark:bg-gray-800 dark:text-white placeholder-gray-400 focus:outline-none"
    />
  );
};

export default SearchBar;
