const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// all rented > 1 ?
console.log("Tous les livres ont-ils été empruntés ?")
// function allRented(books) {
// if (books.every(function(x) {
//   return})
// }
let number = books.rented;
if(number != 0) {
  console.log("--- > TRUE ! TOUT les livres ont bien été empruntés ;)");
} 



// //le plus rented ?
// console.log("Quel livre fut le plus emprunté ?")
// function mostRented {

// }



// //le moins rented ?
// console.log("Quel livre fut le moins emprunté ?")
// function lessRented {

// }


//Trouve le livre avec l'ID: 873495
console.log("Trouve le livre n°873495, s'il-te-plait :")
// function findByID(argument) {
//   // body...
// }

y = books.find(function(book){
  return book.id === 873495
})
console.log("--- > Ok, le voici :")
console.log(y)
console.log("Merci beaucoup, j'avais perdu ce superbe roman...")
console.log("--- > Je vous en prie, je suis là pour vous servir.")


// //Supprime le livre avec l'ID: 133712 ;
console.log("Supprime maintenant le magnifique livre n°133712")
// function deleteByID(book) {
//   return book.id === 133712; 
// }

z = books.find(function(book){
  return book.id === 133712
})
books.splice(books.indexOf(z), 1);
console.log("--- > Ok... j'exécute les ordres... en voici la preuve :")
console.log(books)
console.log("Gatsby a bel et bien disparu. Je sais, je te l'ai demandé mais mon coeur a été supprimé avec.")





// // tri par ordre alphabétique .sort
console.log("J'ai besoin de réconfort. Tu me connais : j'aime que tout soit ordonné !")
console.log("Donne moi la liste des livres, et prends soin de les trier par ordre alphabétique s'il-te-plait :")
// function alphabeticalSortBooks {
console.log("--- > Classement par ordre alphabétique :")

var alphabeticalSort = books.sort(function(a, b){
  if(a.title < b.title) {return -1 ;}
  if(a.title > b.title) {return 1 ;}
})
// function alphabeticalSort(entrepreneurs) {
//   console.log(entrepreneurs.sort(lastNameCompare));
// }
console.log(alphabeticalSort) ;

// }