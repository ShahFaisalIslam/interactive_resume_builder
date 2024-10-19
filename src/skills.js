"use strict";
const getSkillsElement = () => {
    let [containerElement, skillsElement] = getSection({
        id: 'skills',
        heading: "Skills",
    });
    let skillsListElement = getElement({ tag: 'ul' });
    sampleResumeData.skills.map((skill) => skillsListElement.appendChild(getElement({ innerText: skill, tag: 'li' })));
    skillsElement.appendChild(skillsListElement);
    return containerElement;
};
