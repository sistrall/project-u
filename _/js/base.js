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

  // legge i coockie gi� presenti sulla macchina dell'utente e cambia il foglio di stile
  if(cookie_stylesheet = readCookie('stylesheet')) {
    $("#personal-stylesheet").attr("href", "../_/css/personal/" + cookie_stylesheet);
  }
  
<<<<<<< HEAD
  //creaTab(); // richiamo la funzione per la creazione dei tab
  nuovoCambioTab();
<<<<<<< HEAD
  
=======
>>>>>>> origin/master
  modificaTabella();
=======
  creaTab(); // richiamo la funzione per la creazione dei tab
>>>>>>> origin/master
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
  $('h1').after('<div id="menu"></div>'); // creo il div di id menu che conterr� i tab
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
  
<<<<<<< HEAD
<<<<<<< HEAD
	cambiaTab(0);//richiamo la funzione per accedere al primo tab
  $('#menu span').click(function(){
    var myIndex = $(this).index(); // mi restituisce l'indice dell'elemento clickato
	cambiaTab(myIndex);
=======
  cambiaTab(0); // richiamo la funzione per accendere il primo tab


  $('#menu span').click(function(){
     var myIndex = $(this).index(); // mi restituisce l'indice dell'elemento clickato
     cambiaTab(myIndex);
  });
}
function cambiaTab(num){
=======
>>>>>>> origin/master
  $('.tab').hide(); // nascondo tutti i div di classe tab
  $('.tab').eq(0).show(); // rendo visibile il div di classe tab di indice 0
  $('#menu span').eq(0).addClass('active-tab'); // aggiungo la classe active-tab al primo span

<<<<<<< HEAD
    // metodo alternativo per modificare l'html e nella seconda riga modificare il valore dell'attributo href
    //$(this).find('td').eq(1).html('<a href="#">' +  oldText + '</a>');
    //$(this).find('td').eq(1).find('a').attr('href', myUrl);

    $(this).find('td').eq(2).remove();
>>>>>>> origin/master
  });
  $('#inventory table th').eq(2).remove();
}
function cambiaTab(num){
	$('.tab').hide(); // nascondo tutti i div di classe tab
    $('.tab').eq(num).show(); // rendo visibile l'elemento di classe tab dell'indice num
    $('#menu span').removeClass('active-tab'); // tolgo la classe active-tab a tutti gli span dentro #menu
    $('#menu span').eq(num).addClass('active-tab');
}

<<<<<<< HEAD
	function modificaTabella(){
		$('#inventory table tr').each(function(){
			//console.log($(this).index());    -----> ciclo su ogni riga della tabella
			var myUrl = $(this).find('td').eq(2).html();
			var oldText = $(this).find('td').eq(1).html();
			//$(this).find('td').eq(1).html('<a href="' + myUrl + '">' + oldText + '</a>');
			$(this).find('td').eq(1).html('<a href="#">' + oldText + '</a>');
			$(this).find('td').eq(1).find('a').attr('href',myUrl);//serve ad assegnare ad href l'attributo myUrl
			
			$(this).find('td').eq(2).remove();
		});
		$('#inventory table th').eq(2).remove();
	}
=======
function nuovoCambioTab(){
  $('h1').after('<div id="menu"></div>'); // creo il div di id menu che conterrà i tab
  $('#menu').css({
    'background' :'#eee',
    'padding' : '3px 10px'
  }); // imposto lo stile per il div di id menu
  var a = 0;
  $('.tab').each(function(){
    var myTitle = $(this).find('h2').attr('title');
    var mytab = 'tab_' + a;
    a++;
    $('#menu').append('<span id="' + mytab + '">' + myTitle + '</span>');
  });
}










>>>>>>> origin/master

		function nuovoCambioTab(){
  $('h1').after('<div id="menu"></div>');
  $('#menu').css({
    'background' :'#eee',
    'padding' : '3px 10px'
  });
  
  var  a = 0;
  
  $('.tab').each(function(){
	var myTitle = $(this).find('h2').attr('title');
	var myTab = 'tab_' + a
	a++;
	$('#menu').append('<span id="' + myTab + '">' + myTitle + '</span>');
	$('#menu span').css({
      'margin-right': '20px',
      'cursor' : 'pointer'
	  });
  });
  }
	
	
=======
  $('#menu span').click(function(){
    $('.tab').hide(); // nascondo tutti i div di classe tab
    var myIndex = $(this).index(); // mi restituisce l'indice dell'elemento clickato
    $('.tab').eq(myIndex).show(); // rendo visibile l'elemento di classe tab dell'indice myIndex
    $('#menu span').removeClass('active-tab'); // tolgo la classe active-tab a tutti gli span dentro #menu
    $(this).addClass('active-tab'); // aggiungo la classe active-tab allo span su cui ho fatto il click
  });
}

>>>>>>> origin/master
