import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
  const dataPointsValues = props.dataPoints.map((dp) => dp.value);
  const maxValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dp, index) => (
        <ChartBar
          key={index}
          label={dp.label}
          value={dp.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
}

export default Chart;
