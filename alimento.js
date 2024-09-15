class Alimento extends ObjetoJogo {
    arqImagem='alimento.png'; 'alimento2.png'; 'alimento3.png';
    #imagem;
    constructor(valor,...args){
        super(args);
        this.valor = valor;
        this.#imagem = new Image();
        this.#imagem.src = this.arqImagem;
    }
    desenhar(){
        canvasCtx.drawImage(this.#imagem, this.x, this.y, this.tamanho, this.tamanho);
    }
}
 