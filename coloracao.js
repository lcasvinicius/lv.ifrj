const tela = {
    largura: 800,
    altura: 400,
    desenhar: function() {
        canvasCtx.fillStyle = this.cor;
        canvasCtx.fillRect(10, this.largura, this.altura);
    }
};

const duasCores = {
    desenhar: function() {
        for (let a = 0; a < snakeTrail.length; a++) {
            // Alterna a cor entre "green" e "blue" p/ cada metade
            context.fillStyle = a < snakeTrail.length / 2 ? 'brown' : 'white';
            context.fillRect(
              snakeTrail[a].x * fieldLength,
              snakeTrail[a].y * fieldLength,
              fieldLength - 1,
              fieldLength - 1,
            );
          }
    },
    };

if (alimento.teveColisao(cobra)) { 
    placar.qtdPontos += alimento.valor;
    cobra.crescer();
    cobra.cor = duasCores;
    alimento = new Alimento(alimento.valor++);
}


