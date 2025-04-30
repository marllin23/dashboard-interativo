const dadosPorCategoria = {
  vendas: {
    barras: [120, 190, 300, 250, 220, 310],
    linha: [150, 200, 180, 220, 300, 250],
    pizza: [300, 200, 100],
    radar: [4, 3, 5, 4, 4]
  },
  lucro: {
    barras: [80, 130, 200, 180, 160, 210],
    linha: [100, 140, 160, 190, 250, 230],
    pizza: [150, 120, 80],
    radar: [3, 4, 4, 3, 4]
  },
  clientes: {
    barras: [60, 100, 150, 140, 130, 170],
    linha: [90, 110, 130, 120, 160, 150],
    pizza: [180, 100, 60],
    radar: [5, 4, 5, 4, 5]
  }
};

let graficoBarras, graficoPizza, graficoLinha, graficoRadar;

function criarGraficos(categoria) {
  const dados = dadosPorCategoria[categoria];

  graficoBarras = new Chart(document.getElementById("grafico"), {
    type: 'bar',
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [{
        label: "Dados de Barras",
        data: dados.barras,
        backgroundColor: "#3498db"
      }]
    },
    options: { responsive: true }
  });

  graficoPizza = new Chart(document.getElementById("grafico-pizza"), {
    type: 'pie',
    data: {
      labels: ["Produto A", "Produto B", "Produto C"],
      datasets: [{
        label: "Distribuição",
        data: dados.pizza,
        backgroundColor: ["#e74c3c", "#f1c40f", "#2ecc71"]
      }]
    },
    options: { responsive: true }
  });

  graficoLinha = new Chart(document.getElementById("grafico-linha"), {
    type: 'line',
    data: {
      labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
      datasets: [{
        label: "Evolução",
        data: dados.linha,
        backgroundColor: "rgba(46, 204, 113, 0.4)",
        borderColor: "rgba(39, 174, 96, 1)",
        fill: true,
        tension: 0.4
      }]
    },
    options: { responsive: true }
  });

  graficoRadar = new Chart(document.getElementById("grafico-radar"), {
    type: 'radar',
    data: {
      labels: ["Qualidade", "Preço", "Atendimento", "Entrega", "Satisfação"],
      datasets: [{
        label: "Avaliação",
        data: dados.radar,
        backgroundColor: "rgba(155, 89, 182, 0.2)",
        borderColor: "rgba(142, 68, 173, 1)"
      }]
    },
    options: { responsive: true }
  });
}

function atualizarGraficos() {
  const categoria = document.getElementById("selecaoCategoria").value;

  const novosDados = dadosPorCategoria[categoria];

  // Atualizar os dados de cada gráfico
  graficoBarras.data.datasets[0].data = novosDados.barras;
  graficoBarras.update();

  graficoPizza.data.datasets[0].data = novosDados.pizza;
  graficoPizza.update();

  graficoLinha.data.datasets[0].data = novosDados.linha;
  graficoLinha.update();

  graficoRadar.data.datasets[0].data = novosDados.radar;
  graficoRadar.update();
}

function mostrarGrafico(tipo) {
  document.querySelectorAll(".grafico-canvas").forEach((canvas) => {
    canvas.style.display = "none";
  });

  const ids = {
    linha: "grafico-linha",
    radar: "grafico-radar",
    barras: "grafico",
    pizza: "grafico-pizza"
  };

  document.getElementById(ids[tipo]).style.display = "block";
}

// Disparar atualização quando mudar os campos
document.getElementById("selecaoCategoria").addEventListener("change", atualizarGraficos);
document.getElementById("selecaoData").addEventListener("change", atualizarGraficos);

// Inicializar com categoria padrão
window.onload = () => {
  criarGraficos("vendas");
  mostrarGrafico("barras");
};
