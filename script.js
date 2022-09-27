function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formano.value.length == 0 || formano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var formsex = document.getElementsByName('radsex')
        var idade = ano - Number (formano.value)
        var gênero = ''
        var img = document.getElementById('fotos')

        if (formsex[0].checked) {
                gênero = 'Homem'
                if (idade >=0 && idade < 12){
                    //Criança
                    img.setAttribute('src', '/imagens/menino.jpg')
                    document.body.style.background = '#3399FF'

                } else if (idade <= 30) {
                    //Jovem
                    img.setAttribute('src', '/imagens/homemjovem.png')
                    document.body.style.background = '#00CC00'

                } else if (idade <= 50) {
                    // Adulto
                    img.setAttribute('src', '/imagens/adultohomem.jpg')
                    document.body.style.background = '#404040'

                } else {
                    //Idose
                    img.setAttribute('src', '/imagens/idodo.jpg')
                    document.body.style.background = '#663300'
                }
            } else if (formsex[1].checked) {
                gênero = 'Mulher'
                if (idade >=0 && idade < 12){
                    //Criança
                    img.setAttribute('src', '/imagens/menina.jpg')
                    document.body.style.background = '#FF33FF'

                } else if (idade <= 30) {
                    //Jovem
                    img.setAttribute('src', '/imagens/mulherjovem.jpg')
                    document.body.style.background = '#FF3333'

                } else if (idade <= 50 ) {
                    //Adulto
                    img.setAttribute('src', '/imagens/mulheradulta.jpg')
                    document.body.style.background = '#660033'
                } else {
                    //Idosa
                    img.setAttribute('src', '/imagens/idosa.jpeg')
                    document.body.style.background = '#FFFF00'
                }
            } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`

    }
}