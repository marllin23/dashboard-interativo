// Gráfico de barras
new Chart(document.getElementById("grafico"), {
  type: 'bar',
  data: {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
    datasets: [{
      label: "Vendas",
      data: [120, 190, 300, 250, 220, 310],
      backgroundColor: "#3498db"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  }
});

// Gráfico de pizza
new Chart(document.getElementById("grafico-pizza"), {
  type: 'pie',
  data: {
    labels: ["Produto A", "Produto B", "Produto C"],
    datasets: [{
      label: "Distribuição de Vendas",
      data: [300, 200, 100],
      backgroundColor: ["#e74c3c", "#f1c40f", "#2ecc71"]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'top' }
    }
  }
});

// Gráfico de linha
new Chart(document.getElementById("grafico-linha"), {
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

// Gráfico radar
new Chart(document.getElementById("grafico-radar"), {
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

// Função para alternar gráficos
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
