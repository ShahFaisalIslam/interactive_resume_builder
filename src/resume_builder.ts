interface PersonalDetails {
    name : string,
    contact: string,
    email: string,
    linkedinProfile: string
    address: string
};

interface Duration {
    startingYear: number,
    endingYear: number
}

interface Experience {
    company : string,
    role: string,
    duration: Duration,
    points: string[]
};

interface Education {
    institution: string,
    qualification: string,
    duration: Duration
}

interface ResumeData {
    personalDetails : PersonalDetails,
    skills : string[],
    experience: Experience[],
    education: Education[]
}

let resumeData : ResumeData = {personalDetails: {
    name :"Shah Faisal",
    contact : "0330377686",
    email: "faisal.islam.ceme@gmail.com",
    linkedinProfile: "/in/ShahFaisalIslam",
    address: "First floor, Plot R-402, Samanabad, F.B. Area Bock 18, Karachi Central"
},
skills: ["HTML","JavaScript","TypeScript","C/C++"],
experience : [
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
        qualification : "BE Mechatronics",
        duration : {
            startingYear: 2015,
            endingYear: 2019
        }
    }
]
};

function toggleDetailsVisibility(id: string) : void {
    let personalInfo = document.getElementById(id);
    if (!personalInfo) return;
    let hidden : boolean | null = null;
    let isHidden : string | null= personalInfo.getAttribute("hidden");
        if (typeof isHidden === "string") {
            personalInfo.removeAttribute("hidden");
            hidden = false;
        } else {
            personalInfo.setAttribute("hidden","");
            hidden = true;
        }
    if (typeof hidden == "boolean") {
        let button = document.getElementById(`${id}-button`);
        if (!button) return;
        if (hidden) {
            button.innerText = "Show";
        } else {
            button.innerText = "Hide";
        }
    }
}

function setName() : void {
    resumeData.personalDetails.name = (<HTMLInputElement>document.getElementById('form-name')).value;
}

function setContact() : void {
    resumeData.personalDetails.contact = (<HTMLInputElement>document.getElementById('form-contact')).value;
}

function setEmail() : void {
    resumeData.personalDetails.email = (<HTMLInputElement>document.getElementById('form-email')).value;
}

function setAddress() : void {
    resumeData.personalDetails.address = (<HTMLInputElement>document.getElementById('form-address')).value;
}

function setLinkedinProfile() : void {
    resumeData.personalDetails.linkedinProfile = (<HTMLInputElement>document.getElementById('form-linkedin-profile')).value;
}

function changeName() : void {
    let heading = document.getElementsByTagName('h1')[0];
    heading.innerText = resumeData.personalDetails.name;
}


function changeContact() : void {
    let contactElement : HTMLTableCellElement = <HTMLTableCellElement>document.getElementById('contact');
    contactElement.innerText = resumeData.personalDetails.contact;
}

function changeEmail() : void {
    let emailElement : HTMLTableCellElement = <HTMLTableCellElement>document.getElementById('email');
    emailElement.innerText = resumeData.personalDetails.email;
}
function changeAddress() : void {
    let addressElement : HTMLTableCellElement = <HTMLTableCellElement>document.getElementById('address');
    addressElement.innerText = resumeData.personalDetails.address;
}

function changeLinkedinProfile() : void {
    let linkedinProfileElement : HTMLTableCellElement = <HTMLTableCellElement>document.getElementById('linkedin-profile');
    linkedinProfileElement.innerText = resumeData.personalDetails.linkedinProfile;
}

function changePersonalDetails() : void {
    let isFormHidden = (<HTMLDivElement>document.getElementById('form')).getAttribute("hidden") !== null ? true : false;
    if (isFormHidden) {
        (<HTMLDivElement>document.getElementById('form')).removeAttribute("hidden");
        (<HTMLDivElement>document.getElementById('resume')).setAttribute("hidden","");
        (<HTMLButtonElement>document.getElementById('submit-button')).innerText = "Submit";
    } else {
        (<HTMLDivElement>document.getElementById('resume')).removeAttribute("hidden");
        (<HTMLDivElement>document.getElementById('form')).setAttribute("hidden","");
        (<HTMLButtonElement>document.getElementById('submit-button')).innerText = "Edit Details...";
    }
}

function removeOldButton() : void {
    let oldButton = <HTMLButtonElement>document.getElementById('add-btn');
    oldButton.remove();
}

function addSkill() : void {
    let skillsDiv : HTMLDivElement = <HTMLDivElement>document.getElementById('form-skills');
    let newSkills : HTMLDivElement = document.createElement('div');
    let newSkillInput : HTMLInputElement = document.createElement("input");
    newSkillInput.type = "text";
    removeOldButton();
    let newSkillButton : HTMLButtonElement = document.createElement("button");
    newSkillButton.innerText = "+";
    newSkillButton.id = 'add-btn';
    newSkillButton.onclick = addSkill;
    newSkills.append(newSkillInput);
    newSkills.append(newSkillButton);
    skillsDiv.append(newSkills);

    let addedSkillInput : HTMLInputElement = <HTMLInputElement>document.getElementById('added-skill');
    addedSkillInput.readOnly = true;
    let newSkill : string = addedSkillInput.value;
    
    if (!resumeData.skills.includes(newSkill))
        resumeData.skills.push(newSkill);
    addedSkillInput.id = "";
    newSkillInput.id = "added-skill";
    changeSkills();
}

function changeSkills() : void {
    let skills = document.getElementsByName('skill');
    for (let skill of resumeData.skills) {
        let skillFound : boolean = false;
        for (let skillTD of skills) {
            if (skillTD.innerText === skill){
                skillFound = true;
                break;
            }
        }
        if (skillFound)
            continue;

            let addedSkillTD : HTMLTableCellElement = document.createElement('td');
            addedSkillTD.innerText = skill;
            (<HTMLTableRowElement>document.getElementById('skills-list')).append(addedSkillTD);
        }
}