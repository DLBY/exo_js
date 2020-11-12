//2.2.1//

var input = prompt('De quel nombre veux-tu calculer la factorielle ?')

function factorial(input){
  //On décrémente i à chaque itération
  for (var i = input -1; i >=1; i--){
    //on stock la valeur de l'input à chaque itération
    input = input * i
    /*En gros si input = 4 ça fait :
                    input     var i = input - 1       input *= i         i--
    1ère itération:   4           3 = 4 - 1         12 = 4 * 3            2 
    2e itération:   12           10 = 11 - 1         24 = 12 * 2          3  
    La boucle s'arrête car i = 1
    */
  }
  return input;
}
console.log(`Le résultat est : ${factorial(input)}`)