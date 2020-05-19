"use strict";

$(document).ready(()=>{

	console.log("nada");

	$(".answer").on("click",()=>{
		$(".disabled").removeClass("disabled");
	});

	$("#btn-left").on("click",()=>{
		$("#btn-right").addClass("color-heavy-gray");
		$("#btn-left").removeClass("color-heavy-gray");
	});

	$("#btn-right").on("click",()=>{
		$("#btn-left").addClass("color-heavy-gray");
		$("#btn-right").removeClass("color-heavy-gray");
	});

	$("#input-area").on("keyup", function(){
		if($(this).val() != ""){
			if(Number($(this).val())>0){
				$("#next-button").removeClass("disabled");
			} else {
				$("#next-button").addClass("disabled");
			}
		} else {
			$("#next-button").addClass("disabled");
		}
	});
});
