setInterval(function() {var alto =  $('#slideshow_container').css('height'); }, 5000);
MicroModal.init({
  onShow: modal => console.info(`${modal.id} is shown`), // [1]
  onClose: modal => console.info(`${modal.id} is hidden`), // [2]
  openTrigger: 'data-custom-open', // [3]
  closeTrigger: 'data-custom-close', // [4]
  openClass: 'is-open', // [5]
  disableScroll: true, // [6]
  disableFocus: false, // [7]
  awaitOpenAnimation: false, // [8]
  awaitCloseAnimation: false, // [9]
  debugMode: true // [10]
});
openModal= function(){
	var activeSlideInfo= $('.iviewSlider > div').filter(function(){if($(this).css('display')!= 'none'){return true}}).find('.modalInfo');
	$('#filesOrRaw h5').text(activeSlideInfo.find('.title').text());
	$('#filesOrRaw .modal-body').text(activeSlideInfo.find('.description').text());
	$($('.modal-footer a')[0]).attr('href', activeSlideInfo.find('.linkPlay').text());
	$($('.modal-footer a')[1]).attr('href', activeSlideInfo.find('.linkSourceCode').text());	
	MicroModal.show('filesOrRaw');
}
$(document).on('ready', function(){
	$('#filesOrRaw .play').on('click', function(){
		$('.modal-footer a')[0].click()
	})
	$('#filesOrRaw .source_code').on('click', function(){
		$('.modal-footer a')[1].click()
	})
	$('.btn-close').on('click', function(){
		MicroModal.close('filesOrRaw');
	})
})