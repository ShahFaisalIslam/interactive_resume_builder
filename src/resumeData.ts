interface PersonalDetails {
    name: string;
    contact: string;
    linkedinProfile: string;
    email: string;
    address: string;
}

interface Duration {
    startYear: number;
    endYear: number | "Current";
}

interface ExperienceData {
    location: string;
    jobTitle: string,
    duration: Duration;
    points: string[]
}

interface EducationData {
    institute: string;
    title: string;
    duration: Duration;
};

interface ResumeData {
    personalDetails: PersonalDetails;
    skills: string[];
    experiences: ExperienceData[];
    education: EducationData[];
};

let sampleResumeData: ResumeData = {
    personalDetails: {
        name: "Shah Faisal",
        contact: "+923330377686",
        linkedinProfile: "/in/ShahFaisalIslam",
        email: "faisal.islam.ceme@gmail.com",
        address: "First floor, Plot R-402, Samanabad, F.B. Area Bock 18, Karachi Central"
    },
    skills: [
        'HTML',
        'CSS',
        'TypeScript',
        'C/C++'
    ],
    experiences: [
        {
            jobTitle: "Senior Software Engineer",
            location: "7G-Fuse SMC Pvt. Ltd.",
            duration: {
                startYear: 2019,
                endYear: "Current",
            },
            points: [
                "Led development of network interfaces bonding solution on UDP",
                "Developed Network Interface Statistics Module",
                "Developed Network Interface Usage Quota Module"
            ]
        }
    ],
    education: [{
        institute: "NUST",
        title: "BE Mechatronics",
        duration: {
            startYear: 2015,
            endYear: 2019
        }
    },{
        institute: "Cambridge",
        title: "GCE A Levels",
        duration: {
            startYear: 2013,
            endYear: 2015
        }
    },{
        institute: "Cambridge",
        title: "IGCSE (O Levels)",
        duration: {
            startYear: 2011,
            endYear: 2013
        }
    }]
}