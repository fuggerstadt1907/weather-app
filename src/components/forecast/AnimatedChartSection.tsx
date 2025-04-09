import { motion, AnimatePresence } from "framer-motion";
import ForecastChart from "./ForecastChart";

type Props = {
  date: string;
  chartData: {
    date: string;
    temps: any[];
  } | null;
};

const AnimatedChartSection: React.FC<Props> = ({ chartData, date }) => {
  return (
    <AnimatePresence>
      {chartData && (
        <motion.div
          key="chart"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full px-2 mt-4"
        >
          <ForecastChart
            date={new Date(date).toLocaleDateString("de-DE", {
              weekday: "long",
            })}
            temps={chartData.temps}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedChartSection;
