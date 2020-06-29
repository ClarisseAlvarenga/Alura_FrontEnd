
//este script foi alterado para ES6. 
//let quando muda a atribuição, const quando constante (por exemplo declarando função)
// function(parametro) = (parametro) =>
//se somente um parâmetro = parametro =>

const criaJogo = sprite =>{

	let etapa = 1;
	let lacunas = [];
	let palavraSecreta = "";
	//var ganhouJogo = false;
	//var perdeJogo = false;

	const ganhou = () => lacunas.length

    	  ? !lacunas.some(function(lacuna){

    		return lacuna == "";

    		})
    	  : false;


  	   //meu código (funcionou com um bug (retornava verdadeiro antes do início do jogo))
    	//if(lacunas.includes("")){
    	//	ganhouJogo = false
    	//	return ganhouJogo;
    	//}else{
    	//	ganhouJogo = true;
    	//	return ganhouJogo;
    	//}

    	
   
    

    const perdeu = () => sprite.isFinished();

    	//aeroinstrução com somente uma instrução.
    	//inclui return e não precisa criar bloco{}

        //meu código (funcionou)
        //var resultado = sprite.isFinished();
        //if(resultado){
        //	perdeJogo = true;
        //	return perdeJogo;
        //}else{
        //	

    const ganhouOuPerdeu = () => ganhou() || perdeu();

        //meu código (funcionou parcialmente)
        //if(ganhouJogo||perdeJogo == true){
        //	return true;
        //}else{
        //	return false;
        //}

     
        


    const reinicia = () =>{
    	//meu código = ao do instrutor
    	palavraSecreta = ""
    	lacunas = []
    	etapa = 1
    	sprite.reset();


    }


	const processaChute = chute =>{

		if(!chute.trim()) throw Error("Chute inválido");

		const exp = new RegExp(chute, "gi");

		//g verifica do início ao fim
		//i case insensitive
		let resultado, 
		acertou = false;

		//executa Regexp
		//exp.exec(palavraSecreta);

		while(resultado = exp.exec(palavraSecreta)){

			//resultado.index busca a localização da letra na palavra
			//lacunas[resultado.index] = chute;
			//acertou = true;
			acertou = lacunas[resultado.index] = chute;
			

		}

		if(!acertou){
			sprite.nextFrame();
		}

		//meu código (funcionou parcialmente - preencheu todas as lacunas com o chute)
		//var lacuna = palavraSecreta.indexOf(chute); (localizou a lacuna do chute corretamente)
		//if(palavraSecreta.includes(chute)){
		//	
		//	lacunas.fill(chute);
		//}else{
		//	sprite.nextFrame();
		//	console.log("errou");
		//}


	}
	

	const criaLacunas = () =>{
		//for(let i=0;i < palavraSecreta.length; i++){
		//	lacunas.push('');
		//}

		lacunas = Array(palavraSecreta.length).fill("");


	};

	const proximaEtapa = () =>	etapa = 2;

	const setPalavraSecreta = palavra =>{
		//var palavra = $("#entrada").val()
		if(!palavra.trim()) throw Error("Palavra secreta inválida");
		

		palavraSecreta = palavra;
		criaLacunas();
		proximaEtapa();

	};

	

	const getLacunas = () => lacunas;

		//var numLetras = $(palavraSecreta).text();
		//var qtdLacunas = numLetras.split(/[a-zA-Z]/).length;
		//console.log(qtdLacunas);
		//return qtdLacunas.texto;
	

	const getEtapa = () => etapa;

	

	return{
		setPalavraSecreta,
		getLacunas,
		getEtapa,
		processaChute,
		ganhou,
		perdeu,
		ganhouOuPerdeu,
		reinicia

		//se propriedade tem o mesmo nome, não precisa do 
		//nome: nome
	}


		
};



var jogo = criaJogo(createSprite(".sprite"));