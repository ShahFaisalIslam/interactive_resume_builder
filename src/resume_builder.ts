function toggleDetailsVisibility(id: string) : void {
    let personalInfo = document.getElementById(id);
    if (!personalInfo) return;
    let hidden : boolean | null = null;
    let isHidden : string | null= personalInfo.getAttribute("hidden");
        if (typeof isHidden === "string") {
            personalInfo.removeAttribute("hidden");
            hidden = false;
        } else {
            personalInfo.setAttribute("hidden","");
            hidden = true;
        }
    if (typeof hidden == "boolean") {
        let button = document.getElementById(`${id}-button`);
        if (!button) return;
        if (hidden) {
            button.innerText = "Show";
        } else {
            button.innerText = "Hide";
        }
    }
}