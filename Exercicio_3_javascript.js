let idade = prompt("Qual é a sua idade?");
    idade = Number(idade); // Convertendo a string para número

    if (idade >= 18) {
      console.log("Pode dirigir");
    } else {
      console.log("Não pode dirigir");
    }