// UCU ou UCC ou UCA ou UCG ou AGU ou AGC => Sérine
// CCU ou CCC ou CCA ou CCG => Proline
// UUA ou UUG => Leucine
// UUU ou UUC => Phénylalanine
// CGU ou CGC ou CGA ou CGG ou AGA ou AGG => Arginine
// UAU ou UAC => Tyrosine

// 	transcrire en proteines :
//     CCGUCGUUGCGCUACAGC
//     CCUCGCCGGUACUUCUCG

const genetic_code ={
  UCU: 'Sérine',
  UCC: 'Sérine',
  UCA: 'Sérine',
  UCG: 'Sérine',
  AGU: 'Sérine',
  AGC: 'Sérine',
  CCU: 'Proline',
  CCC: 'Proline',
  CCA: 'Proline',
  CCG: 'Proline',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UUU: 'Phénylalanine',
  UUC: 'Phénylalanine',
  CGU: 'Arginine',
  CGC: 'Arginine',
  CGA: 'Arginine',
  CGG: 'Arginine',
  AGA: 'Arginine',
  AGG: 'Arginine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
};