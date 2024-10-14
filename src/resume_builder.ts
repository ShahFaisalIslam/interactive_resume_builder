function toggleDetailsVisibility(id: string): void {
    let personalInfo = document.getElementById(id);
    if (!personalInfo) return;
    let hidden: boolean | null = null;
    let isHidden: string = personalInfo.style.display;
    if (isHidden === "none") {
        personalInfo.style.display = "initial";
        hidden = false;
    } else {
        personalInfo.style.display = "none";
        hidden = true;
    }
    if (typeof hidden == "boolean") {
        let button = document.getElementById(`${id}-button`);
        if (!button) return;
        if (hidden) {
            button.innerText = "▼";
        } else {
            button.innerText = "▲";
        }
    }
}

const handleSubmit = () => {
    const formElement = document.getElementById('form');
    const resumeElement = document.getElementById('resume');
    if (formElement && resumeElement) {
        formElement.style.display = 'none';
        resumeElement.style.display = 'unset';
    }
    return false;
}