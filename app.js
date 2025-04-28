document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('grafico').getContext('2d');
  const ctxPizza = document.getElementById('grafico-pizza').getContext('2d');

  const graficoBarras = new Chart(ctx, {
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
        easing: 'easeInOutQuad'
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const graficoPizza = new Chart(ctxPizza, {
    type: 'pie',
    data: {
      labels: ['Produto A', 'Produto B', 'Produto C', 'Produto D'],
      datasets: [{
        label: 'Distribuição de Vendas',
        data: [30, 20, 40, 10],
        backgroundColor: [
          '#ff6384',
          '#36a2eb',
          '#ffcd56',
          '#4bc0c0'
        ],
        borderColor: '#fff',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true
    }
  });

  // Filtro para mudar o gráfico
  const selecaoCategoria = document.getElementById('selecaoCategoria');
  selecaoCategoria.addEventListener('change', function() {
    const categoriaSelecionada = selecaoCategoria.value;

    if (categoriaSelecionada === 'vendas') {
      // Atualizar gráfico de barras para vendas
      graficoBarras.data.datasets[0].data = [12, 19, 3, 5, 2];
      graficoPizza.data.datasets[0].data = [30, 20, 40, 10];
    } else if (categoriaSelecionada === 'lucro') {
      // Atualizar gráfico de barras para lucro
      graficoBarras.data.datasets[0].data = [5, 7, 2, 3, 1];
      graficoPizza.data.datasets[0].data = [15, 25, 35, 25];
    } else if (categoriaSelecionada === 'clientes') {
      // Atualizar gráfico de barras para clientes
      graficoBarras.data.datasets[0].data = [50, 80, 40, 60, 20];
      graficoPizza.data.datasets[0].data = [40, 30, 20, 10];
    }

    graficoBarras.update();
    graficoPizza.update();
  });
});
