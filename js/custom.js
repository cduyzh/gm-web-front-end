  /* Back to Top
                              -----------------------------------------------*/
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
      } else {
          $('.go-top').fadeOut(200);
      }
  });
  // Animate the scroll to top
  $('.go-top').click(function(event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 300);
  });

  // login  form ------------------------------------------------------//
  $(document).ready(function() {
      // paper input
      $(".pmd-textfield-focused").remove();
      $(".pmd-textfield .form-control").after('<span class="pmd-textfield-focused"></span>');
      // floating label
      $('.pmd-textfield input.form-control').each(function() {
          if ($(this).val() !== "") {
              $(this).closest('.pmd-textfield').addClass("pmd-textfield-floating-label-completed");
          }
      });
      // floating change label
      $(".pmd-textfield input.form-control").on('change', function() {
          if ($(this).val() !== "") {
              $(this).closest('.pmd-textfield').addClass("pmd-textfield-floating-label-completed");
          }
      });
      // floating label animation
      $("body").on("focus", ".pmd-textfield .form-control", function() {
          $(this).closest('.pmd-textfield').addClass("pmd-textfield-floating-label-active pmd-textfield-floating-label-completed");
      });
      // remove floating label animation
      $("body").on("focusout", ".pmd-textfield .form-control", function() {
          if ($(this).val() === "") {
              $(this).closest('.pmd-textfield').removeClass("pmd-textfield-floating-label-completed");
          }
          $(this).closest('.pmd-textfield').removeClass("pmd-textfield-floating-label-active");
      });
  });



  /*!
   * Propeller v1.1.0 (http://propeller.in): checkbox.js
   * Copyright 2016-2017 Digicorp, Inc.
   * Licensed under MIT (http://propeller.in/LICENSE)
   */

  $(document).ready(function() {
      $('.pmd-checkbox input').after('<span class="pmd-checkbox-label">&nbsp;</span>');
      // Ripple Effect //
      $(".pmd-checkbox-ripple-effect").on('mousedown', function(e) {
          var rippler = $(this);
          $('.ink').remove();
          // create .ink element if it doesn't exist
          if (rippler.find(".ink").length === 0) {
              rippler.append('<span class="ink"></span>');
          }
          var ink = rippler.find(".ink");
          // prevent quick double clicks
          ink.removeClass("animate");
          // set .ink diametr
          if (!ink.height() && !ink.width()) {
              //	var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
              ink.css({ height: 20, width: 20 });
          }
          // get click coordinates
          var x = e.pageX - rippler.offset().left - ink.width() / 2;
          var y = e.pageY - rippler.offset().top - ink.height() / 2;
          // set .ink position and add class .animate
          ink.css({
              top: y + 'px',
              left: x + 'px'
          }).addClass("animate");
          setTimeout(function() {
              ink.remove();
          }, 1500);
      })
  })


  /*!
   * Propeller v1.1.0 (http://propeller.in): button.js
   * Copyright 2016-2017 Digicorp, Inc.
   * Licensed under MIT (http://propeller.in/LICENSE)
   */

  $(document).ready(function() {
          $(".pmd-ripple-effect").on('mousedown touchstart', function(e) {
              var rippler = $(this);
              $('.ink').remove();
              // create .ink element if it doesn't exist
              if (rippler.find(".ink").length === 0) {
                  rippler.append("<span class='ink'></span>");
              }
              var ink = rippler.find(".ink");
              // prevent quick double clicks
              ink.removeClass("animate");
              // set .ink diametr
              if (!ink.height() && !ink.width()) {
                  var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
                  ink.css({ height: d, width: d });
              }
              // get click coordinates
              var x = e.pageX - rippler.offset().left - ink.width() / 2;
              var y = e.pageY - rippler.offset().top - ink.height() / 2;
              // set .ink position and add class .animate
              ink.css({
                  top: y + 'px',
                  left: x + 'px'
              }).addClass("animate");

              setTimeout(function() {
                  ink.remove();
              }, 1500);
          })
      })
      // modal-control
  $(document).ready(function() {
      $('.login-card').hide();
      $('.register-card').hide();
      // home-event
      $(".login-event").click(function() {
          $('.register-card').hide();
          $('.login-card').show();
      });
      $(".sign-up-event").click(function() {
          $('.login-card').hide();
          $('.register-card').show();
      });
      // modal-form-event
      $(".login-register").click(function() {
          $('.login-card').hide();
          $('.register-card').show();
      });

      $(".register-login").click(function() {
          $('.register-card').hide();
          $('.login-card').show();
      });
  });

  function openInnerModal() {
      $('#innerModal').modal({
          backdrop: true,
          keyboard: true,
          show: true
      });
  }
  /* HTML document is loaded. DOM is ready. 
-------------------------------------------*/
  $(function() {
      new WOW().init();
  });