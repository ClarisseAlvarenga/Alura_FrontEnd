
//este script foi alterado para ES6. 
//let quando muda a atribuição, const quando constante (por exemplo declarando função)
// function(parametro) = (parametro) =>
//se somente um parâmetro = parametro =>
//mais comentarios no jogo.js

const criaController = jogo => {

    const $entrada = $('#entrada');
    const $lacunas = $('.lacunas');


    // consulta jogo.getLacunas() e exibe para o usuário cada lacuna 

    const exibeLacunas =  () => {
    
		$lacunas.empty();
		jogo.getLacunas().forEach(function(lacuna){
			$("<li>")
				.addClass("lacuna")
					.text(lacuna)
						.appendTo($lacunas);
		});


             
    };

    // muda o texto do placeHolder do campo de entrada    
    const mudaPlaceHolder = texto => 
    	$entrada.val("").attr("placeholder",texto);
    	//acertei (com ajuda do instrutor)


    // passa para jogo.setPalavraSecreta() o valor digitado pelo jogador e chama o a função `exibeLacunas()` e `mudaPlaceHolder()` definidas no controller. 

    const guardaPalavraSecreta = () => {

        //comecei certo...
        //try e catch buscam erros do console para mostrar para o usuário

        try{
        	jogo.setPalavraSecreta($entrada.val().trim());
        $entrada.val("");
        exibeLacunas();
        mudaPlaceHolder("chute");

        } catch(err){
        	alert(err.message);
        }
    };

    const reinicia = () =>{
    	jogo.reinicia();
    	$lacunas.empty();
    	mudaPlaceHolder("Palavra secreta");
    }

    const leChute = () =>{

    	//acertei!!!!!!(faltou somente o setTimeout)
    	try{

    		jogo.processaChute($entrada.val().trim().substr(0,1));
      	$entrada.val("");
    	exibeLacunas();

    	setTimeout(() =>{
	    	if(jogo.ganhouOuPerdeu()){
	    	if(jogo.ganhou()){
	    	alert("Parabéns! Você adivinhou a minha palvara!")
	      		
	      	}else if(jogo.perdeu()){
	      		alert("Que pena, você perdeu! Tente outra vez")
	      		
	      	}
	      		reinicia();
	   		}    

    	},200);


    	} catch(err){
    		alert(err.message);
    	}
    	
    	 

    };

    // faz a associação do evento keypress para capturar a entrada do usuário toda vez que ele teclar ENTER
    const inicia =  () => {

    	$entrada.keypress(event =>{
    		//13 equivale a enter neste código
    		if(event.which == 13){
    			switch (jogo.getEtapa()){
    				case 1:
    					//alert('etapa 1 - falta implementar');
    					guardaPalavraSecreta();
    					break;
    				case 2:
    					leChute();
    					break;
    			}
    		}
    	})

        //console.log('falta implementar');
    };

    // retorna um objeto com a propriedade inicia, que deve ser chamada assim que o controller for criado. 
    return { inicia };
};

