// Module Reveal Design Pattern
// References
// https://www.udemy.com/javascript-design-patterns-20-patterns-for-expert-code
// https://medium.com/@jrschwane/writing-modular-javascript-pt-1-b42a3bd23685

// TEMPLATE
// Component

var accordion = (function() {
    "use strict";

    // Variable Definitions - Public Variables
    var DOM = {
        plusSign: $('.accordion-container'),
        plusSignText: $('.accordion-container .toggle-accordion')
    };

    /* =================== Public methods ================= */

    
    function toggleIcon(event) {
        var target = $( event.target )
        console.log(target);
        $(this).toggleClass('open-accordion');
        $(this).find(".toggle-accordion").text($(this).text() == 'Ver más' ? 'Ver menos' : 'Ver más');
    }

    // cache DOM elements
    function cacheDom() {
        DOM.plusSign = $('.accordion-container');
        DOM.plusSignText = $('.accordion-container .toggle-accordion');
    }
 
    // Bind Events To UI
    function bindEvents() {
        DOM.plusSign.click(toggleIcon);
    }

    // Component Init
    function init() {
        cacheDom();
        bindEvents();
        console.log("Hello from example");
    }

    /* =============== export public methods =============== */
    return {
        init: init
    };
})();

export { accordion };
