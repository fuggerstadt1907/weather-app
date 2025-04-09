import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import CustomTooltip from "../CustomTootip";
import { useTheme } from "@/hooks";

type Props = {
  date: string;
  temps: any;
};

const ForecastChart: React.FC<Props> = ({ date, temps }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const strokeColor = isDark ? "#ffffff" : "#4a5565";
  return (
    <div className="h-24 my-4">
      <p className="text-gray-600 dark:text-gray-300">
        Temperaturverlauf für {date}
      </p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={temps}>
          <XAxis
            dataKey="time"
            tick={{ fontSize: 10 }}
            interval="preserveStartEnd"
            stroke={strokeColor}
          />
          <YAxis hide domain={["dataMin - 2", "dataMax + 2"]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="temp"
            stroke={strokeColor}
            strokeWidth={2}
            dot={{ r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
