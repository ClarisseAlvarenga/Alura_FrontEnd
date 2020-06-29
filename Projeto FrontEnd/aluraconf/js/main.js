var botaoSobre = $("#sobre");
var botaoPalestrantes = $("#botao-palestrantes");
var botaoInscrever = $(".inscricao")

botaoSobre.click(function() {
    $('html, body').animate({
        scrollTop: $(".painel-sobre").offset().top
    }, 500);
});


botaoPalestrantes.click(function() {
    $('html, body').animate({
        scrollTop: $(".painel-palestrantes").offset().top
    }, 500);
});

botaoInscrever.click(function() {
    $('html, body').animate({
        scrollTop: $(".formulario").offset().top
    }, 500);
});


//solução instrutor
//function ativaScrollSuave(selector){
//	$(selector).click(function(event){
//		event.preventDefault();
//		var target = $(this).attr("href");
//
//		$("html,body").animate({
//			scrollTop:$(target).offset().top
//		},1000)
//	})

//};

//ativaScrollSuave("a[href*=panel=about]")