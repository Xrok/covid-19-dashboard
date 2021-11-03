import { Box } from "@chakra-ui/react";
import { Chart, registerables } from "chart.js";
import { useEffect } from "react";

function ContentGraphic() {
  useEffect(() => {
    Chart.register(...registerables);
    const canvas = document.getElementById("myChart") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!!;

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "01",
          "03",
          "06",
          "08",
          "10",
          "13",
          "15",
          "17",
          "20",
          "24",
          "27",
        ],
        datasets: [
          {
            label: "# Contagios",
            data: [6, 12, 41, 63, 87, 115, 124, 134, 166, 224, 270],
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
  }, []);

  return (
    <Box>
      <canvas id="myChart" width="500px" height="500px"></canvas>
    </Box>
  );
}

export default ContentGraphic;
