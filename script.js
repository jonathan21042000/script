
const frases = [
  "Cree en ti y todo será posible.",
  "El éxito es la suma de pequeños esfuerzos diarios.",
  "Nunca es tarde para empezar.",
  "Si puedes soñarlo, puedes lograrlo.",
  "Cada día es una nueva oportunidad para mejorar."
];

function mostrarFrase() {
  const indice = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").innerText = frases[indice];
}

function cambiarColorFondo() {
  const colores = ["#f0f8ff", "#fff0f5", "#e6ffe6", "#ffffcc", "#e0ffff"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}
