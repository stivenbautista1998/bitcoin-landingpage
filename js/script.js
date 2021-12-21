var arrowLeftPlans, arrowRightPlans, arrowBackTable, arrowNextTable;
var containerPlan, stylePlan, boxPlanSize, containerTable, boxTableSize;

window.addEventListener("load", function() {
    // setting up the variables for the plan section.
    containerPlan = document.getElementById("plans-container");
    var planBoxs = document.getElementsByClassName("plan-section__list__item");
    arrowLeftPlans = document.getElementById("arrow-left");
    arrowRightPlans = document.getElementById("arrow-right");
    stylePlan = planBoxs[1].currentStyle || window.getComputedStyle(planBoxs[1]); // gettig the current styles of the elements.

    boxPlanSize = planBoxs[1].clientWidth;
    containerPlan.scrollLeft = boxPlanSize; // seting the scroll to the center.

    // setting up the variables for the table section.
    containerTable = document.getElementById("container-table");
    var planBoxs = document.getElementsByClassName("table-section__border");
    arrowBackTable = document.getElementById("arrow-table-back");
    arrowNextTable = document.getElementById("arrow-table-next");
    
    boxTableSize = planBoxs[0].clientWidth;
    arrowBackTable.style.display = "none";


    handlerArrowPlan();
    handlerArrowTable();
});


function handlerArrowPlan() {
    arrowLeftPlans.addEventListener("click", function() {
        arrowRightPlans.style.display = "inline-block";

        containerPlan.scrollLeft -= boxPlanSize;
        var margins = parseInt(stylePlan.marginLeft) + parseInt(stylePlan.marginRight) + 1;

        if(containerPlan.scrollLeft < (boxPlanSize + margins)) { // having into acount the 31px of horizontal margin on each element.
            arrowLeftPlans.style.display = "none";
        }
        console.log("clicked left!!");
    });

    arrowRightPlans.addEventListener("click", function() {
        arrowLeftPlans.style.display = "inline-block";

        containerPlan.scrollLeft += boxPlanSize;
        var margins = parseInt(stylePlan.marginLeft) + parseInt(stylePlan.marginRight) + 1;

        if(containerPlan.scrollLeft > (boxPlanSize + margins)) {
            arrowRightPlans.style.display = "none";
        }
        console.log("clicked right!!");
    });
}

function handlerArrowTable() {
    arrowBackTable.addEventListener("click", function() {
        console.log("clicked back!!");
        arrowNextTable.style.display = "inline-block";

        containerTable.scrollLeft -= boxTableSize;
        arrowBackTable.style.display = "none";
    });

    arrowNextTable.addEventListener("click", function() {
        console.log("clicked next!!");
        arrowBackTable.style.display = "inline-block";

        containerTable.scrollLeft += boxTableSize;
        arrowNextTable.style.display = "none";
    });
}