function adicionarIngrediente() {
    // pegando o conteúdo do input
    var ing = document.getElementById('ingrediente').value

    // pegando o conteúdo da lista
    var listahtml = document.getElementById('lista').innerHTML

    // adicionando o conteúdo do input na lista
    listahtml = listahtml + '<li>' + ing + '</li>'

    // substituindo a lista antiga pela novo com elemento adicionado
    document.getElementById('lista').innerHTML = listahtml
}