$(function(){
	constroiIndexInicial();
});

function constroiIndexInicial(){

	alerta("tela","Atenção","Deseja realmente excluir este produto?");
	
}

function alerta(local, titulo, msg){
	$("#"+ local).append(
	"<button type='button' class='btn btn-primary btn-lg' data-toggle='modal' data-target='#myModal'>" +
			"Launch demo modal" +
		"</button>" +

	"<div class='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>" +
		"<div class='modal-dialog' role='document'>" +
			"<div class='modal-content'>" +
				"<div class='modal-header'>" +
					"<button type='button' class='close' data-dismiss='modal' aria-label='Close'>" +
						"<span aria-hidden='true'>&times;</span></button>" +
					"<h4 class='modal-title' id='myModalLabel'>" + titulo + "</h4>" +
				"</div>" +
				"<div class='modal-body'>" +
					msg +
				"</div>" +
				"<div class='modal-footer'>" +
					"<button type='button' class='btn btn-default' data-dismiss='modal'>Não</button>" +
					"<button type='button' class='btn btn-primary'>Sim</button>" +
				"</div>" +
			"</div>" +
		"</div>" +
	"</div>" 
	);
}