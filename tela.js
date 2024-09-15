const tela={
    largura:800,
    altura:400,
    imagemFundo:'imgverde.jpg',

    desenhar: function(){
        const img = new Image();
        img.src = this.imagemFundo;

        img.onload = function() { //Faz com que 'canvasCtx.dwimg' seja executada somente dps que a img for carregada, evitando problemas. 

        canvasCtx.drawImage(img, 0, 60, tela.largura, tela.altura); //Usada p/ desenhar a img em um elemento canvas no HTML.
        };
    }
};
tela.desenhar();