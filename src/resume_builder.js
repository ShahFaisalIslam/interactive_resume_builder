"use strict";
;
;
let resumeData = { personalDetails: {
        name: "Shah Faisal",
        contact: "0330377686",
        email: "faisal.islam.ceme@gmail.com",
        linkedinProfile: "/in/ShahFaisalIslam",
        address: "First floor, Plot R-402, Samanabad, F.B. Area Bock 18, Karachi Central"
    },
    skills: ["HTML", "JavaScript", "TypeScript", "C/C++"],
    experience: [
        {
            company: "7G-Fuse SMC Pvt. Ltd.",
            role: "Senior Software Engineer",
            duration: {
                startingYear: 2019,
                endingYear: 9000
            },
            points: ["Led development of network interfaces bonding solution on UDP",
                "Developed Network Interface Statistics Module",
                "Developed Network Interface Usage Quota Module"]
        }
    ],
    education: [
        {
            institution: "NUST",
            qualification: "BE Mechatronics",
            duration: {
                startingYear: 2015,
                endingYear: 2019
            }
        }
    ]
};
function toggleDetailsVisibility(id) {
    let personalInfo = document.getElementById(id);
    if (!personalInfo)
        return;
    let hidden = null;
    let isHidden = personalInfo.getAttribute("hidden");
    if (typeof isHidden === "string") {
        personalInfo.removeAttribute("hidden");
        hidden = false;
    }
    else {
        personalInfo.setAttribute("hidden", "");
        hidden = true;
    }
    if (typeof hidden == "boolean") {
        let button = document.getElementById(`${id}-button`);
        if (!button)
            return;
        if (hidden) {
            button.innerText = "Show";
        }
        else {
            button.innerText = "Hide";
        }
    }
}
function setName() {
    resumeData.personalDetails.name = document.getElementById('form-name').value;
}
function setContact() {
    resumeData.personalDetails.contact = document.getElementById('form-contact').value;
}
function setEmail() {
    resumeData.personalDetails.email = document.getElementById('form-email').value;
}
function setAddress() {
    resumeData.personalDetails.address = document.getElementById('form-address').value;
}
function setLinkedinProfile() {
    resumeData.personalDetails.linkedinProfile = document.getElementById('form-linkedin-profile').value;
}
function changeName() {
    let heading = document.getElementsByTagName('h1')[0];
    heading.innerText = resumeData.personalDetails.name;
}
function changeContact() {
    let contactElement = document.getElementById('contact');
    contactElement.innerText = resumeData.personalDetails.contact;
}
function changeEmail() {
    let emailElement = document.getElementById('email');
    emailElement.innerText = resumeData.personalDetails.email;
}
function changeAddress() {
    let addressElement = document.getElementById('address');
    addressElement.innerText = resumeData.personalDetails.address;
}
function changeLinkedinProfile() {
    let linkedinProfileElement = document.getElementById('linkedin-profile');
    linkedinProfileElement.innerText = resumeData.personalDetails.linkedinProfile;
}
function changePersonalDetails() {
    let isFormHidden = document.getElementById('form').getAttribute("hidden") !== null ? true : false;
    if (isFormHidden) {
        document.getElementById('form').removeAttribute("hidden");
        document.getElementById('resume').setAttribute("hidden", "");
        document.getElementById('submit-button').innerText = "Submit";
    }
    else {
        document.getElementById('resume').removeAttribute("hidden");
        document.getElementById('form').setAttribute("hidden", "");
        document.getElementById('submit-button').innerText = "Edit Details...";
    }
}
function removeOldButton() {
    let oldButton = document.getElementById('add-btn');
    oldButton.remove();
}
function addSkill() {
    let skillsDiv = document.getElementById('form-skills');
    let newSkills = document.createElement('div');
    let newSkillInput = document.createElement("input");
    newSkillInput.type = "text";
    removeOldButton();
    let newSkillButton = document.createElement("button");
    newSkillButton.innerText = "+";
    newSkillButton.id = 'add-btn';
    newSkillButton.onclick = addSkill;
    newSkills.append(newSkillInput);
    newSkills.append(newSkillButton);
    skillsDiv.append(newSkills);
    let addedSkillInput = document.getElementById('added-skill');
    addedSkillInput.readOnly = true;
    let newSkill = addedSkillInput.value;
    if (!resumeData.skills.includes(newSkill))
        resumeData.skills.push(newSkill);
    addedSkillInput.id = "";
    newSkillInput.id = "added-skill";
    changeSkills();
}
function changeSkills() {
    let skills = document.getElementsByName('skill');
    for (let skill of resumeData.skills) {
        let skillFound = false;
        for (let skillTD of skills) {
            if (skillTD.innerText === skill) {
                skillFound = true;
                break;
            }
        }
        if (skillFound)
            continue;
        let addedSkillTD = document.createElement('td');
        addedSkillTD.innerText = skill;
        document.getElementById('skills-list').append(addedSkillTD);
    }
}
