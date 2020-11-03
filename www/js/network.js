var isOnline = window.navigator.onLine;
if (isOnline) {
  	
} else {
    alert('You are offline, check your connection');
    $('#refresh').css("display","block");
    $('body').append('<div class="body-after"></div>');
    $('.loader').hide();
    $('.body-after').css("display","block");    
}
window.addEventListener('offline', function(event){
	alert("You lost connection.");
    $('body').append('<div class="body-after"></div>');
	$('#refresh').css("display","block");
	$('.loader').hide();
    $('.body-after').css("display","block");
});
window.addEventListener('online', function(event){
    alert("You are now back online.");
    $('#refresh').css("display","block");
    location.reload(true);
});