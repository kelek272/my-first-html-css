// JavaScript Document
var audioEast = $("#east_bgm")[0];
$("east_button").mouseenter(function() {
	audioEast.play();
});
$("east_button").mouseleave(function() {
	audioEast.pause();
});