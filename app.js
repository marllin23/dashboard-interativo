document.addEventListener('DOMContentLoaded', function() {
  const ctx = document.getElementById('grafico').getContext('2d');
  const ctxPizza = document.getElementById('grafico-pizza').getContext('2d');

  // Gráfico de barras
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
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return 'Valor: ' + tooltipItem.raw;
            }
          }
        }
      }
    }
  });

  // Gráfico de pizza
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
      responsive: true,
      plugins: {
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return 'Proporção: ' + tooltipItem.raw + '%';
            }
          }
        }
      }
    }
  });

  // Filtro de categoria
  const selecaoCategoria = document.getElementById('selecaoCategoria');
  selecaoCategoria.addEventListener('change', function() {
    const categoriaSelecionada = selecaoCategoria.value;
    
    if (categoriaSelecionada === 'vendas') {
      graficoBarras.data.datasets[0].data = [12, 19, 3, 5, 2];
      graficoPizza.data.datasets[0].data = [30, 20, 40, 10];
    } else if (categoriaSelecionada === 'lucro') {
      graficoBarras.data.datasets[0].data = [8, 15, 7, 4, 12];
      graficoPizza.data.datasets[0].data = [25, 30, 35, 10];
    } else if (categoriaSelecionada === 'clientes') {
      graficoBarras.data.datasets[0].data = [50, 40, 70, 60, 55];
      graficoPizza.data.datasets[0].data = [35, 40, 15, 10];
    }

    graficoBarras.update();
    graficoPizza.update();
  });

  // Filtro de data
  const selecaoData = document.getElementById('selecaoData');
  selecaoData.addEventListener('change', function() {
    const dataSelecionada = selecaoData.value;
    
    // Aqui você pode atualizar os gráficos conforme a data escolhida
    // Exemplo simples de log do valor selecionado
    console.log("Período selecionado: " + dataSelecionada);
    
    // Atualizar os gráficos (exemplo)
    graficoBarras.update();
    graficoPizza.update();
  });
});
