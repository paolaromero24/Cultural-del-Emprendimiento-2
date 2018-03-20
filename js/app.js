/** MODULO 1**/

$(document).foundation()

$('[data-toggle-dia]').click(function () {

$('#lineup-tabs').foundation('selectTab', $(this).data('toggleDia'))

/** MODULO 2**/

});

$(document).foundation()

$('[data-toggle-dia1]').click(function () {

$('#tickets-tabs').foundation('selectTab', $(this).data('toggleDia1'))

});

/** MODULO 3**/

$(document).foundation()

$('[data-toggle-dia2]').click(function () {

$('#modulo3-tabs').foundation('selectTab', $(this).data('toggleDia2'))


});



/** MODULO 4**/
$(document).foundation()

$('[data-toggle-dia3]').click(function () {

$('#modulo4-tabs').foundation('selectTab', $(this).data('toggleDia3'))

});

/** MODULO 5 **/

$(document).foundation()

$('[data-toggle-dia4]').click(function () {

$('#modulo5-tabs').foundation('selectTab', $(this).data('toggleDia4'))

});


/** MODULO 5 **/

$(document).foundation()

$('[data-toggle-dia5]').click(function () {

$('#modulo6-tabs').foundation('selectTab', $(this).data('toggleDia5'))

});



const $offCanvas = $('#offCanvas')
const $sticky = $('#sticky')

$offCanvas.find('li').click(function (ev){
	$offCanvas.foundation('close')
	setTimeout(function(){
		$sticky.css('left', '0px')	
	}, 300)
})
