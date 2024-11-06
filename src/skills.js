"use strict";
const getSkillsElement = () => {
    let [containerElement, skillsElement] = getSection({
        id: 'skills',
        heading: "Skills",
    });
    let skillsListElement = getElement({ tag: 'ul', contentEditable: "true" });
    savedResumeData.skills.map((skill) => skillsListElement.appendChild(getElement({ innerText: skill, tag: 'li', contentEditable: "true" })));
    skillsElement.appendChild(skillsListElement);
    return containerElement;
};
