import { Box } from "@chakra-ui/react";
import { Chart, registerables } from "chart.js";
import { useEffect } from "react";
import { ComunaData } from "../types/Comuna.type";

function ContentGraphic({ data }: { data: ComunaData }) {
  useEffect(() => {
    Chart.register(...registerables);
    const canvas = document.getElementById("myChart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!!;

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.values.map((entry) => {
          return entry.date.slice(-2);
        }),
        datasets: [
          {
            label: "# Contagios",
            data: data.values.map((entry) => {
              return entry.quantity;
            }),
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, [data]);

  return (
    <Box>
      <canvas id="myChart" width="500px" height="500px"></canvas>
    </Box>
  );
}

export default ContentGraphic;
