/*global Modernizr, FastClick, CountUp, withinviewport, fadeOut, $ */
/*jslint browser:true */

(function() {
  'use strict';

  var alertClose = document.querySelector('[data-close-alert]');
  if(alertClose) {
    alertClose.addEventListener('click', function(event) {
      event.preventDefault();
      var alert = document.querySelector('[data-alert]');

      fadeOut(alert);

      var date = new Date();
      date.setDate(date.getDate()+30);
      document.cookie = 'alert='+alert.dataset.alertid+'; expires='+date.toGMTString()+'; path=/';
    }, false);
  }
}());
