"use strict";

var APP = APP || {};
/* 
    Core.js
    This component read all data-actions on the html file 
    and load and init the required js components
*/
APP.core = (function() {
    // Variable Definitions
    let _actionItems = [],
        _actions = [],
        DOM = {};

    /* =================== Private methods ================= */

    // Read Data actions on html files
    function _getActions() {
        _actionItems = $("[data-action]");

        for (var x = 0; x < _actionItems.length; x++) {
            if (!_actions.includes($(_actionItems[x]).attr("data-action"))) {
                _actions.push($(_actionItems[x]).attr("data-action"));
            }
        }
    }

    // import and init components based on loaded actions
    function _getScripts() {
        for (var x = 0; x < _actions.length; x++) {
            APP[_actions[x]] = require("./components/" + _actions[x])[
                _actions[x]
            ];
            APP[_actions[x]].init();
        }
    }

    /* =================== Public methods ================= */
    function loadScripts() {
        _getActions();
        _getScripts();
    }

    // cache DOM elements
    function cacheDom() {}

    // Bind Events To UI
    function bindEvents() {}

    // Component Init
    function init() {
        loadScripts();
    }

    /* =============== export public methods =============== */
    return {
        init: init
    };
})();

console.log(APP);
APP.core.init();
