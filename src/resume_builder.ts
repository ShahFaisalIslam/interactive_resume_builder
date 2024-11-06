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
        formElement.style.minHeight = "0px";
        buildResume();
    }
    return false;
}

const addSection = (parent: HTMLElement, section: HTMLElement) => {
    parent.appendChild(document.createElement('hr'));
    parent.appendChild(section);
}

const buildResume = () => {
    const resumeElement = <HTMLDivElement> document.getElementById('resume');

    let divList : HTMLElement[] = [];

    
    // Personal Details
    divList.push(getPersonalDetails());
    
    // Skills
    divList.push(getSkillsElement());

    // Experience
    divList.push(getExperiences());

    // Education
    divList.push(getEducation());
    
    // Title
    resumeElement.appendChild(getResumeTitle());

    divList.map((div) => addSection(resumeElement,div));

};