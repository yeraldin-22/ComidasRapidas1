function cargarCabecera(){
    fetch('/ComidasRapidas1/HTML/pie-pagina.html')
    .then(response => response.text() )
    .then(data => {
        document.getElementById('pie-pagina-menu').innerHTML = data;
    }).catch(error => console.log("error al cargar el html: ", error)) 
}

cargarCabecera();