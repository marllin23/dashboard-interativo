const dadosPorCategoria = {
  vendas: {
    "2023-01": [120, 190, 300, 250, 220, 310],
    "2023-02": [150, 180, 280, 260, 230, 320],
    "2023-03": [130, 200, 290, 270, 240, 330],
    barras: [120, 190, 300, 250, 220, 310],
    linha: [150, 200, 180, 220, 300, 250],
    pizza: [300, 200, 100],
    radar: [4, 3, 5, 4, 4]
  },
  lucro: {
    "2023-01": [80, 130, 200, 180, 160, 210],
    "2023-02": [100, 140, 180, 170, 150, 220],
    "2023-03": [90, 120, 170, 160, 140, 210],
    barras: [80, 130, 200, 180, 160, 210],
    linha: [100, 140, 160, 190, 250, 230],
    pizza: [150, 120, 80],
    radar: [3, 4, 4, 3, 4]
  },
  clientes: {
    "2023-01": [60, 100, 150, 140, 130, 170],
    "2023-02": [90, 110, 140, 130, 120, 190],
    "2023-03": [80, 120, 160, 150, 140, 210],
    barras: [60, 100, 150, 140, 130, 170],
    linha: [90, 110, 130, 120, 160, 150],
    pizza: [180, 100, 60],
    radar: [5, 4, 5, 4, 5]
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

  if (data && categoria) {
    const chaveData = `${data.slice(0, 4)}-${data.slice(5, 7)}`;
    const novosDados = dadosPorCategoria[categoria][chaveData];

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

window.onload = () => {
  // Inicialização dos gráficos com dados iniciais (Janeiro 2023, Vendas)
  graficoBarras = new Chart(document.getElementById("grafico"), {
    type: 'bar',
    data: {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [{
        label: 'Vendas (R$)',
        data: dadosPorCategoria.vendas["2023-01"], // Janeiro de 2023
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
        data: dadosPorCategoria.lucro["2023-01"], // Janeiro de 2023
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
