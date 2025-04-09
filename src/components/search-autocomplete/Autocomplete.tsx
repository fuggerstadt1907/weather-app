import { useCitySuggestions } from "@/hooks";

type Props = {
  query: string;
  onSelect: (cityName: string) => void;
};

const Autocomplete: React.FC<Props> = ({ query, onSelect }) => {
  const { data: suggestions } = useCitySuggestions(query);

  return (
    suggestions &&
    suggestions.length > 0 && (
      <ul className="absolute top-full left-5 right-5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-b-lg z-10 shadow">
        {suggestions.map((suggestion, index) => (
          <li
            key={`${suggestion.name}-${index}`}
            className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer text-black dark:text-white"
            onClick={() =>
              onSelect(`${suggestion.name}, ${suggestion.country}`)
            }
          >
            {suggestion.name}
            {suggestion.state ? `, ${suggestion.state}` : ""} (
            {suggestion.country})
          </li>
        ))}
      </ul>
    )
  );
};

export default Autocomplete;
