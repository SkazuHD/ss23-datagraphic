const ctx = document.getElementById('myChart');


const data = {
  datasets: [{
    label: 'CO2',
    data: [{
      x: 50,
      y: 50,
      r: 150
    }],
    backgroundColor: 'rgba(105,105,105,0.3)'
  }, {
    label: 'Water',
    data: [{
      x: 50,
      y: 50,
      r: 100
    }],
    backgroundColor: 'rgb(54, 162, 235)'
    },
    {
      label: 'Ice',
      data: [{
        x: 0,
        y: 0,
        r: 75
      }, {
        x: 100,
        y: 100,
        r: 75
      }],
      backgroundColor: 'rgb(159,187,208)'
    }]
};
const config = {
  type: 'bubble',
  data: data,
  options: {
    plugins: {
      title:
      {
        display: true,
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
  }
};
new Chart(ctx, config);
