const ctx = document.getElementById('myChart');
co2dataset = []
const co2 = [
  315.232,
  315.9808333,
  316.91,
  317.6441667,
  318.4541667,
  318.9925,
  319.6166667,
  320.0358333,
  321.3691667,
  322.1808333,
  323.05,
  324.6233333,
  325.6816667,
  326.3191667,
  327.4566667,
  329.6775,
  330.1916667,
  331.1291667,
  332.0266667,
  333.8433333,
  335.415,
  336.835,
  338.7625,
  340.1191667,
  341.4783333,
  343.1525,
  344.8683333,
  346.3516667,
  347.6083333,
  349.3116667,
  351.69,
  353.205,
  354.4525,
  355.7041667,
  356.5458333,
  357.2158333,
  358.9591667,
  360.9683333,
  362.7433333,
  363.8766667,
  366.84,
  368.54,
  369.7075,
  371.3191667,
  373.4525,
  375.9833333,
  377.6983333,
  379.9833333,
  382.0908333,
  384.025,
  385.8316667,
  387.6425,
  390.1016667,
  391.8508333,
  394.0558333,
  396.7375,
  398.8125,
  401.0116667,
  404.4125,
  406.7583333,
  408.715,
  411.6541667,
  414.2383333,
  416.4508333,
  418.5641667,
  421.04,
]
for (let i = 0; i < co2.length; i++) {
  co2dataset.push({
    year: 1958 + i,
    x: 500,
    y: 500,
    r: co2[i]/2
  })
}


const data = {
  datasets: [{
    label: 'CO2',
    data: co2dataset,
    backgroundColor: 'rgba(105,105,105,0.3)'
  }, {
    label: 'Water',
    data: [{
      x: 500,
      y: 500,
      r: 100
    }],
    backgroundColor: 'rgb(54, 162, 235)'
    },
    {
      label: 'Ice',
      data: [{
        x: 250,
        y: 250,
        r: 75
      }, {
        x: 750,
        y: 750,
        r: 75
      }],
      backgroundColor: 'rgb(159,187,208)'
    }]
};
const config = {
  type: 'bubble',
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title:
      {
        display: false,
        text: 'THE MELTING PROBLEM',
        font: {
          size: 64,
        }

      },
      legend: {
        display: false,
      }
    },
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
      },
      x: {
        display: false,
        grid: {
          display: false,
        },
      },
    },
    animation: {
      duration: 100, // Animation duration in milliseconds
      easing: 'linear', // Animation easing function
      loop: false // Loop animation

    }
  }
};
let chart = new Chart(ctx, config);

let currentIndex = 0;

function animateDataPoint() {
  if (currentIndex < co2dataset.length) {
    chart.data.datasets[0].data = [co2dataset[currentIndex]];
    chart.update();
    currentIndex++;
    setTimeout(animateDataPoint, 100);
  }
}

animateDataPoint();

