window.onload = function(){
    
/*affichage du message de fin*/
let getCongrats = document.getElementById('congratulations').innerHTML = "Felicitations " + sessionStorage.getItem('Nom') + ' ' + 'vous etes un super ' + sessionStorage.getItem('Job');
}