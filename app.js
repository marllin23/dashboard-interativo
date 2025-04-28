document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('grafico').getContext('2d');

  const meuGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
      datasets: [{
        label: 'Vendas',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          '#42a5f5',
          '#66bb6a',
          '#ffa726',
          '#ab47bc',
          '#ef5350'
        ],
        borderColor: '#1e88e5',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      animation: {
        duration: 1500,
        easing: 'easeInOutQuad',
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
