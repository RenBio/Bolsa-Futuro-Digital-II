let numeroSecreto = Math.floor(Math.random() * 10) + 1;

let tentativa = Number(prompt("Adivinhe um número de 1 a 10:"));

 if (tentativa === numeroSecreto) {
      alert("🎉 Parabéns, você acertou!");
    } else {
      alert("❌ Tente novamente! O número era: " + numeroSecreto);
    }

console.log("Número secreto:", numeroSecreto);
console.log("Sua tentativa:", tentativa);