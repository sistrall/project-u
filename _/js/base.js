/*
 * Style switcher code
 */
$(document).ready(function(){
  // Cambia il foglio di stile e salva un cookie
  $("#style-switcher select").change(function(){
    createCookie('stylesheet', $(this).children("option:selected").val(), 365);
    $("#personal-stylesheet").attr("href", "../_/css/personal/" + $(this).children("option:selected").val());
    return false;
  });

  if(cookie_stylesheet = readCookie('stylesheet')) {
    $("#personal-stylesheet").attr("href", "../_/css/personal/" + cookie_stylesheet);
  }
  creaTab();
});

/* 
 * Cookie Functions 
 * http://www.quirksmode.org/js/cookies.html
 */
function createCookie(name, value, days) {
  if(days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  }
  else var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i < ca.length; i++) {
    var c = ca[i];
    while(c.charAt(0) == ' ') c = c.substring(1, c.length);
    if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {

  createCookie(name,"",-1);}
  
  function creaTab(){
  $('h1').after('<div id="menu"></div>');
  // imposto lo stile per il div di ID MENU
  $('#menu').css({	  
	  'background':'#eee',
	  'padding' :'3px 10px'
  });
  
  $('.tab').each(function(){
  //cicla per tutti (each) i classe tab
	var myTitle = $(this).find('h2').attr('title');  
	$('#menu').append('<span>' + myTitle + '</span>');
	$('#menu span').css({
		'margin-right': '20px',
		'cursor': 'pointer'//seconda regola css
	  });
	  
	  $('.tab').hide();
	  $('.tab').eq(0).show();
	  $('#menu span').eq(0).addClass('active-tab');
	  
	  $('#menu span').click(function(){
		  $('.tab').hide(); 
		  var myIndex = $(this).index();
		  $('.tab').eq(myIndex).show();
		  $('#menu span').removeClass('active-tab');
		  $(this).addClass('active-tab');
 
  });
	//-this- restitutisce il soggetto su cui si sta compiendo l'azione
	//.find è sinstassi di jquery
	//quindi cerca this - cerca gli h2 dentro this- attribute può leggere e/o scrivere
  });
  }