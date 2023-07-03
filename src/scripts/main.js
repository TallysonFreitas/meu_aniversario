AOS.init();

const dataEvento = new Date('Mar 02, 2024 19:00:00')
const dataEventoTimeSamp = dataEvento.getTime()

const contador = setInterval(() => {
    const agora = new Date()
    const agoraTimeSamp = agora.getTime()
    const tempo = dataEventoTimeSamp - agoraTimeSamp

    const dia = (1000 * 60 * 60 * 24)
    const hora = (1000 * 60 * 60)
    const minuto = (1000 * 60)
    const segundo = (1000)

    const diasAteEvento = Math.floor(tempo / dia)
    const horasAteEvento = Math.floor((tempo % dia) / hora)
    const minutosAteEvento = Math.floor((tempo % dia % hora) / minuto)
    const segundosAteEvento = Math.floor((tempo % dia % hora % minuto) / segundo)

    const restante = document.getElementById('contador')
    restante.innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`

    if(agoraTimeSamp > dataEventoTimeSamp){
        clearInterval()
        restante.innerHTML = 'O evento ja ocorreu.'
    }


}, 1000);