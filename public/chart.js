var options = {
    chart: {
      height: 350,
      type: "line",
      stacked: false
    },
    dataLabels: {
      enabled: false
    },
    colors: ["#FF1654", "#247BA0"],
    series: [
      {
        name: "Credit",
        data: [10000,
            12000,
            30000,
            5000,
            15000,
            1200,
            12000,
            3000,
            5000,
            20000
            ]
      },
      {
        name: "Debit",
        data: [5000,
            6000,
            3000,
            10000,
            20000,
            2000,
            1000,
            10000,
            3000,
            1200
            ]
      }
    ],
    stroke: {
      width: [4, 4]
    },
    plotOptions: {
      bar: {
        columnWidth: "20%"
      }
    },
    xaxis: {
      categories: [01-01-2023,
        02-01-2023,
        03-01-2023,
        04-01-2023,
        05-01-2023,
        06-01-2023,
        07-01-2023,
        08-01-2023,
        09-01-2023,
        10-01-2023
        ]
    },
    yaxis: [
      {
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#FF1654"
        },
        labels: {
          style: {
            colors: "#FF1654"
          }
        },
        title: {
          text: "Credit",
          style: {
            color: "#FF1654"
          }
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true
        },
        axisBorder: {
          show: true,
          color: "#247BA0"
        },
        labels: {
          style: {
            colors: "#247BA0"
          }
        },
        title: {
          text: "Debit",
          style: {
            color: "#247BA0"
          }
        }
      }
    ],
    tooltip: {
      shared: false,
      intersect: true,
      x: {
        show: false
      }
    },
    legend: {
      horizontalAlign: "left",
      offsetX: 40
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  
      
  var options = {
    series: [
    {
      name: 'Credit',
      data: [
        {
          x: '01-01-2023',
          y: 10000,
          goals: [
            {
              name: 'Debit',
              value: 5000,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '02-01-2023',
          y: 12000,
          goals: [
            {
              name: 'Debit',
              value: 6000,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '03-01-2023',
          y: 30000,
          goals: [
            {
              name: 'Debit',
              value: 3000,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '04-01-2023',
          y: 5000,
          goals: [
            {
              name: 'Debit',
              value: 10000,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '05-01-2023',
          y: 15000,
          goals: [
            {
              name: 'Debit',
              value: 20000,
              strokeHeight: 5,
              strokeLineCap: 'round',
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '06-01-2023',
          y: 1200,
          goals: [
            {
              name: 'Debit',
              value: 2000,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '07-01-2023',
          y: 12000,
          goals: [
            {
              name: 'Debit',
              value: 1000,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
          x: '08-01-2023',
          y: 3000,
          goals: [
            {
              name: 'Debit',
              value: 10000,
              strokeHeight: 5,
              strokeColor: '#775DD0'
            }
          ]
        },
        {
            x: '09-01-2023',
            y: 5000,
            goals: [
              {
                name: 'Debit',
                value: 3000,
                strokeHeight: 5,
                strokeColor: '#775DD0'
              }
            ]
          },
          {
            x: '10-01-2023',
            y: 20000,
            goals: [
              {
                name: 'Debit',
                value: 1200,
                strokeHeight: 5,
                strokeColor: '#775DD0'
              }
            ]
          }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Credit', 'Debit'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  };

  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();
  