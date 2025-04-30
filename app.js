const dadosPorCategoria = {
  vendas: {
    "2023-01": {
      norte: {
        produtoA: [500, 600, 700, 800, 900, 1000],
        produtoB: [300, 400, 500, 600, 700, 800],
        produtoC: [200, 300, 400, 500, 600, 700],
      },
      sul: {
        produtoA: [600, 700, 800, 900, 1000, 1100],
        produtoB: [400, 500, 600, 700, 800, 900],
        produtoC: [300, 400, 500, 600, 700, 800],
      },
      leste: {
        produtoA: [700, 800, 900, 1000, 1100, 1200],
        produtoB: [500, 600, 700, 800, 900, 1000],
        produtoC: [400, 500, 600, 700, 800, 900],
      },
      oeste: {
        produtoA: [800, 900, 1000, 1100, 1200, 1300],
        produtoB: [600, 700, 800, 900, 1000, 1100],
        produtoC: [500, 600, 700, 800, 900, 1000],
      },
    },
    pizza: [200, 300, 500],
    linha: [1000, 1200, 1300, 1500, 1700, 1900],
    radar: [40, 50, 60, 70, 80]
  },
  lucro: {
    "2023-01": {
      norte: {
        produtoA: [400, 500, 600, 700, 800, 900],
        produtoB: [200, 300, 400, 500, 600, 700],
        produtoC: [100, 200, 300, 400, 500, 600],
      },
      sul: {
        produtoA: [500, 600, 700, 800, 900, 1000],
        produtoB: [300, 400, 500, 600, 700, 800],
        produtoC: [200, 300, 400, 500, 600, 700],
      },
      leste: {
        produtoA: [600, 700, 800, 900, 1000, 1100],
        produtoB: [400, 500, 600, 700, 800, 900],
        produtoC: [300, 400, 500, 600, 700, 800],
      },
      oeste: {
        produtoA: [700, 800, 900, 1000, 1100, 1200],
        produtoB: [500, 600, 700, 800, 900, 1000],
        produtoC: [400, 500, 600, 700, 800, 900],
      },
    },
    pizza: [100, 200, 300],
    linha: [400, 500, 600, 700, 800, 900],
    radar: [50, 60, 70, 80, 90]
  },
  clientes: {
    "2023-01": {
      norte: {
        produtoA: [50, 60, 70, 80, 90, 100],
        produtoB: [30, 40, 50, 60, 70, 80],
        produtoC: [20, 30, 40, 50, 60, 70],
      },
      sul: {
        produtoA: [60, 70, 80, 90, 100, 110],
        produtoB: [40, 50, 60, 70, 80, 90],
        produtoC: [30, 40, 50, 60, 70, 80],
      },
      leste: {
        produtoA: [70, 80, 90, 100, 110, 120],
        produtoB: [50, 60, 70, 80, 90, 100],
        produtoC: [40, 50, 60, 70, 80, 90],
      },
      oeste: {
        produtoA: [80, 90, 100, 110, 120, 130],
        produtoB: [60, 70, 80, 90, 100, 110],
        produtoC: [50, 60, 70, 80, 90, 100],
      },
    },
    pizza: [100, 200, 300],
    linha: [50, 60, 70, 80, 90, 100],
    radar: [30, 40, 50, 60, 70]
  }
};

let graficoBarras, graficoPizza, graficoLinha, graficoRadar;

const graficoOptions = {
  responsive: true,
  animation: {
    duration: 1000,
    easing: 'easeInOutQuad'
  },
  plugins: {
    legend: { position: 'top' }
  }
};

function atualizarGraficos() {
  const categoria = document.getElementById("selecaoCategoria").value;
  const data = document.getElementById("selecaoData").value;
  const regiao = document.getElementById("selecaoRegiao").value;
  const produto = document.getElementById("selecaoProduto").value;

  if (data && categoria && regiao && produto) {
    const chaveData = `${data.slice(0, 4)}-${data.slice(5, 7)}`;
    const novosDados = dadosPorCategoria[categoria]?.[chaveData]?.[regiao]?.[produto];

    if (novosDados) {
      graficoBarras.data.datasets[0].data = novosDados;
      graficoPizza.data.datasets[0].data = novosDados.slice(0, 3); // simplificado
      graficoLinha.data.datasets[0].data = novosDados;
      graficoRadar.data.datasets[0].data = novosDados.slice(0, 5); // simplificado
    }

    graficoBarras.update();
    graficoPizza.update();
    graficoLinha.update();
    graficoRadar.update();
  }
}

document.getElementById("selecaoCategoria").addEventListener("change", atualizarGraficos);
document.getElementById("selecaoData").addEventListener("change", atualizarGraficos);
document.getElementById("selecaoRegiao").addEventListener("change", atualizarGraficos);
document.getElementById("selecaoProduto").addEventListener("change", atualizarGraficos);

window.onload = () => {
  graficoBarras = new Chart(document.getElementById("grafico"), {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Vendas (R$)',
        data: dadosPorCategoria.vendas["2023-01"].norte.produtoA,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: graficoOptions
  });

  graficoPizza = new Chart(document.getElementById("grafico-pizza"), {
    type: 'pie',
    data: {
      labels: ['Produto A', 'Produto B', 'Produto C'],
      datasets: [{
        data: dadosPorCategoria.vendas.pizza,
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
        hoverOffset: 4
      }]
    },
    options: graficoOptions
  });

  graficoLinha = new Chart(document.getElementById("grafico-linha"), {
    type: 'line',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Lucro (R$)',
        data: dadosPorCategoria.lucro["2023-01"].norte.produtoA,
        fill: false,
        borderColor: '#4bc0c0',
        tension: 0.1
      }]
    },
    options: graficoOptions
  });

  graficoRadar = new Chart(document.getElementById("grafico-radar"), {
    type: 'radar',
    data: {
      labels: ['Vendas', 'Lucros', 'Clientes', 'Satisfação', 'Qualidade'],
      datasets: [{
        label: 'Desempenho',
        data: dadosPorCategoria.vendas.radar,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: graficoOptions
  });
};
