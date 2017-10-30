import $ from 'jquery';

$(document).ready(function() {
  var AppPlugins = {
    /* Accordion Script */

    Accordion: function() {
      var toggle = $('.toggle'),
        dropdown = $('.dropdown');

      toggle.on('click', function() {
        $(this).closest('.toggleParent')
          .find('.dropdown')
          .slideToggle();
        $(this)
          .children('.toggleIcon')
          .toggleClass('fa-rotate-180');
      });
    }
  };

  /* ------ Plugins Init ------ */

  AppPlugins.Accordion();
});
