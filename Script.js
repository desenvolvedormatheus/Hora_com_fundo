function carregar(){
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#foto')
    let data = new Date()
    let hora = data.getHours()
    let copy = document.querySelector('.copy')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12){
        img.src = 'foto_manha.png'
        document.body.style.background = '#f4e2c3'
        copy.style.color = '#f4e2c3'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'foto_tarde.png'
        document.body.style.background = '#396781'
        copy.style.color = '#396781'
    } else{
        img.src = 'foto_noite.png'
        document.body.style.background = '#11151c'
        copy.style.color = '#11151c'
    }
}

setInterval(carregar, 500)