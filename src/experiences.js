"use strict";
const addExperience = (parent, experience) => {
    const locationElement = getElement({ tag: "h3", innerText: experience.location });
    const jobTitleElement = getElement({
        tag: 'h4',
        innerText: `${experience.jobTitle} ${experience.duration.startYear} - ${experience.duration.endYear}`
    });
    const pointsList = getElement({ tag: 'ul' });
    experience.points.map((point) => {
        pointsList.appendChild(getElement({ tag: 'li', innerText: point }));
    });
    parent.appendChild(locationElement);
    parent.appendChild(jobTitleElement);
    parent.appendChild(pointsList);
};
const getExperiences = () => {
    let [containerElement, experiencesElement] = getSection({ id: 'experience', heading: "Experience" });
    savedResumeData.experiences.map((experience) => addExperience(experiencesElement, experience));
    return containerElement;
};
