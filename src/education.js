"use strict";
const addEducation = (parent, education) => {
    let containerElement = getElement({ tag: "div" });
    const locationElement = getElement({ tag: "div", innerText: education.institute });
    const jobTitleElement = getElement({
        tag: 'div',
        innerText: education.title
    });
    const pointsList = getElement({
        tag: "div",
        innerText: `${education.duration.startYear} - ${education.duration.endYear}`
    });
    containerElement.appendChild(locationElement);
    containerElement.appendChild(jobTitleElement);
    containerElement.appendChild(pointsList);
    parent.appendChild(containerElement);
};
const getEducation = () => {
    let [containerElement, educationElement] = getSection({
        id: "education",
        heading: "Education"
    });
    savedResumeData.education.map((education) => addEducation(educationElement, education));
    return containerElement;
};
