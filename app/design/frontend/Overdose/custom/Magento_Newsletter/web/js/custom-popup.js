define([
        "jquery",
        "jquery/ui",
        "Magento_Ui/js/modal/modal"
   ],
   function($) {
      "use strict";
      //creating jquery widget
      $.widget('Custom.Popup', $.mage.modal, {
         options: {
             type: 'popup',
             modalClass: 'modals-newsletter-popup',
             responsive: true,
             innerScroll: true,
             clickableOverlay: true,
             title: 'Sign Up for Exclusive Offers',
             timeout: '',
             wrapperClass: 'modals-newsletter-popup',
             buttons: false
         },

          _create: function() {
              this._super();
              var show = this;
              setTimeout(function () {
                  show.openModal();
              }, this.options.timeout);
          }
      });

      return $.Custom.Popup;
   }
);