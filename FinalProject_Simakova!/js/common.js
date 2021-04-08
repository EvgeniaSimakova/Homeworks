$(document).ready(function () {
    
	var photolist_block = $('.main_content_thirdblock_photolist'); 
	var buttons_list = $('.main_content_thirdblock li button');
    var portfolio_block = $('.portfolio_wrap');
    var buttons_list_portfolio = $('.main_content_portfolio li button');

	$('.main_content_thirdblock button').on('click', function() {
    	var current_button = $(this); 
    	var id = current_button.attr('id'); 

    	if (id === 'all') {
    		photolist_block.find('.img_wrapper').show();
            buttons_list.removeClass('active');
            current_button.addClass('active');
    	} else {
	    	buttons_list.removeClass('active');

	    	current_button.addClass('active'); 

	    	photolist_block.find('.img_wrapper').hide(); 
	    	photolist_block.find(`.img_wrapper.${id}`).show(); 
    	}
    });

    $('.main_content_portfolio button').on('click', function() {
    	var current_button = $(this); 
    	var id = current_button.attr('id'); 

    	if (id === 'all') {
    		portfolio_block.find('.img_wrapper').show();
            buttons_list_portfolio.removeClass('active');
            current_button.addClass('active'); 
    	} else {
	    	buttons_list_portfolio.removeClass('active');

	    	current_button.addClass('active'); 

	    	portfolio_block.find('.img_wrapper').hide(); 
	    	portfolio_block.find(`.img_wrapper.${id}`).show(); 
    	}
    });
});




