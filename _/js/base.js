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
