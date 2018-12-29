// Miscelaneous function to scroll to an element
export function scrollTo(element) {
    // check if element exist
    if (element.length) {
        if (element == "top") {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        } else {
            $("html, body").animate({
                    scrollTop: $(element).offset().top
                }, 1000)
                // Check if element has accordion class and open it
                .promise().then(function checkAccordion() {
                    if (element.hasClass("accordion")) {
                        element.find("button").removeClass("collapsed").attr("aria-expanded", "true");
                        element.find($(".multi-collapse.collapse")).addClass("show");
                    }
                });
        }
    }
}

// Get element position
export function scrollPosition(element){
    let top = window.scrollY,
        bottom = window.scrollY + window.innerHeight;

    for (let index = 0; index < element.length; index++) {
        let elementTop = $(element[index]).offset().top,
        elementAnimations = $(element[index]).data("animations");

        if(!$(element[index]).hasClass('in')){
            if((bottom - 50) >= elementTop){
                $(element[index]).addClass(elementAnimations);
            }
        }     
    }
}

// Validate necessary key codes
/**
 * charCode [48,57]     Numbers 0 to 9
 * keyCode 46           "delete"
 * keyCode 9            "tab"
 * keyCode 13           "enter"
 * keyCode 116          "F5"
 * keyCode 8            "backscape"
 * keyCode 37,38,39,40  Arrows
 * keyCode 10           (LF)
 */
export function validateKeyCode(e) {
    var data = 0;
    if ((e.charCode >= 48 && e.charCode <= 57) ||
        e.keyCode == 9 || e.keyCode == 10 || e.keyCode == 13 ||
        e.keyCode == 8 || e.keyCode == 45 || e.keyCode == 46) {
        data = true;
    } else {
        data = false;
    }
    return data;
}

export function blockSpecialChar(e){
    var k;
    document.all ? k = e.keyCode : k = e.which;

    return (
        (k > 64 && k < 91) || (k > 96 && k < 123) || 
         k == 8 || k == 32 || (k >= 48 && k <= 57)
    );
}

// Read a page's GET URL variables and return them as an associative array.
export function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }

    return vars;
}