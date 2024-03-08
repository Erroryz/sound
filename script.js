document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('tempo-restante').style.opacity = '0';
});
function fadeInTempo() {
    var tempoRestante = document.getElementById('tempo-restante');
    if (tempoRestante.style.opacity !== '1') {
        var opacidadeAtual = parseFloat(tempoRestante.style.opacity);
        var novaOpacidade = opacidadeAtual + 0.1;
        tempoRestante.style.opacity = novaOpacidade;
        setTimeout(fadeInTempo, 100); 
    }
}
function tocarMusica() {
    var musica = document.getElementById("musica");
    musica.play();
    musica.addEventListener('timeupdate', function() {
        var tempoAtual = musica.currentTime;
        var duracaoTotal = musica.duration;
        var tempoRestante = duracaoTotal - tempoAtual;
        document.getElementById('tempo-restante').textContent =  formatarTempo(tempoRestante);
        fadeInTempo()
    });
}

function formatarTempo(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosFormatados = Math.floor(segundos % 60);
    segundosFormatados = segundosFormatados < 10 ? '0' + segundosFormatados : segundosFormatados;
    return minutos + ':' + segundosFormatados;
}

