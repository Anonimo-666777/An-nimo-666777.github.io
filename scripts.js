fetch("data/scripts.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("scripts-container");

    data.forEach(script => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h3>${script.name}</h3>
        <p><strong>Jogo:</strong> ${script.game}</p>
        <p><strong>Autor:</strong> ${script.author}</p>
        <p>${script.description}</p>
        <button onclick="copyScript('${script.path}')">Copiar Script</button>
      `;

      container.appendChild(card);
    });
  });

function copyScript(path) {
  fetch(path)
    .then(res => res.text())
    .then(code => {
      navigator.clipboard.writeText(code);
      alert("Script copiado!");
    });
}