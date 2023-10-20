function verificar() {
let data = new Date ()
let ano = data.getFullYear()
let fano = document.getElementById('txtano')
let res = document.querySelector('div#resultado')

if (fano.value.length == 0 || Number(fano.value) > ano ){
    window.alert('[Erro] Verifique os dados e tente novamente!')
} else {
    let fsex = document.getElementsByName ('radsex')
    let idade = ano - Number(fano.value)
    let genero =''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade <=13){
            //Criança
            img.setAttribute('src', 'imagens/homemcrianca.png')
        } else if (idade <=25){
            //Jovem
            img.setAttribute('src', 'imagens/homemjovem.png')
        } else if (idade <=60){4
            //Adulto
            img.setAttribute('src', 'imagens/homemadulto.png')
        } else {
            //Idoso
            img.setAttribute('src', 'imagens/homemidoso.png')
        }

    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >=0 && idade <=13){
            //Criança
            img.setAttribute('src', 'imagens/mulhercrianca.png')
        } else if (idade <=25){
            //Jovem
            img.setAttribute('src', 'imagens/mulherjovem.png')
        } else if (idade <=60){
            //Adulto
            img.setAttribute('src', 'imagens/mulheradulta.png')
        } else {
            //Idoso
            img.setAttribute('src', 'imagens/mulheridosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `${genero} com ${idade} anos.`
    res.appendChild(img)
}
}