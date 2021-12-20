var arrowLeft, arrowRight;

window.addEventListener("load", function() {
    console.log("It is working!!");
    var containerPlan = document.getElementById("plans-container");
    var planBoxs = document.getElementsByClassName("plan-section__list__item");
    arrowLeft = document.getElementById("arrow-left");
    arrowRight = document.getElementById("arrow-right");
    var newStyle = planBoxs[1].currentStyle || window.getComputedStyle(planBoxs[1]); // gettig the current styles of the elements.
    
    var boxSize = planBoxs[1].clientWidth;
    containerPlan.scrollLeft = boxSize; // seting the scroll to the center.

    arrowLeft.addEventListener("click", function() {
        arrowRight.style.display = "inline-block";

        containerPlan.scrollLeft -= boxSize;
        var margins = parseInt(newStyle.marginLeft) + parseInt(newStyle.marginRight) + 1;

        if(containerPlan.scrollLeft < (boxSize + margins)) { // having into acount the 31px of horizontal margin on each element.
            arrowLeft.style.display = "none";
        }
        console.log("clicked left!!");
    });

    arrowRight.addEventListener("click", function() {
        arrowLeft.style.display = "inline-block";

        containerPlan.scrollLeft += boxSize;
        var margins = parseInt(newStyle.marginLeft) + parseInt(newStyle.marginRight) + 1;

        if(containerPlan.scrollLeft > (boxSize + margins)) {
            arrowRight.style.display = "none";
        }
        console.log("clicked right!!");
    });
});

