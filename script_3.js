let lines = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

let pyramid =" ";

for(let i=1; i<=lines; i++) {
  pyramide = pyramid += '#'
  console.log(pyramid);
}