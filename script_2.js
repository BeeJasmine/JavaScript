var n = prompt("Choisis un chiffre entier :");

    var f=1,i=1;
    while(i<=n){
        f*=i;
        i++;
    }

   document.write("La factorielle de " + n + " est " + f);