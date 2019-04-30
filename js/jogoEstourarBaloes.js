function addBola() {
    // criando a div, que na verdade será uma bola
    var bola = document.createElement('div')

    // adicionando class = 'bola' na div
    bola.setAttribute('class', 'bola')

    // Math.floor arredonda para um número inteiro para menos
    // Math.random() cria um número aleatório de 0 a 1
    // Math.random() * 500, para gerar um número até 500
    var px = Math.floor(Math.random() * 500)
    var py = Math.floor(Math.random() * 400)

    // setando a bola em alguma coordenada aleatória
    bola.setAttribute('style', 'left:' + px + 'px;top:' + py + 'px;')

    // referenciando a ação
    bola.setAttribute('onClick', 'estourar(this)')

    document.body.appendChild(bola)
}

function estourar(elemento) {
    document.body.removeChild(elemento)
}

function iniciar() {
    // 1000 milisegundos = 1 segundo
    setInterval(addBola, 1000)
}