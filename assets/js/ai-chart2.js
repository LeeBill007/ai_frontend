//xy軸反過來
const setupChart2 = ()=> {
  var ctx = document.getElementById('ai-chart2').getContext('2d');
  new Chart(ctx, {
      type: 'bar',
      data: {
          labels: [
            '礦物燃料',
            '電機和設備',
            '機械和電腦',
            '製藥品',
            '光學技術和醫材',
            '礦石渣灰',
            '車輛',
            '塑膠及製品',
            '有機化學品',
            '寶石和貴重金屬',
          ],
          datasets: [{
              data: [
                10,20,30,40,50,60,70,80,90,100
              ],
              backgroundColor: [
                '#183F89',
                '#EF896A',
                '#C4BDE6',
                '#4396B7',
                '#F6C789',
                '#3E65A9',
                '#B2E5DF',
                '#EFEAE2',
                '#F8D2C7',
                '#E4E1F6',
              ],
              borderWidth: 0
          }]
      },
      options: {
          indexAxis: 'y', //XY軸反過來
          scales: {
            x: {
            },
            y: {
              display: false,
              beginAtZero: true,
              border: {
                dash: [1,2],
              },               
            }
          },
          plugins: {
              legend: {
                  display: false
              }
          },
          barPercentage: 0.5
      }
  });
}
document.addEventListener("DOMContentLoaded", () => {
    setupChart2()
});