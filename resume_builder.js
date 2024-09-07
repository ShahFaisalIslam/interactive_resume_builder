"use strict";
function hidePersonalInfoElements() {
    let personalInfo = document.getElementById("personal-information");
    if (!personalInfo)
        return;
    let children = personalInfo.children;
    for (let child of children) {
        child.setAttribute("display", "none");
    }
}
