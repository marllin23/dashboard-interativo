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
    const graficoLinha = new Chart(document.getElementById("grafico-linha"), {
  type: 'line',
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [{
      label: "Evolução de Vendas",
      data: [150, 200, 180, 220, 300, 250],
      backgroundColor: "rgba(46, 204, 113, 0.4)",
      borderColor: "rgba(39, 174, 96, 1)",
      borderWidth: 2,
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  }
});

const graficoRadar = new Chart(document.getElementById("grafico-radar"), {
  type: 'radar',
  data: {
    labels: ["Qualidade", "Preço", "Atendimento", "Entrega", "Satisfação"],
    datasets: [{
      label: "Avaliação",
      data: [4, 3, 5, 4, 4],
      backgroundColor: "rgba(155, 89, 182, 0.2)",
      borderColor: "rgba(142, 68, 173, 1)",
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  }
});

function mostrarGrafico(tipo) {
  document.querySelectorAll(".grafico-canvas").forEach((canvas) => {
    canvas.style.display = "none";
  });

  if (tipo === "linha") {
    document.getElementById("grafico-linha").style.display = "block";
  } else if (tipo === "radar") {
    document.getElementById("grafico-radar").style.display = "block";
  } else if (tipo === "barras") {
    document.getElementById("grafico").style.display = "block";
  } else if (tipo === "pizza") {
    document.getElementById("grafico-pizza").style.display = "block";
  }
}

    
    // Atualizar os gráficos (exemplo)
    graficoBarras.update();
    graficoPizza.update();
  });
});
