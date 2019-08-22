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

//1// 70s' -> intervalle 1970..1980

console.log("Voici les entrepreneurs nés dans les années 70 :");

var seventiesBirthYearArray = entrepreneurs.filter(function (x){
  return x.year >= 1970 && x.year < 1980;
});

console.log(seventiesBirthYearArray);

// const result = entrepreneurs.filter(word.year >= 1970 && word.year<=1980);
// console.log(result);


//2// nameArray = first, last

var nameArray = entrepreneurs.map(function (y){
  return {prénom: y.first, nom: y.last};
});

console.log(nameArray) ;


//3// .sort -> ordre alphabetique nom de famille


alphabeticalArray = nameArray.sort ;

console.log(alphabeticalArray) ; 




//4// calcul de lage de chaque entrepreneur = 2019 - year.....



var ageArray = entrepreneurs.map(function (z){
  return {prénom: z.first, nom: z.last, age: 2019 - z.year}
})

console.log(ageArray)



// entrepreneurs.forEach();

// //On déclare d'abord un array
// let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

// //On déclare ensuite un objet
// let weeksOfTHPObject = {Semaine5: "Rails intermédiaire", Semaine6: "Rails avancé", Semaine7: "HTML / CSS et intro au JS", Semaine8: "JavaScript de front"};

// console.log("**********Parcourons le array :")
// for(let index in weeksOfTHPArray) {
//   console.log(index); // index va aller de 0 à 3
//   console.log(weeksOfTHPArray[index]);
// }

// console.log("**********Parcourons l'objet :")
// for(let weekAttribut in weeksOfTHPObject) {
//   console.log(weekAttribut); //weekAttribut va avoir les valeurs "Semaine5" à "Semaine8"
//   console.log(weeksOfTHPObject[weekAttribut]);
// }

// console.log("**********Parcourons le array en forEach :")
// weeksOfTHPArray.forEach(weekContent => {
//   console.log(weekContent)
// });


// function sayHello() {
//   console.log("Bonjour toi !");
// }


// console.log(entrepreneurs.slice(0,2))

// Array.from