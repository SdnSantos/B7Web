function adicionarIngrediente() {
    // pegando o conte�do do input
    var ing = document.getElementById('ingrediente').value

    // pegando o conte�do da lista
    var listahtml = document.getElementById('lista').innerHTML

    // adicionando o conte�do do input na lista
    listahtml = listahtml + '<li>' + ing + '</li>'

    // substituindo a lista antiga pela novo com elemento adicionado
    document.getElementById('lista').innerHTML = listahtml
}