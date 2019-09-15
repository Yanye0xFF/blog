$(document).ready(function() { 
	$("#home").click(function(){
		//window.location.href = "index.html";
		window.location.replace('index.html');
	});
});


function setTabSelected(id) {
    $('.tab ul.tabs').addClass('active').find('> li:eq(' + id + ')').addClass('current');

	$('.tab ul.tabs li a').click(function (g) { 
		var tab = $(this).closest('.tab');
		var	index = $(this).closest('li').index();
		
		tab.find('ul.tabs > li').removeClass('current');
		$(this).closest('li').addClass('current');
		
		tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
		tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

	});
}



