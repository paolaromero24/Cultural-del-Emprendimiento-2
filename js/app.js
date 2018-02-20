$(document).foundation()

$('[data-toggle-dia]').click(function () {

$('#lineup-tabs').foundation('selectTab', $(this).data('toggleDia'))



});

$(document).foundation()

$('[data-toggle-dia1]').click(function () {

$('#tickets-tabs').foundation('selectTab', $(this).data('toggleDia1'))

});


$(document).foundation()

$('[data-toggle-dia2]').click(function () {

$('#modulo3-tabs').foundation('selectTab', $(this).data('toggleDia2'))

});



const $offCanvas = $('#offCanvas')
const $sticky = $('#sticky')

$offCanvas.find('li').click(function (ev){
	$offCanvas.foundation('close')
	setTimeout(function(){
		$sticky.css('left', '0px')	
	}, 300)
})
