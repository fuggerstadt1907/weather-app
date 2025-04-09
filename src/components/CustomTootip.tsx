import { TooltipProps } from "recharts";

interface Props extends TooltipProps<any, any> {}

const CustomTooltip: React.FC<Props> = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    const temperature = payload[0].value;
    return (
      <div className=" bg-white text-black dark:bg-gray-700 dark:text-white text-xs p-2 rounded shadow-lg">
        <p className="font-semibold">{label} Uhr</p>
        <p>Temperatur: {temperature.toFixed(0)}°C</p>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
