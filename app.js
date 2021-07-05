'use strict';
(function() {
    var sliderCount = 0;

    function slideFunc() {
        let sHeight = document.body.clientHeight;
        if (sliderCount === 0) {
            window.scrollTo(0, 0);
        } else if (sliderCount === 1) {
            window.scrollTo(0, sHeight * 1);
        } else if (sliderCount === 2) {
            window.scrollTo(0, sHeight * 2);
        } else if (sliderCount === 3) {
            window.scrollTo(0, sHeight * 3);
        }
    }

    function dotClick(target, sliderNum) {
        document.getElementById(target).addEventListener("click", function(e) {
            e.preventDefault();
            sliderCount = sliderNum;
            slideFunc();
        });
    }
    dotClick("slideDot1", 0);
    dotClick("slideDot2", 1);
    dotClick("slideDot3", 2);
    dotClick("slideDot4", 3);
})();
