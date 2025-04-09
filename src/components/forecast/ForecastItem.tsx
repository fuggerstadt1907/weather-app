import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

type Props = {
  date: string;
  iconUrl: string;
  description: string;
  maxTemp: string;
  minTemp: string;
  areDetailsShown: boolean;
  onClickDetails: (date: string) => void;
};

const ForecastItem: React.FC<Props> = ({
  date,
  iconUrl,
  description,
  maxTemp,
  minTemp,
  areDetailsShown,
  onClickDetails,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col flex-1  items-center">
        <p className="font-semibold text-lg">
          {new Date(date).toLocaleDateString("de-DE", {
            weekday: "short",
          })}
        </p>
        <div className="h-[100]">
          <img src={iconUrl} alt="Wettericon" />
        </div>
        <p className="text-sm text-gray-700 dark:text-gray-300 break-words text-center h-[40]">
          {description}
        </p>
      </div>

      <div className="flex flex-row text-right text-sm font-semibold items-center space-x-1">
        <p className="text-gray-600 dark:text-gray-300">{maxTemp}°</p>
        <p className="text-gray-600 dark:text-gray-300">/</p>
        <p className="text-gray-500 dark:text-gray-500">{minTemp}°</p>
      </div>

      <div className="mt-2 cursor-pointer" onClick={() => onClickDetails(date)}>
        {areDetailsShown ? (
          <KeyboardDoubleArrowUpIcon fontSize="small" />
        ) : (
          <KeyboardDoubleArrowDownIcon fontSize="small" />
        )}
      </div>
    </div>
  );
};

export default ForecastItem;
