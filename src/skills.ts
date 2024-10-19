const getSkillsElement = () => {
    let [containerElement, skillsElement] = <[HTMLDivElement, HTMLDivElement]>getSection({
        id: 'skills',
        heading: "Skills",
    });

    let skillsListElement = getElement({ tag: 'ul' });
    sampleResumeData.skills.map((skill: string) => skillsListElement.appendChild(getElement({ innerText: skill, tag: 'li' })));
    skillsElement.appendChild(skillsListElement);

    return containerElement;
}