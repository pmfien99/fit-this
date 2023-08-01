import Chart from 'chart.js/auto';

const exampleData = [
  {
    date: '2023-07-10',
    weight: 166.5,
    //notes: "this is an example note for that day"
  },
  {
    date: '2023-07-15',
    weight: 167.5,
    //notes: "this is an example note for that day."
  },
  {
    date: '2023-07-23',
    weight: 168,
    //notes: "this is an example note for that day!"
  }
]

const exampleWeights = [166.5, 166.9, 167, 168, 169]
const exampleBMI = [5.1, 5.5, 5.6, 5.2, 5.1]
const exampleWeightsDate = ['2023-07-10', '2023-07-12', '2023-07-15', '2023-07-20', '2023-07-22']

// Generate Weight Chart
function renderCharts() {
  console.log("generating chat")
  // Chart (where it goes, config object)
  const weightChart = new Chart(document.getElementById('weightChart'), {
    type: 'line',
    data: {
      datasets: [
        {
          label: "Weights",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor : "rgba(220,220,220,1)",
          pointStrokeColor : "#fff",
          pointHighlightFill : "#fff",
          pointHighlightStroke : "rgba(220,220,220,1)",
          data: exampleWeights,
        }
      ],
      labels: exampleWeightsDate
    },
    options: {
    }
  });

  const bmiChart = new Chart(document.getElementById('bmiChart'), {
    type: 'line',
    data: {
      datasets: [
        {
          label: "BMI",
          backgroundColor : "rgba(151,187,205,0.2)",
          borderColor : "rgba(151,187,205,1)",
          pointColor : "rgba(151,187,205,1)",
          pointStrokeColor : "#fff",
          pointHighlightFill : "#fff",
          pointHighlightStroke : "rgba(151,187,205,1)",
          fill: 'origin',
          data: exampleBMI,
        }
      ],
      labels: exampleWeightsDate
    },
    options: {
    }
  });
}

export default renderCharts;