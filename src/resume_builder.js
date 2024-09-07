"use strict";
function toggleDetailsVisibility(id) {
    let personalInfo = document.getElementById(id);
    if (!personalInfo)
        return;
    let children = personalInfo.children;
    let hidden = null;
    for (let child of children) {
        let isHidden = child.getAttribute("hidden");
        if (typeof isHidden === "string") {
            child.removeAttribute("hidden");
            hidden = false;
        }
        else {
            child.setAttribute("hidden", "");
            hidden = true;
        }
    }
    if (typeof hidden == "boolean") {
        let button = document.getElementById(`${id}-button`);
        if (!button)
            return;
        if (hidden) {
            button.innerText = "Show";
        }
        else {
            button.innerText = "Hide";
        }
    }
}
document.onload = () => {
    toggleDetailsVisibility("ex");
    toggleDetailsVisibility("sk");
    toggleDetailsVisibility("ed");
};
