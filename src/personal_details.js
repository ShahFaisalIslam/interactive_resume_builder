"use strict";
const getResumeTitle = () => {
    return getElement({
        tag: "h1",
        innerText: savedResumeData.personalDetails.name
    });
};
const getPersonalDetails = () => {
    let [containerElement, personalDetailsElement] = getSection({ id: 'personal-details', heading: "Personal Details" });
    let contactDiv = getLabelledValueDiv('contact', "Contact", savedResumeData.personalDetails.contact);
    let linkedinProfileDiv = getLabelledValueDiv('linkedin-profile', "LinkedIn", savedResumeData.personalDetails.linkedinProfile);
    let emailDiv = getLabelledValueDiv('email', "Email", savedResumeData.personalDetails.email);
    let addressDiv = getLabelledValueDiv('address', "Address", savedResumeData.personalDetails.address);
    // Add to personal details element
    personalDetailsElement.appendChild(contactDiv);
    personalDetailsElement.appendChild(linkedinProfileDiv);
    personalDetailsElement.appendChild(emailDiv);
    personalDetailsElement.appendChild(addressDiv);
    return containerElement;
};
