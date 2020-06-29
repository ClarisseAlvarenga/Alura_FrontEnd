
//este script foi alterado para ES6. 
//let quando muda a atribuição, const quando constante (por exemplo declarando função)
// function(parametro) = (parametro) =>
//se somente um parâmetro = parametro =>

const createSprite = selector => {

	const $el = $(selector);

	const frames = ["frame1", "frame2","frame3","frame4","frame5","frame6","frame7","frame8","frame9"]
	
	let current = 0;

	const last = frames.length - 1;

	$el.addClass(frames[current]);


	const moveFrame = (from,to) => {
		$el.removeClass(from)
		.addClass(to);
	  };

	const hasNext = () => current +1 <= last;
	
	const nextFrame = () => {

		if(hasNext()){
			moveFrame(frames[current], frames[++current]);
		}
	};

	const isFinished = () => !hasNext();
		//o meu - que funcionou
		//if(current < last){
		//	return false;
		//}else{
		//	return true;
		//}
		
	
	const reset = () =>{
		moveFrame(frames[current],frames[0])
		current = 0
		
	};

//adiciona objeto para selecionar depois como função
	return{
		nextFrame, 
		reset,
		isFinished
	};


}

//    var sprite = createSprite(".sprite");
// veja comentários da alteração para ES6 no jogo.js
        




