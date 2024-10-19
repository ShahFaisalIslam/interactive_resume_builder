const addEducation = (parent: HTMLDivElement, education: EducationData) => {
    let containerElement = <HTMLDivElement>getElement({tag:"div"});
    const locationElement = <HTMLDivElement>getElement({ tag: "div", innerText: education.institute });
    const jobTitleElement = <HTMLDivElement>getElement({
        tag: 'div',
        innerText: education.title
    });
    const pointsList = <HTMLDivElement>getElement({
        tag: "div",
        innerText: `${education.duration.startYear} - ${education.duration.endYear}`
    });

    containerElement.appendChild(locationElement);
    containerElement.appendChild(jobTitleElement);
    containerElement.appendChild(pointsList);
    parent.appendChild(containerElement);
}


const getEducation = () => {
    let [containerElement, educationElement] = <[HTMLDivElement, HTMLDivElement]>getSection({
        id: "education",
        heading: "Education"
    });

    sampleResumeData.education.map((education) => addEducation(educationElement,education));
    return containerElement;
}