window.onload = function(){
    /* recuperation des valeurs saisies par l'utilisateur dans notre sessionStorage*/
let getName = document.getElementById('nom').value = sessionStorage.getItem('Nom');
let getSurname = document.getElementById('prenoms').value = sessionStorage.getItem('Prenoms');

}


function endPage(){
    let fonctions = document.getElementById('job').value;
    /*sauvegarder notre variable dans la sessionStorage*/
    sessionStorage.setItem('Job',fonctions);
}