function carregar () {
let msg = window.document.getElementById ('msg')
let img = window.document.getElementById ('imagem')
let data = new Date()
let hora = data.getHours()


msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora < 12){
    //BOM DIA
    img.src = 'imagens/manha.png'
    document.body.style.background = '#F1E0AC'

    
} else if (hora >= 12 && hora <= 18){
    // BOA TARDE
    img.src = 'imagens/tarde.png'
    document.body.style.background = '#93BFCF'
} else {
    // BOA NOITE
    img.src = 'imagens/noite.png'
    document.body.style.background = '#555555'
}
}
