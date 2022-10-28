function showConfete(idJogo){
    const element = document.getElementById(idJogo)
    party.confetti(element)
}

setInterval(() => {
    showConfete('jg-01')
}, 3000)


