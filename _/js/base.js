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

  // legge i coockie già presenti sulla macchina dell'utente e cambia il foglio di stile
  if(cookie_stylesheet = readCookie('stylesheet')) {
    $("#personal-stylesheet").attr("href", "../_/css/personal/" + cookie_stylesheet);
  }
  
  creaTab(); // richiamo la funzione per la creazione dei tab
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
  createCookie(name,"",-1);
}

function creaTab(){
  $('h1').after('<div id="menu"></div>'); // creo il div di id menu che conterrà i tab
  $('#menu').css({
    'background' :'#eee',
    'padding' : '3px 10px'
  }); // imposto lo stile per il div di id menu

  $('.tab').each(function(){ // ciclo su tutti gli elementi di classe tab
    var myTitle = $(this).find('h2').attr('title');
    $('#menu').append('<span>' + myTitle + '</span>');
    $('#menu span').css({
      'margin-right': '20px',
      'cursor' : 'pointer'
    });
  });
  
  $('.tab').hide(); // nascondo tutti i div di classe tab
  $('.tab').eq(0).show(); // rendo visibile il div di classe tab di indice 0
  $('#menu span').eq(0).addClass('active-tab'); // aggiungo la classe active-tab al primo span

  $('#menu span').click(function(){
    $('.tab').hide(); // nascondo tutti i div di classe tab
    var myIndex = $(this).index(); // mi restituisce l'indice dell'elemento clickato
    $('.tab').eq(myIndex).show(); // rendo visibile l'elemento di classe tab dell'indice myIndex
    $('#menu span').removeClass('active-tab'); // tolgo la classe active-tab a tutti gli span dentro #menu
    $(this).addClass('active-tab'); // aggiungo la classe active-tab allo span su cui ho fatto il click
  });
}


