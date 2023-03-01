<template>
  <chartLine :data="chartData" :options="options" />
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
} from "chart.js";
import { Line as chartLine } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default {
  components: {
    chartLine,
  },
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: true,
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
            label: "BP 1",
            data: [80, 100, 90, 70, 90, 100, 80, 90],
            cubicInterpolationMode: "monotone",
            tension: 0.4,
            backgroundColor: "#009FF9",
            borderColor: "#009FF9",
          },
          {
            label: "BP 2",
            data: [100, 110, 120, 100, 110, 120, 100, 130],
            cubicInterpolationMode: "monotone",
            tension: 0.4,
            backgroundColor: "#FD5957",
            borderColor: "#FD5957",
          },
        ],
      },
    };
  },
};
</script>
