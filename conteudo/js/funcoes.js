var audio_trilha_sonora = new Howl({urls: ['media/audio/audio_trilha_sonora.mp3'],loop:true, volume: 0.2, onend: function() { tocar_audio_trilha_sonora();}});

var audio_trilha_sonora_conclusao = new Howl({urls: ['media/audio/audio_trilha_sonora_conclusao.mp3'],loop:true, volume: 0.2, onend: function() { tocar_audio_trilha_sonora_conclusao();}});

var audio_narracao_introducao = new Howl({urls: ['media/audio/audio_narracao_introducao.mp3'],volume: 1, sprite:{audio_narracao_introducao_corte1: [3000, 40000], audio_narracao_introducao_corte2: [2000, 40000]}});

var audio_narracao_explicacao = new Howl({urls: ['media/audio/audio_narracao_explicacao.mp3'],volume: 1, sprite:{audio_narracao_explicacao_corte1: [4000, 40000], audio_narracao_explicacao_corte2: [2000, 40000]}});
/* Exercícios */
var audio_narracao_exercicio_1 = new Howl({urls: ['media/audio/audio_narracao_exercicio_1.mp3'],volume: 1, sprite:{audio_narracao_exercicio_1_corte1: [3000, 40000], audio_narracao_exercicio_1_corte2: [2000, 40000]}});

var audio_narracao_exercicio_2 = new Howl({urls: ['media/audio/audio_narracao_exercicio_2.mp3'],volume: 1, sprite:{audio_narracao_exercicio_2_corte1: [3000, 40000], audio_narracao_exercicio_2_corte2: [2000, 40000]}});

var audio_narracao_exercicio_3 = new Howl({urls: ['media/audio/audio_narracao_exercicio_3.mp3'],volume: 1, sprite:{audio_narracao_exercicio_3_corte1: [3000, 40000], audio_narracao_exercicio_3_corte2: [2000, 40000]}});

var audio_narracao_exercicio_4 = new Howl({urls: ['media/audio/audio_narracao_exercicio_4.mp3'],volume: 1, sprite:{audio_narracao_exercicio_4_corte1: [3000, 40000], audio_narracao_exercicio_4_corte2: [2000, 40000]}});

var audio_narracao_exercicio_5 = new Howl({urls: ['media/audio/audio_narracao_exercicio_5.mp3'],volume: 1, sprite:{audio_narracao_exercicio_5_corte1: [3000, 40000], audio_narracao_exercicio_5_corte2: [2000, 40000]}});
/* Devolutivas */
var audio_narracao_devolutiva_erro = new Howl({urls: ['media/audio/audio_narracao_devolutiva_erro.mp3'],volume: 1, sprite:{audio_narracao_devolutiva_erro_corte1: [1000, 40000], audio_narracao_devolutiva_erro_corte2: [2000, 40000]}});

var audio_narracao_conclusao_erro = new Howl({urls: ['media/audio/audio_narracao_conclusao_erro.mp3'],volume: 1, sprite:{audio_narracao_conclusao_erro_corte1: [2000, 40000], audio_narracao_conclusao_erro_corte2: [2000, 40000]}});

var audio_narracao_conclusao_acerto = new Howl({urls: ['media/audio/audio_narracao_conclusao_acerto.mp3'],volume: 1, sprite:{audio_narracao_conclusao_acerto_corte1: [2000, 40000], audio_narracao_conclusao_acerto_corte2: [2000, 40000]}});
/* Efeitos */
var audio_efeito_porta = new Howl({urls: ['media/audio/audio_efeito_porta.mp3'],volume: 1, sprite:{audio_efeito_porta_corte1: [0, 40000], audio_efeito_porta_corte2: [0, 40000]}});

var audio_efeito_chave_errada = new Howl({urls: ['media/audio/audio_efeito_chave_errada.mp3'],volume: 1, sprite:{audio_efeito_chave_errada_corte1: [1700, 40000], audio_efeito_chave_errada_corte2: [0, 40000]}});

var audio_efeito_chave_certa = new Howl({urls: ['media/audio/audio_efeito_chave_certa.mp3'],volume: 1, sprite:{audio_efeito_chave_certa_corte1: [3000, 40000], audio_efeito_chave_certa_corte2: [0, 40000]}});
/* Variáveis globais para navegabilidade */
var exercicios, exercicio_atual, tentativas, acertos, exercicio_atual_resposta;
exercicios =[0,0,0,0,0];
exercicio_atual=0;
//exercicio_atual_resposta=exercicios[exercicio_atual];
tentativas=3;
acertos=0;
/* Funções para controle de áudio */
function tocar_audio_trilha_sonora(){
	audio_trilha_sonora.stop();
	audio_trilha_sonora.play();
}

function tocar_audio_trilha_sonora_conclusao(){
}

function parar_todos_audios(){
	audio_narracao_introducao.stop();
	audio_narracao_explicacao.stop();
	audio_narracao_exercicio_1.stop();
	audio_narracao_exercicio_2.stop();
	audio_narracao_exercicio_3.stop();
	audio_narracao_exercicio_4.stop();
	audio_narracao_exercicio_5.stop();
	audio_narracao_devolutiva_erro.stop();
	audio_narracao_conclusao_erro.stop();
	audio_narracao_conclusao_acerto.stop();
}



'use strict';

var startGame = {

	// SEU CÓDIGO JAVASCRIPT AQUI
	init: function(){
		/* if para detalhe de fontes nos tablets */
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			document.querySelector("#conclusao_acertos_texto").style.fontSize="20px";
			document.querySelector("#grupo_imgs").style.display="none";
			document.querySelector("#inicial_fundo_area").className="nada";
			document.querySelector("#inicial_fundo").className="nada";
			document.querySelector("#inicial_fundo").style.width="1024px";
			document.querySelector("#inicial_fundo_area").style.top="36px";
			document.querySelector("#inicial_fundo_area").style.width="1024px";
			
		}
		//
		sortear_exercicios();
		audio_trilha_sonora.play();
		movimento_entrada_inicial();
	}
};

/* Funções para eventos */
function sortear_exercicios(){
	var ordem;
		ordem=Math.floor((Math.random()*9))+1;
		//
		if(ordem==1){
			exercicios =[1,2,3,4,5];
		}
		if(ordem==2){
			exercicios =[5,4,3,2,1];
		}
		if(ordem==3){
			exercicios =[1,3,4,2,5];
		}
		if(ordem==4){
			exercicios =[3,4,5,2,1];
		}
		if(ordem==5){
			exercicios =[2,4,3,5,1];
		}
		if(ordem==6){
			exercicios =[5,1,2,4,3];
		}
		if(ordem==7){
			exercicios =[3,5,2,1,4];
		}
		if(ordem==8){
			exercicios =[4,3,2,5,1];
		}
		if(ordem==9){
			exercicios =[5,3,4,1,2];
		}
		if(ordem==10){
			exercicios =[1,3,5,4,2];
		}
	exercicio_atual_resposta=exercicios[exercicio_atual];
	
}


$("#inicial_btn_jogar").click(function() {
	movimento_entrada_explicacao();	
});
$("#conclusao_erros_btn_reiniciar, #conclusao_acertos_btn_reiniciar").click(function() {
	sessionStorage.setItem('reiniciar_oed', 'sim');
});
$("#inicial_btn_continuar").click(function() {
	//exercicio_atual=exercicios[0];	
	movimento_entrada_exercicio();
	document.querySelector("#inicial_cobertura").className="nada";
	document.querySelector("#inicial_cobertura").style.opacity="0";
});
// Botões de alternativas
$("#exercicios_btn_alternativa_a").click(function() {
	//
	document.querySelector("#inicial_cobertura").style.display="inherit";
	document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta";
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta_0s";
	}
	parar_todos_audios();
	if(exercicios[exercicio_atual]==1)	{
		acertos++;
		setTimeout(function(){
			//alert("Resposta correta!");
			exercicio_atual_resposta="trapezio";
			document.querySelector("#exercicios_btn_alternativa_a").style.backgroundImage= "url('./img/exercicios_btn_alternativa_a_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_a").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_a").style.fontWeight="bold";		
			document.querySelector("#exercicios_btn_alternativa_a").className="animacao_atraso_0 tada";
			document.querySelector("#devolutiva_chave_trapezio").style.backgroundImage= "url('./img/devolutiva_chave_trapezio_brilho.png')";
			document.querySelector("#devolutiva_chave_trapezio").style.display="inherit";
			exercicio_atual++;
		}, 1000);
		setTimeout(function(){
			//movimento_entrada_exercicio();
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_trapezio").className="animacao_atraso_0t2 zoomInRight";
			//document.querySelector("#devolutiva_chave_trapezio_brilho").className="animacao_atraso_6 fadeIn";
			movimento_proximo_exercicio();
		}, 2000);
		setTimeout(function(){
			document.querySelector("#devolutiva_chave_trapezio").className="animacao_giro_chave_trapezio";

		}, 4000);			
	}else{
		tentativas--;
		document.querySelector("#exercicios_btn_alternativa_a_cobertura").style.display="inherit";		
		audio_efeito_chave_errada.play("audio_efeito_chave_errada_corte1");
		setTimeout(function(){				
			verificar_conclusao();
			$("#exercicios_alternativa_marca1_erro_a, #exercicios_alternativa_marca2_erro_a").css("display", "inherit");
			document.querySelector("#exercicios_alternativa_marca1_erro_a").className="animacao_atraso_0t500ms fadeIn";
			document.querySelector("#exercicios_alternativa_marca2_erro_a").className="animacao_atraso_200t500ms fadeIn";
			document.querySelector("#exercicios_rotulo_alternativa_a").style.textDecoration="line-through";
			document.querySelector("#devolutiva_chave_trapezio").style.backgroundImage= "url('./img/devolutiva_chave_trapezio.png')";
			document.querySelector("#devolutiva_chave_trapezio").style.display="inherit";
			//
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_trapezio").className="animacao_atraso_0t2 zoomInRight";
	}, 1000);		
	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="inherit";
			document.querySelector("#devolutiva_quebra_fundo").style.display="inherit";
			document.querySelector("#devolutiva_chave_trapezio_quebrada").style.display="inherit";
			document.querySelector("#devolutiva_chave_trapezio_quebrada").className="animacao_atraso_0t10 animacao_queda_chave";
			//
			document.querySelector("#devolutiva_fade_branco").className="animacao_atraso_0t500ms fadeOut";
			document.querySelector("#devolutiva_chave_trapezio").className="animacao_chave_errada";
	}, 3000);		
		
		if(tentativas==0){
			movimento_entrada_terceiro_erro();
		}else{

		audio_narracao_devolutiva_erro.play("audio_narracao_devolutiva_erro_corte1");

	setTimeout(function(){
			movimento_saida_exercicio();
	}, 3000);
	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="none";
			
	}, 4000);	

	}
	}
});
$("#exercicios_btn_alternativa_b").click(function() {
	//
	document.querySelector("#inicial_cobertura").style.display="inherit";
	document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta";
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta_0s";
	}	
	parar_todos_audios();	
	if(exercicios[exercicio_atual]==2)	{
		acertos++;
		setTimeout(function(){
			exercicio_atual_resposta="quadrado";
			document.querySelector("#exercicios_btn_alternativa_b").style.backgroundImage= "url('./img/exercicios_btn_alternativa_b_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_b").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_b").style.fontWeight="bold";		
			document.querySelector("#exercicios_btn_alternativa_b").className="animacao_atraso_0 tada";
			document.querySelector("#devolutiva_chave_quadrado").style.backgroundImage= "url('./img/devolutiva_chave_quadrado_brilho.png')";
			document.querySelector("#devolutiva_chave_quadrado").style.display="inherit";
			exercicio_atual++;
		}, 1000);
		setTimeout(function(){
			//movimento_entrada_exercicio();
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_quadrado").className="animacao_atraso_0t2 zoomInRight";
			//document.querySelector("#devolutiva_chave_trapezio_brilho").className="animacao_atraso_6 fadeIn";
			movimento_proximo_exercicio();
		}, 2000);
		setTimeout(function(){
			document.querySelector("#devolutiva_chave_quadrado").className="animacao_giro_chave_trapezio";

		}, 4000);			
	}else{
		tentativas--;
		
		document.querySelector("#exercicios_btn_alternativa_b_cobertura").style.display="inherit";		
		
		audio_efeito_chave_errada.play("audio_efeito_chave_errada_corte1");
		setTimeout(function(){				
			verificar_conclusao();
			$("#exercicios_alternativa_marca1_erro_b, #exercicios_alternativa_marca2_erro_b").css("display", "inherit");
			document.querySelector("#exercicios_alternativa_marca1_erro_b").className="animacao_atraso_0t500ms fadeIn";
			document.querySelector("#exercicios_alternativa_marca2_erro_b").className="animacao_atraso_200t500ms fadeIn";
			document.querySelector("#exercicios_rotulo_alternativa_b").style.textDecoration="line-through";
			document.querySelector("#devolutiva_chave_quadrado").style.backgroundImage= "url('./img/devolutiva_chave_quadrado.png')";
			document.querySelector("#devolutiva_chave_quadrado").style.display="inherit";
			//
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_quadrado").className="animacao_atraso_0t2 zoomInRight";
	}, 1000);		
	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="inherit";
			document.querySelector("#devolutiva_quebra_fundo").style.display="inherit";
			document.querySelector("#devolutiva_chave_quadrado_quebrada").style.display="inherit";
			document.querySelector("#devolutiva_chave_quadrado_quebrada").className="animacao_atraso_0t10 animacao_queda_chave";
			//
			document.querySelector("#devolutiva_fade_branco").className="animacao_atraso_0t500ms fadeOut";
			document.querySelector("#devolutiva_chave_quadrado").className="animacao_chave_errada";
	}, 3000);		
		
		
		
		
		
		
		if(tentativas==0){
			movimento_entrada_terceiro_erro();
		}else{		

		audio_narracao_devolutiva_erro.play("audio_narracao_devolutiva_erro_corte1");

	setTimeout(function(){
			movimento_saida_exercicio();
	}, 3000);
	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="none";
			
	}, 4000);		
	}
	}
});

$("#exercicio_erro_continuar").click(function() {
	document.querySelector("#devolutiva_area").style.width="1025px";
	if(tentativas==0){
		acertos++;
		setTimeout(function(){
			document.querySelector("#conclusao_erros").style.display="inherit";
			movimento_entrada_conclusao_erros();
		}, 0);
	}else{
		document.querySelector("#devolutiva_quebra_fundo").className="animacao_atraso_0 fadeOut";

		parar_todos_audios();
		document.querySelector("#devolutiva_chave_trapezio").className="animacao_atraso_0t1ms zoomOutRight";
		document.querySelector("#devolutiva_chave_quadrado").className="animacao_atraso_0t1ms zoomOutRight";
		document.querySelector("#devolutiva_chave_losango").className="animacao_atraso_0t1ms zoomOutRight";
		document.querySelector("#devolutiva_chave_retangulo").className="animacao_atraso_0t1ms zoomOutRight";
		document.querySelector("#devolutiva_chave_paralelogramo").className="animacao_atraso_0t1ms zoomOutRight";	
		//
		document.querySelector("#devolutiva_chave_trapezio").style.display="none";
		document.querySelector("#devolutiva_chave_quadrado").style.display="none";
		document.querySelector("#devolutiva_chave_losango").style.display="none";
		document.querySelector("#devolutiva_chave_retangulo").style.display="none";
		document.querySelector("#devolutiva_chave_paralelogramo").style.display="none";
		//
		setTimeout(function(){		
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="none";
			movimento_voltar_exercicio_apos_erro();
		}, 500);		
		setTimeout(function(){		
			//
			$("#devolutiva_cobertura_macaneta, #devolutiva_area, #devolutiva_cobertura, #devolutiva_chave_trapezio, #devolutiva_chave_quadrado, #devolutiva_chave_losango, #devolutiva_chave_retangulo, #devolutiva_chave_paralelogramo").css("display", "none");
			document.querySelector("#devolutiva_quebra_fundo").style.display="none";
			document.querySelector("#devolutiva_quebra_fundo").className="nada";
			//
			$("#devolutiva_chave_trapezio_quebrada, #devolutiva_chave_quadrado_quebrada, #devolutiva_chave_losango_quebrada, #devolutiva_chave_retangulo_quebrada, #devolutiva_chave_paralelogramo_quebrada").css("display", "none");
		}, 1000);		
	}
});


$("#exercicios_btn_alternativa_c").click(function() {
	//
	document.querySelector("#inicial_cobertura").style.display="inherit";
	document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta";
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta_0s";
	}	
	parar_todos_audios();	
	if(exercicios[exercicio_atual]==3){
		acertos++;
		setTimeout(function(){	
			exercicio_atual_resposta="losango";		
			document.querySelector("#exercicios_btn_alternativa_c").style.backgroundImage= "url('./img/exercicios_btn_alternativa_c_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_c").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_c").style.fontWeight="bold";
			document.querySelector("#exercicios_btn_alternativa_c").className="animacao_atraso_0 tada";			
			document.querySelector("#devolutiva_chave_losango").style.backgroundImage= "url('./img/devolutiva_chave_losango_brilho.png')";
			document.querySelector("#devolutiva_chave_losango").style.display="inherit";
			exercicio_atual++;
		}, 1000);
		setTimeout(function(){
			//movimento_entrada_exercicio();
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_losango").className="animacao_atraso_0t2 zoomInRight";
			//document.querySelector("#devolutiva_chave_trapezio_brilho").className="animacao_atraso_6 fadeIn";
			movimento_proximo_exercicio();
		}, 2000);
		setTimeout(function(){
			document.querySelector("#devolutiva_chave_losango").className="animacao_giro_chave_trapezio";

		}, 4000);			
	}else{
		tentativas--;
		document.querySelector("#exercicios_btn_alternativa_c_cobertura").style.display="inherit";		
		audio_efeito_chave_errada.play("audio_efeito_chave_errada_corte1");
		setTimeout(function(){				
			verificar_conclusao();
			$("#exercicios_alternativa_marca1_erro_c, #exercicios_alternativa_marca2_erro_c").css("display", "inherit");
			document.querySelector("#exercicios_alternativa_marca1_erro_c").className="animacao_atraso_0t500ms fadeIn";
			document.querySelector("#exercicios_alternativa_marca2_erro_c").className="animacao_atraso_200t500ms fadeIn";
			document.querySelector("#exercicios_rotulo_alternativa_c").style.textDecoration="line-through";
			document.querySelector("#devolutiva_chave_losango").style.backgroundImage= "url('./img/devolutiva_chave_losango.png')";
			document.querySelector("#devolutiva_chave_losango").style.display="inherit";
			//
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_losango").className="animacao_atraso_0t2 zoomInRight";
	}, 1000);		
		
	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="inherit";
			document.querySelector("#devolutiva_quebra_fundo").style.display="inherit";
			document.querySelector("#devolutiva_chave_losango_quebrada").style.display="inherit";
			document.querySelector("#devolutiva_chave_losango_quebrada").className="animacao_atraso_0t10 animacao_queda_chave";
			//
			document.querySelector("#devolutiva_fade_branco").className="animacao_atraso_0t500ms fadeOut";
			document.querySelector("#devolutiva_chave_losango").className="animacao_chave_errada";
	}, 3000);		
		
		
		
		
		
		
		
		
		if(tentativas==0){
			movimento_entrada_terceiro_erro();
		}else{		

		audio_narracao_devolutiva_erro.play("audio_narracao_devolutiva_erro_corte1");

	setTimeout(function(){
			movimento_saida_exercicio();
	}, 3000);
	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="none";
			
	}, 4000);		
	}
	}
});
$("#exercicios_btn_alternativa_d").click(function() {
	//
	document.querySelector("#inicial_cobertura").style.display="inherit";
	document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta";
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta_0s";
	}	
	parar_todos_audios();	
	if(exercicios[exercicio_atual]==4)	{
		acertos++;
		setTimeout(function(){	
			exercicio_atual_resposta="retangulo";
			document.querySelector("#exercicios_btn_alternativa_d").style.backgroundImage= "url('./img/exercicios_btn_alternativa_d_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_d").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_d").style.fontWeight="bold";
			document.querySelector("#exercicios_btn_alternativa_d").className="animacao_atraso_0 tada";
			document.querySelector("#devolutiva_chave_retangulo").style.backgroundImage= "url('./img/devolutiva_chave_retangulo_brilho.png')";
			document.querySelector("#devolutiva_chave_retangulo").style.display="inherit";
			exercicio_atual++;
		}, 1000);
		setTimeout(function(){
			//movimento_entrada_exercicio();
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_retangulo").className="animacao_atraso_0t2 zoomInRight";
			//document.querySelector("#devolutiva_chave_trapezio_brilho").className="animacao_atraso_6 fadeIn";
			movimento_proximo_exercicio();
		}, 2000);
		setTimeout(function(){
			document.querySelector("#devolutiva_chave_retangulo").className="animacao_giro_chave_trapezio";

		}, 4000);			
	}else{
		tentativas--;
		document.querySelector("#exercicios_btn_alternativa_d_cobertura").style.display="inherit";		
		audio_efeito_chave_errada.play("audio_efeito_chave_errada_corte1");		
		setTimeout(function(){				
			verificar_conclusao();
			$("#exercicios_alternativa_marca1_erro_d, #exercicios_alternativa_marca2_erro_d").css("display", "inherit");
			document.querySelector("#exercicios_alternativa_marca1_erro_d").className="animacao_atraso_0t500ms fadeIn";
			document.querySelector("#exercicios_alternativa_marca2_erro_d").className="animacao_atraso_200t500ms fadeIn";
			document.querySelector("#exercicios_rotulo_alternativa_d").style.textDecoration="line-through";
			document.querySelector("#devolutiva_chave_retangulo").style.backgroundImage= "url('./img/devolutiva_chave_retangulo.png')";
			document.querySelector("#devolutiva_chave_retangulo").style.display="inherit";
			//
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_retangulo").className="animacao_atraso_0t2 zoomInRight";
	}, 1000);		
	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="inherit";
			document.querySelector("#devolutiva_quebra_fundo").style.display="inherit";
			document.querySelector("#devolutiva_chave_retangulo_quebrada").style.display="inherit";
			document.querySelector("#devolutiva_chave_retangulo_quebrada").className="animacao_atraso_0t10 animacao_queda_chave";
			//
			document.querySelector("#devolutiva_fade_branco").className="animacao_atraso_0t500ms fadeOut";
			document.querySelector("#devolutiva_chave_retangulo").className="animacao_chave_errada";
	}, 3000);			
		if(tentativas==0){
			movimento_entrada_terceiro_erro();
		}else{		

		audio_narracao_devolutiva_erro.play("audio_narracao_devolutiva_erro_corte1");


	setTimeout(function(){
			movimento_saida_exercicio();
	}, 3000);	
	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="none";
			
	}, 4000);		
	}
	}
});
$("#exercicios_btn_alternativa_e").click(function() {
	//
	document.querySelector("#inicial_cobertura").style.display="inherit";
	document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta";
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		document.querySelector("#inicial_painel_fundo").className="animacao_aproxima_porta_0s";
	}	
	parar_todos_audios();	
	if(exercicios[exercicio_atual]==5)	{
		acertos++;
		setTimeout(function(){
			exercicio_atual_resposta="paralelogramo";			
			document.querySelector("#exercicios_btn_alternativa_e").style.backgroundImage= "url('./img/exercicios_btn_alternativa_e_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_e").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_e").style.fontWeight="bold";
			document.querySelector("#exercicios_btn_alternativa_e").className="animacao_atraso_0 tada";
			document.querySelector("#devolutiva_chave_paralelogramo").style.backgroundImage= "url('./img/devolutiva_chave_paralelogramo_brilho.png')";	
			document.querySelector("#devolutiva_chave_paralelogramo").style.display="inherit";
			exercicio_atual++;
		}, 1000);
		setTimeout(function(){
			//movimento_entrada_exercicio();
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_paralelogramo").className="animacao_atraso_0t2 zoomInRight";
			//document.querySelector("#devolutiva_chave_trapezio_brilho").className="animacao_atraso_6 fadeIn";
			movimento_proximo_exercicio();
		}, 2000);
		setTimeout(function(){
			document.querySelector("#devolutiva_chave_paralelogramo").className="animacao_giro_chave_trapezio";

		}, 4000);			
	}else{
		tentativas--;
		document.querySelector("#exercicios_btn_alternativa_e_cobertura").style.display="inherit";		
		audio_efeito_chave_errada.play("audio_efeito_chave_errada_corte1");		
		setTimeout(function(){				
			verificar_conclusao();
			$("#exercicios_alternativa_marca1_erro_e, #exercicios_alternativa_marca2_erro_e").css("display", "inherit");
			document.querySelector("#exercicios_alternativa_marca1_erro_e").className="animacao_atraso_0t500ms fadeIn";
			document.querySelector("#exercicios_alternativa_marca2_erro_e").className="animacao_atraso_200t500ms fadeIn";
			document.querySelector("#exercicios_rotulo_alternativa_e").style.textDecoration="line-through";
			document.querySelector("#devolutiva_chave_paralelogramo").style.backgroundImage= "url('./img/devolutiva_chave_paralelogramo.png')";
			document.querySelector("#devolutiva_chave_paralelogramo").style.display="inherit";
			//
			document.querySelector("#devolutiva_cobertura_macaneta").style.display="inherit";	
			document.querySelector("#devolutiva_area").style.display="inherit";
			document.querySelector("#devolutiva_chave_paralelogramo").className="animacao_atraso_0t2 zoomInRight";
	}, 1000);

	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="inherit";
			document.querySelector("#devolutiva_quebra_fundo").style.display="inherit";
			document.querySelector("#devolutiva_chave_paralelogramo_quebrada").style.display="inherit";
			document.querySelector("#devolutiva_chave_paralelogramo_quebrada").className="animacao_atraso_0t10 animacao_queda_chave";
			//
			document.querySelector("#devolutiva_fade_branco").className="animacao_atraso_0t500ms fadeOut";
			document.querySelector("#devolutiva_chave_paralelogramo").className="animacao_chave_errada";
	}, 3000);	
		if(tentativas==0){
			movimento_entrada_terceiro_erro();
		}else{		
		audio_narracao_devolutiva_erro.play("audio_narracao_devolutiva_erro_corte1");
	setTimeout(function(){

			movimento_saida_exercicio();
	}, 3000);
	setTimeout(function(){
			document.querySelector("#devolutiva_fade_branco").style.display="none";
			
	}, 4000);		
	}
	}
});

function movimento_entrada_terceiro_erro(){
	if(exercicios[exercicio_atual]==1){
		setTimeout(function(){
			$("#exercicios_alternativa_marca1_erro_a, #exercicios_alternativa_marca2_erro_a").css("display", "none");
			exercicio_atual_resposta="trapezio";
			document.querySelector("#exercicios_btn_alternativa_a").style.backgroundImage= "url('./img/exercicios_btn_alternativa_a_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_a").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_a").style.fontWeight="bold";	
			$("#exercicios_rotulo_alternativa_a").css("text-decoration", "none");	
			document.querySelector("#exercicios_btn_alternativa_a").className="animacao_atraso_0 tada";
		}, 3000);		
	}
	if(exercicios[exercicio_atual]==2){
		setTimeout(function(){
			$("#exercicios_alternativa_marca1_erro_b, #exercicios_alternativa_marca2_erro_b").css("display", "none");
			exercicio_atual_resposta="quadrado";
			document.querySelector("#exercicios_btn_alternativa_b").style.backgroundImage= "url('./img/exercicios_btn_alternativa_b_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_b").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_b").style.fontWeight="bold";	
			$("#exercicios_rotulo_alternativa_b").css("text-decoration", "none");	
			document.querySelector("#exercicios_btn_alternativa_b").className="animacao_atraso_0 tada";
		}, 3000);		
	}
	if(exercicios[exercicio_atual]==3){
		setTimeout(function(){
			$("#exercicios_alternativa_marca1_erro_c, #exercicios_alternativa_marca2_erro_c").css("display", "none");
			exercicio_atual_resposta="losango";
			document.querySelector("#exercicios_btn_alternativa_c").style.backgroundImage= "url('./img/exercicios_btn_alternativa_c_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_c").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_c").style.fontWeight="bold";
			$("#exercicios_rotulo_alternativa_c").css("text-decoration", "none");				
			document.querySelector("#exercicios_btn_alternativa_c").className="animacao_atraso_0 tada";
		}, 3000);		
	}
	if(exercicios[exercicio_atual]==4){
		setTimeout(function(){
			$("#exercicios_alternativa_marca1_erro_d, #exercicios_alternativa_marca2_erro_d").css("display", "none");
			exercicio_atual_resposta="retangulo";
			document.querySelector("#exercicios_btn_alternativa_d").style.backgroundImage= "url('./img/exercicios_btn_alternativa_d_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_d").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_d").style.fontWeight="bold";
			$("#exercicios_rotulo_alternativa_d").css("text-decoration", "none");				
			document.querySelector("#exercicios_btn_alternativa_d").className="animacao_atraso_0 tada";
		}, 3000);		
	}
	if(exercicios[exercicio_atual]==5){
		setTimeout(function(){
			$("#exercicios_alternativa_marca1_erro_e, #exercicios_alternativa_marca2_erro_e").css("display", "none");
			exercicio_atual_resposta="paralelogramo";
			document.querySelector("#exercicios_btn_alternativa_e").style.backgroundImage= "url('./img/exercicios_btn_alternativa_e_correta.png')";
			document.querySelector("#exercicios_rotulo_alternativa_e").style.color="#512B04";
			document.querySelector("#exercicios_rotulo_alternativa_e").style.fontWeight="bold";	
			$("#exercicios_rotulo_alternativa_e").css("text-decoration", "none");				
			document.querySelector("#exercicios_btn_alternativa_e").className="animacao_atraso_0 tada";
		}, 3000);		
	}
		setTimeout(function(){
			document.querySelector("#conclusao_erros").style.display="inherit";
			movimento_entrada_conclusao_erros();
		}, 6600);	
}



function verificar_conclusao(){
	if(tentativas==2){
		document.querySelector("#exercicios_tentativas_icone3").className="animacao_atraso_0 wobble";
		setTimeout(function(){
			document.querySelector("#exercicios_tentativas_icone3").style.opacity="0.3";
		}, 500);	
	}	
	if(tentativas==1){
		document.querySelector("#exercicios_tentativas_icone2").className="animacao_atraso_0 wobble";
		setTimeout(function(){
			document.querySelector("#exercicios_tentativas_icone2").style.opacity="0.3";
		}, 500);	
	}	
	if(tentativas==0){
		document.querySelector("#exercicios_tentativas_icone1").className="animacao_atraso_0 wobble";
		setTimeout(function(){
			document.querySelector("#exercicios_tentativas_icone1").style.opacity="0.3";
		}, 500);
	}	

}
/* Funções para movimentos */
function movimento_entrada_explicacao(){
	TrocaInstrucao("Clique em Continuar para avançar à próxima fase.");
	parar_todos_audios();
	audio_narracao_explicacao.play("audio_narracao_explicacao_corte1");
	//
	document.querySelector("#inicial_painel_explica").style.display="inherit";
	document.querySelector("#inicial_btn_continuar").style.display="inherit";
	document.querySelector("#inicial_chaves_formatos").style.display="inherit";
	document.querySelector("#inicial_cobertura_2").style.display="inherit";
	//	
	document.querySelector("#inicial_painel").className="animacao_atraso_0t800ms fadeOut";
	document.querySelector("#inicial_painel_explica").className="animacao_atraso_0t800ms fadeIn";
	document.querySelector("#inicial_btn_continuar").className="animacao_atraso_0t800ms fadeIn";
	document.querySelector("#inicial_chaves_formatos").className="animacao_atraso_0t800ms fadeIn";
	//
	document.querySelector("#inicial_painel_fundo").style.display="none";
	document.querySelector("#inicial_painel_fundo").className="nada";
	document.querySelector("#inicial_painel_fundo").style.display="inherit";
	document.querySelector("#inicial_painel_fundo").className="animacao_atraso_3t6 fadeIn";
	//
	setTimeout(function(){ 
		document.querySelector("#inicial_painel").style.display="none";
	}, 1700);
	setTimeout(function(){ 
		document.querySelector("#inicial_chaves_formatos").className="animacao_atraso_0 swing";
		document.querySelector("#inicial_cobertura_2").style.display="none";
	}, 3500);
}
function movimento_entrada_exercicio(){
	TrocaInstrucao("Para abrir as portas use as 5 chaves. Todas elas são iguais, exceto por um ornamento de forma geométrica presente em cada uma. A resposta para cada enigma é uma dessas formas presentes nas chaves.");
	parar_todos_audios();
	//
	if(exercicios[exercicio_atual]==1){
		document.querySelector("#exercicios_texto_1").style.display="inherit";
		audio_narracao_exercicio_1.play("audio_narracao_exercicio_1_corte1");
	}
	if(exercicios[exercicio_atual]==2){
		document.querySelector("#exercicios_texto_2").style.display="inherit";
		audio_narracao_exercicio_2.play("audio_narracao_exercicio_2_corte1");
	}	
	if(exercicios[exercicio_atual]==3){
		document.querySelector("#exercicios_texto_3").style.display="inherit";
		audio_narracao_exercicio_3.play("audio_narracao_exercicio_3_corte1");
	}	
	if(exercicios[exercicio_atual]==4){
		document.querySelector("#exercicios_texto_4").style.display="inherit";
		audio_narracao_exercicio_4.play("audio_narracao_exercicio_4_corte1");
		
	}	
	if(exercicios[exercicio_atual]==5){
		document.querySelector("#exercicios_texto_5").style.display="inherit";
		audio_narracao_exercicio_5.play("audio_narracao_exercicio_5_corte1");		
	}
	//
	document.querySelector("#inicial_painel_explica").className="animacao_atraso_0 fadeOutRight";
	document.querySelector("#inicial_btn_continuar").className="animacao_atraso_0 fadeOutRight";
	document.querySelector("#inicial_chaves_formatos").className="animacao_atraso_0 fadeOutRight";
	//
	document.querySelector("#exercicios_area").style.display="inherit";
	//
	document.querySelector("#exercicios_painel").className="animacao_atraso_1 fadeIn";
	document.querySelector("#exercicios_texto").className="animacao_atraso_1t2 fadeInDown";
	//
	setTimeout(function(){
		$("#exercicios_btn_alternativa_a, #exercicios_btn_alternativa_b, #exercicios_btn_alternativa_c, #exercicios_btn_alternativa_d, #exercicios_btn_alternativa_e").css("display", "inherit");	
		document.querySelector("#exercicios_btn_alternativa_a").className="animacao_atraso_chave1 swap";
		document.querySelector("#exercicios_btn_alternativa_b").className="animacao_atraso_chave2 swap";
		document.querySelector("#exercicios_btn_alternativa_c").className="animacao_atraso_chave3 swap";
		document.querySelector("#exercicios_btn_alternativa_d").className="animacao_atraso_chave4 swap";
		document.querySelector("#exercicios_btn_alternativa_e").className="animacao_atraso_chave5 swap";
		document.querySelector("#inicial_chaves_formatos").style.display="none";
		//
		//document.querySelector("#exercicios_btn_alternativa_e_cobertura").style.display="none";
	}, 800);
	document.querySelector("#exercicios_painel_tentativas").className="animacao_atraso_1 slideInUp";
}
function movimento_proximo_exercicio(){
	$("#exercicios_btn_alternativa_a_cobertura, #exercicios_btn_alternativa_b_cobertura, #exercicios_btn_alternativa_c_cobertura, #exercicios_btn_alternativa_d_cobertura, #exercicios_btn_alternativa_e_cobertura").css("display", "none");
	//
	TrocaInstrucao("Para abrir as portas use as 5 chaves. Todas elas são iguais, exceto por um ornamento de forma geométrica presente em cada uma. A resposta para cada enigma é uma dessas formas presentes nas chaves.");
	/*setTimeout(function(){
		document.querySelector("#devolutiva_cobertura_macaneta").className="animacao_atraso_0t800ms fadeOutLeftBig";
		document.querySelector("#devolutiva_area").className="animacao_atraso_0t800ms fadeOutLeftBig";
	}, 4000);*/
	audio_efeito_porta.stop();
	audio_efeito_porta.play("audio_efeito_porta_corte1");
	//
	audio_efeito_chave_certa.play("audio_efeito_chave_certa_corte1");
	
	setTimeout(function(){
		document.querySelector("#devolutiva_cobertura_macaneta").style.display="none";
		document.querySelector("#devolutiva_area").style.display="none";
		document.querySelector("#devolutiva_cobertura").style.display="inherit";
		//
		document.querySelector("#inicial_painel_fundo").style.backgroundImage= "url('./img/inicial_painel_fundo_"+exercicio_atual_resposta+".jpg')";
		//
		document.querySelector("#inicial_painel_fundo").className="animacao_zoom_proximo_exercicio";
		document.querySelector("#devolutiva_cobertura").className="animacao_atraso_0t4 vanishIn";
		//
		document.querySelector("#inicial_cobertura").style.display="none";

	}, 5000);
	setTimeout(function(){
		document.querySelector("#inicial_painel_fundo").className="nada";
		document.querySelector("#devolutiva_cobertura").className="animacao_atraso_0t4 vanishOut";
		//
		document.querySelector("#exercicios_btn_alternativa_a").style.backgroundImage= "url('./img/exercicios_btn_alternativa_a.png')";
		document.querySelector("#exercicios_btn_alternativa_b").style.backgroundImage= "url('./img/exercicios_btn_alternativa_b.png')";
		document.querySelector("#exercicios_btn_alternativa_c").style.backgroundImage= "url('./img/exercicios_btn_alternativa_c.png')";
		document.querySelector("#exercicios_btn_alternativa_d").style.backgroundImage= "url('./img/exercicios_btn_alternativa_d.png')";
		document.querySelector("#exercicios_btn_alternativa_e").style.backgroundImage= "url('./img/exercicios_btn_alternativa_e.png')";
		//	
		$("#exercicios_rotulo_alternativa_a, #exercicios_rotulo_alternativa_b, #exercicios_rotulo_alternativa_c, #exercicios_rotulo_alternativa_d, #exercicios_rotulo_alternativa_e").css("color", "#000000");		
		//
		$("#exercicios_rotulo_alternativa_a, #exercicios_rotulo_alternativa_b, #exercicios_rotulo_alternativa_c, #exercicios_rotulo_alternativa_d, #exercicios_rotulo_alternativa_e").css("font-weight", "normal");				
		//
		$("#exercicios_rotulo_alternativa_a, #exercicios_rotulo_alternativa_b, #exercicios_rotulo_alternativa_c, #exercicios_rotulo_alternativa_d, #exercicios_rotulo_alternativa_e, #exercicios_btn_alternativa_a_cobertura, #exercicios_btn_alternativa_b_cobertura, #exercicios_btn_alternativa_c_cobertura, #exercicios_btn_alternativa_d_cobertura, #exercicios_btn_alternativa_e_cobertura").css("text-decoration", "none");					
		//
		document.querySelector("#exercicios_btn_alternativa_a").className="nada";
		document.querySelector("#exercicios_btn_alternativa_b").className="nada";
		document.querySelector("#exercicios_btn_alternativa_c").className="nada";
		document.querySelector("#exercicios_btn_alternativa_d").className="nada";
		document.querySelector("#exercicios_btn_alternativa_e").className="nada";
		document.querySelector("#exercicios_painel").className="nada";
		document.querySelector("#exercicios_texto").className="nada";
		document.querySelector("#exercicios_area").style.display="none";
		//
		$("#exercicios_texto_1, #exercicios_texto_2, #exercicios_texto_3, #exercicios_texto_4, #exercicios_texto_5, #devolutiva_chave_trapezio, #devolutiva_chave_quadrado, #devolutiva_chave_losango, #devolutiva_chave_retangulo, #devolutiva_chave_paralelogramo, #exercicios_alternativa_marca1_erro_a, #exercicios_alternativa_marca1_erro_b, #exercicios_alternativa_marca1_erro_c, #exercicios_alternativa_marca1_erro_d, #exercicios_alternativa_marca1_erro_e, #exercicios_alternativa_marca2_erro_a, #exercicios_alternativa_marca2_erro_b, #exercicios_alternativa_marca2_erro_c, #exercicios_alternativa_marca2_erro_d, #exercicios_alternativa_marca2_erro_e").css("display", "none");	
		//
		document.querySelector("#inicial_painel_fundo").style.backgroundImage= "url('./img/inicial_painel_fundo.png')";
		//
		if(acertos==3){
			parar_todos_audios();
			movimento_entrada_conclusao_acertos();
			
		}
		
	}, 10000);	
	setTimeout(function(){
		if(acertos<3){
			movimento_entrada_exercicio();
		}
	}, 11000);		
	setTimeout(function(){
		document.querySelector("#devolutiva_cobertura").style.display="none";
	}, 14000);	
	
}




function movimento_saida_exercicio(){
	TrocaInstrucao("Clique em Continuar para tentar novamente.");
	//document.querySelector("#exercicios_area").style.display="inherit";
	//
	document.querySelector("#exercicios_painel").className="animacao_atraso_0 fadeOutDown";
	document.querySelector("#exercicios_texto").className="animacao_atraso_0 fadeOut";
	//
	
	document.querySelector("#inicial_cobertura").style.display="none";
	document.querySelector("#exercicios_painel_erro").style.display="inherit";
	document.querySelector("#devolutiva_area").style.width="637px";
	document.querySelector("#exercicios_painel_erro").className="animacao_atraso_0 fadeInDown";
	
	setTimeout(function(){
		$("#exercicios_texto_1, #exercicios_texto_2, #exercicios_texto_3, #exercicios_texto_4, #exercicios_texto_5").css("display", "none");	
	}, 1000);	
	
}

function movimento_voltar_exercicio_apos_erro(){
	TrocaInstrucao("Para abrir as portas use as 5 chaves. Todas elas são iguais, exceto por um ornamento de forma geométrica presente em cada uma. A resposta para cada enigma é uma dessas formas presentes nas chaves.");
	document.querySelector("#inicial_cobertura").style.display="none";
	document.querySelector("#exercicios_painel_erro").className="animacao_atraso_0 fadeOutDown";
	document.querySelector("#inicial_painel_fundo").className="animacao_afasta_porta";
	//
	setTimeout(function(){
		document.querySelector("#exercicios_painel_erro").style.display="none";
		movimento_entrada_exercicio();
	}, 500);	
	
}






function movimento_entrada_inicial(){
	$("#inicial_fundo_area, #inicial_fundo, #inicial_painel_fundo").css("display", "inherit");		
	audio_narracao_introducao.play("audio_narracao_introducao_corte1");
	document.querySelector("#inicial_cobertura").className="animacao_atraso_1t3 fadeOut"
	document.querySelector("#inicial_painel").className="animacao_atraso_0 fadeIn"
	document.querySelector("#inicial_painel_fundo").className="animacao_atraso_18t5 fadeIn";
	setTimeout(function(){ 
		document.querySelector("#inicial_cobertura").style.display="none";
	}, 5000);

}

function movimento_entrada_conclusao_erros(){
	TrocaInstrucao("Clique em Reiniciar para jogar novamente.");
	parar_todos_audios();
	audio_narracao_conclusao_erro.play("audio_narracao_conclusao_erro_corte1");
	document.querySelector("#conclusao_erros_sombra").className="animacao_atraso_0t2 vanishIn"
	document.querySelector("#conclusao_erros_fundo").className="animacao_atraso_0 fadeIn";
	document.querySelector("#conclusao_erros_painel").className="animacao_atraso_1 fadeInDown";
	document.querySelector("#inicial_cobertura").style.display="none";
	document.querySelector("#devolutiva_fade_branco").style.display="none";
	setTimeout(function(){ 
		document.querySelector("#conclusao_erros_sombra").className="animacao_atraso_0 fadeOut";
		document.querySelector("#conclusao_erros_fundo").className="animacao_conclusao_erros";
	}, 3000);
}

function movimento_entrada_conclusao_acertos(){
	TrocaInstrucao("Clique em Reiniciar para jogar novamente.");
	parar_todos_audios();
	audio_trilha_sonora.stop();
	audio_trilha_sonora.volume(0);
	audio_trilha_sonora_conclusao.play();
	document.querySelector("#inicial_cobertura").style.display="none";
	document.querySelector("#devolutiva_fade_branco").style.display="none";
	//
	document.querySelector("#conclusao_acertos").style.display="inherit";
	audio_narracao_conclusao_acerto.play("audio_narracao_conclusao_acerto_corte1");
	document.querySelector("#conclusao_acertos_sombra").className="animacao_atraso_0t2 vanishIn"
	document.querySelector("#conclusao_acertos_fundo").className="animacao_atraso_0 fadeIn";
	document.querySelector("#conclusao_acertos_painel").className="animacao_atraso_1 fadeInDown";
	setTimeout(function(){ 
		document.querySelector("#conclusao_acertos_sombra").className="animacao_atraso_0 fadeOut";
		//document.querySelector("#conclusao_erros_fundo").className="animacao_conclusao_erros";
	}, 3000);
}



function iniciar_com_tap(){
	//alert("Tap");
	startGame.init();
	clearInterval(verificar_inicio_cnd);
}
