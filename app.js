const dadosPorCategoria = {
  vendas: {
    "2023-01": {
      norte: { produtoA: [500, 600, 700], produtoB: [300, 400, 500], produtoC: [200, 300, 400] },
      sul: { produtoA: [600, 700, 800], produtoB: [400, 500, 600], produtoC: [300, 400, 500] },
      leste: { produtoA: [700, 800, 900], produtoB: [500, 600, 700], produtoC: [400, 500, 600] },
      oeste: { produtoA: [800, 900, 1000], produtoB: [600, 700, 800], produtoC: [500, 600, 700] },
    },
    barras: [1000, 1200, 1400, 1600, 1800, 2000],
    pizza: [200, 300, 500],
    linha: [1000, 1200, 1300, 1500, 1700, 1900],
    radar: [40, 50, 60, 70, 80]
  },
  lucro: {
    "2023-01": {
      norte: { produtoA: [400, 500, 300], produtoB: [200, 300, 400], produtoC: [100, 200, 300] },
      sul: { produtoA: [500, 600, 400], produtoB: [300, 400, 500], produtoC: [200, 300, 400] },
      leste: { produtoA: [600, 700, 500], produtoB: [400, 500, 600], produtoC: [300, 400, 500] },
      oeste: { produtoA: [700, 800, 600], produtoB: [500, 600, 700], produtoC: [400, 500, 600] },
    },
    barras: [500, 600, 700, 800, 900, 1000],
    pizza: [100, 200, 300],
    linha: [400, 500, 600, 700, 800, 900],
    radar: [50, 60, 70, 80, 90]
  },
  clientes: {
    "2023-01": {
      norte: { produtoA: [50, 60, 40], produtoB: [30, 40, 50], produtoC: [20, 30, 40] },
      sul: { produtoA: [60, 70, 50], produtoB: [40, 50, 60], produtoC: [30, 40, 50] },
      leste: { produtoA: [70, 80, 60], produtoB: [50, 60, 70], produtoC: [40, 50, 60] },
      oeste: { produtoA: [80, 90, 70], produtoB: [60, 70, 80], produtoC: [50, 60, 70] },
    },
    barras: [40, 50, 60, 70, 80, 90],
    pizza: [100, 200, 300],
    linha: [50, 60, 70, 80, 90, 100],
    radar: [30, 40, 50, 60, 70]
  }
};

let graficoBarras, graficoPizza, graficoLinha, graficoRadar;

const graficoOptions = {
  responsive: true,
  animation: {
    duration: 1000,  // 1 segundo de animação
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
    const novosDados = dadosPorCategoria[categoria][chaveData][regiao][produto];

    graficoBarras.data.datasets[0].data = novosDados || dadosPorCategoria[categoria].barras;
    graficoBarras.update();

    graficoPizza.data.datasets[0].data = novosDados || dadosPorCategoria[categoria].pizza;
    graficoPizza.update();

    graficoLinha.data.datasets[0].data = novosDados || dadosPorCategoria[categoria].linha;
    graficoLinha.update();

    graficoRadar.data.datasets[0].data = novosDados || dadosPorCategoria[categoria].radar;
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
