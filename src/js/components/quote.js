// Module Reveal Design Pattern
// References
// https://www.udemy.com/javascript-design-patterns-20-patterns-for-expert-code
// https://medium.com/@jrschwane/writing-modular-javascript-pt-1-b42a3bd23685

// TEMPLATE
// Component

import { scrollPosition } from "../helpers/utils";

var quote = (function() {
    "use strict";

    // Variable Definitions - Public Variables
    var DOM = {
        
    };

    /* =================== Public methods ================= */

    function windowOnScroll(){
        scrollPosition($('.animate'));
    }

    function updateSelectedCar(){
        var car = $('.'+DOM.carSelect.val());
        DOM.cars.hide();
        car.show();
    }
    
    

    // cache DOM elements
    function cacheDom() {
        DOM.animatedItems = $('.animate');
        DOM.window = $(window);
        DOM.carSelect= $('#model');
        DOM.carContainer = $('.cars');
        DOM.cars = $('.car');
    }
 
    // Bind Events To UI
    function bindEvents() {
        DOM.window.on('scroll', windowOnScroll)
        DOM.carSelect.on('change', updateSelectedCar)
    }

    // Component Init
    function init() {
        cacheDom();
        bindEvents();
    }

    /* =============== export public methods =============== */
    return {
        init: init
    };
})();

export { quote };
