
const getResumeTitle = () : HTMLHeadingElement => {
    return <HTMLHeadingElement> getElement({
        tag: "h1",
        innerText: sampleResumeData.personalDetails.name
    });
}

const getPersonalDetails = () : HTMLDivElement => {
    let [containerElement,personalDetailsElement] = <[HTMLDivElement,HTMLDivElement]>getSection({id:'personal-details',heading:"Personal Details"});

    let contactDiv = getLabelledValueDiv('contact',"Contact",sampleResumeData.personalDetails.contact);
    let linkedinProfileDiv = getLabelledValueDiv('linkedin-profile',"LinkedIn",sampleResumeData.personalDetails.linkedinProfile);
    let emailDiv = getLabelledValueDiv('email',"Email",sampleResumeData.personalDetails.email);
    let addressDiv = getLabelledValueDiv('address',"Address",sampleResumeData.personalDetails.address);

    // Add to personal details element
    personalDetailsElement.appendChild(contactDiv);
    personalDetailsElement.appendChild(linkedinProfileDiv);
    personalDetailsElement.appendChild(emailDiv);
    personalDetailsElement.appendChild(addressDiv);

    return containerElement;
}