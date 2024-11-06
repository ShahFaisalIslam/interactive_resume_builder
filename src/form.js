"use strict";
const submitForm = () => {
    let formContainer = document.getElementsByClassName('form-container')[0];
    // Invalidate if any of the buttons is not saved
    let saveButtons = formContainer.querySelectorAll(".save-button");
    for (let button of saveButtons) {
        if (button.value == "Save") {
            alert("Please save all information before submitting!");
            return false;
        }
    }
    formContainer = formContainer;
    formContainer.className = "slide-out-right";
    window.setTimeout(() => {
        formContainer.remove();
        let titleElement = document.createElement('div');
        titleElement.id = "resume";
        let bodyElement = document.getElementsByTagName('body')[0];
        bodyElement.appendChild(titleElement);
        buildResume();
    }, 500);
    return false;
};
const removeField = (id) => {
    let button = document.getElementById(id);
    let parent = button.parentElement;
    parent.remove();
};
const sanitizeField = (field) => {
    let inputsList = field.querySelectorAll('input');
    let textareaList = field.querySelectorAll('textarea');
    for (let input of inputsList)
        input.value = "";
    for (let textarea of textareaList)
        textarea.innerText = "";
};
const addFieldList = (id) => {
    let section = document.getElementById(`${id}-field-list`);
    let fieldList = section.querySelectorAll('div');
    let lastField = fieldList[fieldList.length - 1];
    // Duplicate last field
    let lastFieldClone = lastField.cloneNode(true);
    // Append the clone into the list
    section.appendChild(lastFieldClone);
    // Change button in previous field into remove button
    let lastFieldButton = lastField.children[1];
    lastFieldButton.innerText = '–';
    lastFieldButton.id = `remove-${id}-${fieldList.length}`;
    lastFieldButton.onclick = () => { removeField(`remove-${id}-${fieldList.length}`); };
    sanitizeField(lastFieldClone);
};
const toggleDisableElements = (formElement) => {
    const inputList = formElement.querySelectorAll("input");
    for (let i = 0; i < inputList.length; i++) {
        let inputElement = inputList[i];
        inputElement.disabled = !inputElement.disabled;
    }
    const textareaList = formElement.querySelectorAll("textarea");
    for (let i = 0; i < textareaList.length; i++) {
        let textareaElement = textareaList[i];
        textareaElement.disabled = !textareaElement.disabled;
    }
    const buttonList = formElement.querySelectorAll("button");
    for (let i = 0; i < buttonList.length; i++) {
        let buttonElement = buttonList[i];
        buttonElement.disabled = !buttonElement.disabled;
    }
};
const savePersonalDetails = () => {
    const personalDetails = document.getElementById('personal-details-section');
    // Personal Details
    const personalDetailsInputs = personalDetails.querySelectorAll('input');
    const personalDetailsAddress = personalDetails.querySelector('textarea');
    savedResumeData.personalDetails.name = personalDetailsInputs[0].value; //Name
    savedResumeData.personalDetails.contact = personalDetailsInputs[1].value; //Contact
    savedResumeData.personalDetails.linkedinProfile = personalDetailsInputs[2].value; // Linkedin
    savedResumeData.personalDetails.email = personalDetailsInputs[3].value; //Email
    savedResumeData.personalDetails.address = personalDetailsAddress.value; // Address
};
const saveSkills = () => {
    const section = document.getElementById(`skills-field-list`);
    const fieldList = section.querySelectorAll('div');
    savedResumeData.skills = [];
    for (const field of fieldList) {
        const input = field.children[0];
        savedResumeData.skills.push(input.value);
    }
};
const saveExperience = () => {
    const section = document.getElementById(`experience-section`);
    const subSectionList = section.children;
    savedResumeData.experiences = [];
    for (const subSection of subSectionList) {
        const experienceInputs = subSection.querySelectorAll('input');
        let experienceData = {
            location: experienceInputs[0].value,
            jobTitle: experienceInputs[1].value,
            duration: {
                startYear: parseInt(experienceInputs[2].value),
                endYear: experienceInputs[3].value ? parseInt(experienceInputs[3].value) : "Current"
            },
            points: []
        };
        for (let i = 4; i < experienceInputs.length; i++)
            experienceData.points.push(experienceInputs[i].value);
        savedResumeData.experiences.push(experienceData);
    }
};
const saveEducation = () => {
    let section = document.getElementById(`education-section`);
    let subSectionList = section.children;
    for (let subSection of subSectionList) {
        let educationInputs = subSection.querySelectorAll('input');
        let educationData = {
            institute: educationInputs[0].value,
            title: educationInputs[1].value,
            duration: {
                startYear: parseInt(educationInputs[2].value),
                endYear: parseInt(educationInputs[3].value)
            }
        };
        savedResumeData.education.push(educationData);
    }
};
const saveData = (id) => {
    switch (id) {
        case 'personal-details':
            savePersonalDetails();
            break;
        case 'skills':
            saveSkills();
            break;
        case 'experience':
            saveExperience();
            break;
        case 'education':
            saveEducation();
            break;
        default:
            throw Error("Invalid section");
            break;
    }
};
const toggleSaveOrEditButton = (id) => {
    let buttonElement = document.getElementById(`${id}-button`);
    if (buttonElement.value == "Save") {
        saveData(id);
        buttonElement.value = "Edit";
    }
    else
        buttonElement.value = "Save";
};
const saveOrEdit = (id) => {
    let formElement = document.getElementById(`${id}-section`);
    toggleDisableElements(formElement);
    toggleSaveOrEditButton(id);
};
const capitalizeFirstLetter = (word) => {
    let newWord = "";
    for (let i = 0; i < word.length; i++)
        newWord += i ? word[i] : word[i].toUpperCase();
    return newWord;
};
const sanitizeSubSection = (subSection, section) => {
    sanitizeField(subSection);
    if (section == "experience") {
        const parent = subSection.parentElement;
        const subSectionsAmount = parent.childElementCount;
        // Replace id of pointsList
        let lastPointsList = document.getElementById(`points-${subSectionsAmount - 1}-field-list`);
        lastPointsList.id = `points-${subSectionsAmount}-field-list`;
        // Change onclick
        let buttons = parent.children[subSectionsAmount - 2].querySelectorAll('button');
        let i = 1;
        for (let button of buttons) {
            button.onclick = button.innerText == "+" ? () => { addFieldList(`points-${subSectionsAmount}`); } : () => {
                removeField(`remove-${section}-${subSectionsAmount}`);
            };
            if (button.innerText == '–') {
                button.id = `remove-points-${subSectionsAmount}-${i}`;
                i++;
            }
        }
    }
};
const addSubSection = (section) => {
    let sectionElement = document.getElementById(`${section}-section`);
    let subSectionList = sectionElement.children;
    let lastSubSection = subSectionList[subSectionList.length - 1];
    let newSubSection = lastSubSection.cloneNode(true);
    // Convert the add experience button into remove experience button
    let lastSubSectionButton = lastSubSection.children[lastSubSection.children.length - 1];
    lastSubSectionButton.innerText = `Remove ${capitalizeFirstLetter(section)}`;
    lastSubSectionButton.id = `remove-${section}-${subSectionList.length}`;
    lastSubSectionButton.onclick = () => { removeField(lastSubSectionButton.id); };
    sectionElement.appendChild(newSubSection);
    sanitizeSubSection(newSubSection, section);
};
// Dummy purposes only
const initializeForm = () => {
    // return;
    let personalDetails = document.getElementById('personal-details-section');
    // Personal Details
    let personalDetailsInputs = personalDetails.querySelectorAll('input');
    let personalDetailsAddress = personalDetails.querySelector('textarea');
    personalDetailsInputs[0].value = sampleResumeData.personalDetails.name; //Name
    personalDetailsInputs[1].value = sampleResumeData.personalDetails.contact; //Contact
    personalDetailsInputs[2].value = sampleResumeData.personalDetails.linkedinProfile; // Linkedin
    personalDetailsInputs[3].value = sampleResumeData.personalDetails.email; //Email
    personalDetailsAddress.innerText = sampleResumeData.personalDetails.address; // Address
    // Skills
    // Initialize skill fields
    for (let i = 0; i < sampleResumeData.skills.length; i++) {
        // Get last skill field
        let section = document.getElementById(`skills-field-list`);
        let fieldList = section.querySelectorAll('div');
        let lastField = fieldList[fieldList.length - 1];
        let lastFieldInput = lastField.children[0];
        lastFieldInput.value = sampleResumeData.skills[i];
        if (i < sampleResumeData.skills.length - 1)
            addFieldList('skills');
    }
    // Experience
    for (let i = 0; i < sampleResumeData.experiences.length; i++) {
        let section = document.getElementById(`experience-section`);
        let subSectionList = section.children;
        let lastSubSection = subSectionList[subSectionList.length - 1];
        let experienceInputs = lastSubSection.querySelectorAll('input');
        experienceInputs[0].value = sampleResumeData.experiences[i].location;
        experienceInputs[1].value = sampleResumeData.experiences[i].jobTitle;
        experienceInputs[2].value = sampleResumeData.experiences[i].duration.startYear.toString();
        experienceInputs[3].value = sampleResumeData.experiences[i].duration.endYear.toString();
        for (let j = 0; j < sampleResumeData.experiences[i].points.length; j++) {
            experienceInputs[4 + j].value = sampleResumeData.experiences[i].points[j];
            if (j < sampleResumeData.experiences[i].points.length - 1) {
                addFieldList(`points-${i + 1}`);
                experienceInputs = lastSubSection.querySelectorAll('input');
            }
        }
        if (i < sampleResumeData.experiences.length - 1)
            addSubSection('experience');
    }
    // Education
    for (let i = 0; i < sampleResumeData.education.length; i++) {
        let section = document.getElementById(`education-section`);
        let subSectionList = section.children;
        let lastSubSection = subSectionList[subSectionList.length - 1];
        let educationInputs = lastSubSection.querySelectorAll('input');
        educationInputs[0].value = sampleResumeData.education[i].institute;
        educationInputs[1].value = sampleResumeData.education[i].title;
        educationInputs[2].value = sampleResumeData.education[i].duration.startYear.toString();
        educationInputs[3].value = sampleResumeData.education[i].duration.endYear.toString();
        if (i < sampleResumeData.education.length - 1)
            addSubSection('education');
    }
};
