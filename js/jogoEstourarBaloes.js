function addBola() {
    // criando a div, que na verdade ser� uma bola
    var bola = document.createElement('div')

    // adicionando class = 'bola' na div
    bola.setAttribute('class', 'bola')

    // Math.floor arredonda para um n�mero inteiro para menos
    // Math.random() cria um n�mero aleat�rio de 0 a 1
    // Math.random() * 500, para gerar um n�mero at� 500
    var px = Math.floor(Math.random() * 500)
    var py = Math.floor(Math.random() * 400)

    // setando a bola em alguma coordenada aleat�ria
    bola.setAttribute('style', 'left:' + px + 'px;top:' + py + 'px;')

    // referenciando a a��o
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