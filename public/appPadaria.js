document.addEventListener("DOMContentLoaded", function(){

    function montarPedido(){

        let custo = 0;
        let descricao = "";

        let joelhoCheckbox = document.querySelector('input[name="joelho"]:checked');
        if(joelhoCheckbox){
            custo += 4.50;
            descricao += "<br>   - Joelho"
        }

        let paoDoceCheckbox = document.querySelector('input[name="paoDoce"]:checked');
        if(paoDoceCheckbox){
            custo += 3.00;
            descricao += "<br>   - Pão doce"
        }

        let paoNaChapaCheckbox = document.querySelector('input[name="paoNaChapa"]:checked');
        if(paoNaChapaCheckbox){
            custo += 2.50;
            descricao += "<br>   - Pão na chapa"
        }

        let paoFrancesCheckbox = document.querySelector('input[name="paoFrances"]:checked');
        if(paoFrancesCheckbox){
            custo += 2.00;
            descricao += "<br>   - Pão francês"
        }

        let paoDeQueijoCheckbox = document.querySelector('input[name="paoDeQueijo"]:checked');
        if(paoDeQueijoCheckbox){
            custo += 3.50;
            descricao += "<br>   - Pão de queijo"
        }

        let bebidasCheckbox = document.querySelector('input[name="bebidas"]:checked');
        if(bebidasCheckbox){
            custo += 4.50;
            descricao += "<br>   - Bebidas"
        }

        let pedido = descricao + "";

        //Envia dados do pedido para o pedido.html em JSON:
        let contaJSON= {
            "pedido": pedido, 
            "total": custo.toFixed(2),
        };
    
        const contaString = JSON.stringify(contaJSON);
    
        // Redirecionamento para carrinho.html e envia os dados do pedido:
        window.location.href= `carrinho.html?carrinho=${encodeURIComponent(contaString)}`;
        
    }

    //Chama a função montarpizza ao clicar:
    const botao = document.querySelector("#botao");
    botao.addEventListener('click', montarPedido);
});

