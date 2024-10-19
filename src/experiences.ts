const addExperience = (parent:HTMLDivElement,experience: ExperienceData) => {
    const locationElement = <HTMLHeadingElement>getElement({tag: "h3",innerText: experience.location});
    const jobTitleElement = <HTMLHeadingElement>getElement({
        tag: 'h4',
        innerText: `${experience.jobTitle} ${experience.duration.startYear} - ${experience.duration.endYear}`
    });
    const pointsList = <HTMLUListElement>getElement({tag:'ul'});
    experience.points.map((point) => {
        pointsList.appendChild(<HTMLLIElement>getElement({tag:'li',innerText:point}));
    });

    parent.appendChild(locationElement);
    parent.appendChild(jobTitleElement);
    parent.appendChild(pointsList);
}

const getExperiences = () => {
    let [containerElement,experiencesElement] = <[HTMLDivElement,HTMLDivElement]>getSection({id:'experience',heading:"Experience"});
    sampleResumeData.experiences.map((experience) => addExperience(experiencesElement,experience));
    return containerElement;
}