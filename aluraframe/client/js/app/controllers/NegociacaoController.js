class NegociacaoController{

    adiciona(event){

        event.preventDefault(); //Cancela a submissão do formulário
        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(inputQuantidade.value);
        console.log(inputValor.value);

    }

}