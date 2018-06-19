function result(){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    /* Sauvegarder les donnes dans une sessionStorage */
    sessionStorage.setItem('Nom',name);
    sessionStorage.setItem('Prenoms', surname);
}

