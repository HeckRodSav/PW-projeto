"use strict";

$(document).ready(()=>{

	console.log("nada");

	$(".answer").on("click",()=>{
		$("#next-button").removeClass("disabled").attr('aria-disabled','false');
	});

	$("#btn-left").on("click",()=>{
		$("#btn-right").addClass("color-heavy-gray").attr('aria-pressed', 'false');
		$("#btn-left").removeClass("color-heavy-gray").attr('aria-pressed', 'true');
	});

	$("#btn-right").on("click",()=>{
		$("#btn-left").addClass("color-heavy-gray").attr('aria-pressed', 'false');
		$("#btn-right").removeClass("color-heavy-gray").attr('aria-pressed', 'true');
	});

	$("#input-area").on("keyup", function(){
		if($(this).val() != ""){
			if(Number($(this).val())>0){
				$("#next-button").removeClass("disabled").attr('aria-disabled','false');
			} else {
				$("#next-button").addClass("disabled").attr('aria-disabled','true');
			}
		} else {
			$("#next-button").addClass("disabled").attr('aria-disabled','true');
		}
	});

	$("#question-form").attr('action',`${location.origin}/questionnaire/answer`)
});
