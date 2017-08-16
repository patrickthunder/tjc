import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

//alert("hello TJC");
$("[data-menu-underline-from-center] a").addClass("underline-from-center");

/* var windows = $('#offCanvas');
windows.on('click', function() {
  $(this).hide();
})
*/
/*
$('#offCanvas li').click(function() {
  $('#offCanvas').toggle();
});
*/
/*
var closeButton = $('.close-button');
closeButton.on('click', function() {
  $(this).parent().hide();
});
*/
