// Module Reveal Design Pattern
// References
// https://www.udemy.com/javascript-design-patterns-20-patterns-for-expert-code
// https://medium.com/@jrschwane/writing-modular-javascript-pt-1-b42a3bd23685

// TEMPLATE
// Component

var componentExample = (function() {
    "use strict";
    // Variable Definitions - Private Variable
    var _example = "This is an example";

    // Variable Definitions - Public Variables
    var DOM = {};

    /* =================== Private methods ================= */

    function _MethodExample() {
        console.log("Hello from: " + _example);
    }

    /* =================== Public methods ================= */
    function callMethodExample() {
        _MethodExample();
    }

    // cache DOM elements
    function cacheDom() {
        DOM.$someElement = $("#some-element");
    }

    function handleClick() {}

    // Bind Events To UI
    function bindEvents() {
        DOM.$someElement.click(handleClick);
    }

    // Component Init
    function init() {
        console.log("Hello from example");
        cacheDom();
        bindEvents();
    }

    /* =============== export public methods =============== */
    return {
        init: init,
        callMethodExample: callMethodExample
    };
})();

export { componentExample };
