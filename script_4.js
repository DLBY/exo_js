const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

//années 70
console.log("Voici tous les entrepreneurs nés dans les années 70 :")
let checkSeventies = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 &&  entrepreneur.year<1980);
console.log(checkSeventies);

//names
console.log("Voici tous noms et prénoms des entrepreneurs :")
names()
function names() {
  names = [];
  entrepreneurs.forEach(entrepreneur => names.push(entrepreneur.first + " " + entrepreneur.last));
  names.forEach(entrepreneur => console.log(entrepreneur));
}
 
//age aujourd'hui
console.log("Voici l'âge qu'auraient les inventeurs aujourd'hui  :")

function getAge(entrepreneur){
age = new Date().getFullYear() - entrepreneur.year
return age
}

ages();
function ages() {
  entrepreneurs.forEach(entrepreneur => console.log(entrepreneur.first + " " + entrepreneur.last + " aurait " + getAge(entrepreneur) + " ans aujourd'hui"));
}

//ordre alphabetique
console.log("Voici les entrepreneurs par ordre alphabétique du nom de famille  :");

  function sort_names() {
  entrepreneurs.sort(function(a, b){
    return a.last.localeCompare(b.last);
  });
  console.log(entrepreneurs);}
  console.log(sort_names());