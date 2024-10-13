"use strict";
function toggleDetailsVisibility(id) {
    let personalInfo = document.getElementById(id);
    if (!personalInfo)
        return;
    let hidden = null;
    let isHidden = personalInfo.style.display;
    if (isHidden === "none") {
        personalInfo.style.display = "initial";
        hidden = false;
    }
    else {
        personalInfo.style.display = "none";
        hidden = true;
    }
    if (typeof hidden == "boolean") {
        let button = document.getElementById(`${id}-button`);
        if (!button)
            return;
        if (hidden) {
            button.innerText = "▼";
        }
        else {
            button.innerText = "▲";
        }
    }
}
