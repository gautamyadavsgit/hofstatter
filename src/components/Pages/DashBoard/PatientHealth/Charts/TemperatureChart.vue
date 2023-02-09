<template>
  <Line :data="chartData" :options="options" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default {
  components: {
    Line,
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: true,
        // adding animation in the first time
        animations: {
          tension: {
            duration: 6000,
            easing: "ease in out",
            from: 0,
            to: 1,
            loop: false,
          },
        },
      },
      chartData: {
        Title: "36 &deg;",
        labels: [
          "10:00",
          "11:00",
          "12:00",
          "13:00",
          "14:00",
          "15:00",
          "16:00",
          "17:00",
        ],
        datasets: [
          {
            label: "Temprature",
            data: [50, 65, 60, 65, 60, 65, 60, 90],
            cubicInterpolationMode: "monotone",
            tension: 0.4,
            fill: 1,
            backgroundColor: "#2E3192",
            borderColor: "#2E3192",
          },
        ],
      },
    };
  },
};
</script>
