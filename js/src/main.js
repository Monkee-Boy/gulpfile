/*global Modernizr $ */
/*jslint browser:true */

(function() {
  'use strict';

  [1,2,3].map(n => n + 1);

  const name = "Bob";
  const time = "today";
  let name_time = `Hello ${name}, how are you ${time}?`;

  function foo () {
    return 'bar';
  }

  const braveNewWorld = ( world ) => {
    return "Welcome to" + world;
  };

  let a = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

  const a2 = a.map( s => s.length );

  var alertClose = document.querySelector('[data-close-alert]');
  if(alertClose) {
    alertClose.addEventListener('click', function(event) {
      event.preventDefault();
      var alert = document.querySelector('[data-alert]');

      //fadeOut(alert);

      var date = new Date();
      date.setDate(date.getDate()+30);
      document.cookie = 'alert='+alert.dataset.alertid+'; expires='+date.toGMTString()+'; path=/';
    }, false);
  }
}());
