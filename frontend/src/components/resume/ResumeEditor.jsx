import React, { useState, useRef, useEffect } from "react";
// import ResumeTabs from "./Resume/ResumeTabs";
// i
// // import PersonalForm from "./ResumeForms/PersonalForm";
// import ExperienceForm from "./ResumeForms/ExperienceForm";
// import EducationForm from "./ResumeForms/EducationForm";
// import SkillsForm from "./ResumeForms/SkillsForm";
// import ExtraForm from "./ResumeForms/ExtraForm";



// import PersonalForm from "./ResumeForms/PersonalForm";
// import ExperienceForm from "./ResumeForms/ExperienceForm";
// import EducationForm from "./ResumeForms/EducationForm";
// import SkillsForm from "./ResumeForms/SkillsForm";
// import ExtraForm from "./ResumeForms/ExtraForm";

import ResumeTabs from "./ResumeTabs";
import { createResume, updateResume } from "../../api/resumeService";
import { downloadResume } from "../../api/resumeService";
import PersonalForm from "./ResumeForms/PersonalForm";
import API from "../../api/api";
import ExperienceForm from "./ResumeForms/ExperienceForm";
import EducationForm from "./ResumeForms/EducationForm";
import SkillsForm from "./ResumeForms/SkillsForm";
import CertificationForm from "./ResumeForms/CertificationForm";
import ProjectForm from "./ResumeForms/ProjectForm";
import ExtraForm from "./ResumeForms/ExtraForm";
import logoHR09 from "../../assets/company-logos/LOGO HR-09.png";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";

import Template01 from "./Templates/Template01";
import Template02 from "./Templates/Template02";
import Template03 from "./Templates/Template03";
import Template04 from "./Templates/Template04";
import Template05 from "./Templates/Template05";
import Template06 from "./Templates/Template06";
import Template07 from "./Templates/Template07";
import Template08 from "./Templates/Template08";
import Template09 from "./Templates/Template09";
import Template10 from "./Templates/Template10";
import Template11 from "./Templates/Template11";
import Template12 from "./Templates/Template12";
import Template13 from "./Templates/Template13";
import Template14 from "./Templates/Template14";
import Template15 from "./Templates/Template15";// Selected Template Mapping object
const normalizeUrl = (url) => {
  if (!url) return "";
  return url.startsWith("http") ? url : `https://${url}`;
};

const templatePresets = [
  { id: "template1", name: "Traditional" },
  { id: "template2", name: "Creative Entry" },
  { id: "template3", name: "Professional" },
  { id: "template4", name: "Prime ATS" },
  { id: "template5", name: "Sales Executive" },
  { id: "template6", name: "Creative Art" },
  { id: "template7", name: "Harvard Minimal" },
  { id: "template8", name: "Modern Tech" },
  { id: "template9", name: "Minimal Tech" },
  { id: "template10", name: "Corporate Leader" },
  { id: "template11", name: "Executive" },
  { id: "template12", name: "Finance Pro" },
  { id: "template13", name: "Legal ATS" },
  { id: "template14", name: "Designer" },
  { id: "template15", name: "Startup Founder" },
];
// const templatePresets = [
//   { id: 'template1', name: 'Tiffany Giroux (Traditional)', layout: 'classic', font: "'Lora', serif", color: '#1e3a8a', header: 'centered' },
//   { id: 'template2', name: 'Avery Carter (Creative Entry)', layout: 'modern', font: "'Plus Jakarta Sans', sans-serif", color: '#0d9488', header: 'left' },
//   { id: 'template3', name: 'Sophie Walton (Professional)', layout: 'modern', font: "'Plus Jakarta Sans', sans-serif", color: '#0f766e', header: 'left' },
//   { id: 'template4', name: 'Herman Walton (Prime ATS)', layout: 'classic', font: "'Inter', sans-serif", color: '#111827', header: 'left' },
//   { id: 'template5', name: 'John Smith (Sales Executive)', layout: 'classic', font: "'Lora', serif", color: '#1e40af', header: 'centered' },
//   { id: 'template6', name: 'Anika Kumar (Creative Art)', layout: 'modern', font: "'Plus Jakarta Sans', sans-serif", color: '#7c3aed', header: 'left' },
//   { id: 'template7', name: 'Robert Vance (Harvard Minimal)', layout: 'classic', font: "'Lora', serif", color: '#111827', header: 'centered' },
//   { id: 'template8', name: 'Elena Rostova (Modern Tech)', layout: 'modern', font: "'Plus Jakarta Sans', sans-serif", color: '#0891b2', header: 'left' },
//   { id: 'template9', name: 'Daniel Johnson (Minimal Tech)', layout: 'modern', font: "'Inter', sans-serif", color: '#2563eb', header: 'left' },
//   { id: 'template10', name: 'Corporate Leader', layout: 'classic', font: "'Lora', serif", color: '#4f46e5', header: 'centered' }
// ];

// import { useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

export default function ResumeEditor({
  initialTemplateId,
  parsedResume,
  onBack,
}) {
// export default function ResumeEditor({ initialTemplateId, onBack }) {
console.log("PARSED RESUME =>", parsedResume); 
console.log("initialTemplateId =", initialTemplateId);

  const [resumeId, setResumeId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
const [isLogin, setIsLogin] = useState(true);

const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");

const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
  // const location = useLocation();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);

  //   if (params.get("action") === "download") {
  //     const token = localStorage.getItem("token");

  //     if (token) {
  //       downloadPDF();
  //       navigate("/", { replace: true });
  //     }
  //   }
  // }, [location.search]);
  const [activeTab, setActiveTab] = useState('personal');
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplateId || 'template2'); // Dynamic Selected ID!
  const renderTemplate = () => {
  switch (selectedTemplate) {

    case "template1":
      return <Template01 data={resumeData} />;

    case "template2":
      return <Template02 data={resumeData} />;

    case "template3":
      return <Template03 data={resumeData} />;

    case "template4":
      return <Template04 data={resumeData} />;

    case "template5":
      return <Template05 data={resumeData} />;

    case "template6":
      return <Template06 data={resumeData} />;

    case "template7":
      return <Template07 data={resumeData} />;

    case "template8":
      return <Template08 data={resumeData} />;

    case "template9":
      return <Template09 data={resumeData} />;

    case "template10":
      return <Template10 data={resumeData} />;

    case "template11":
      return <Template11 data={resumeData} />;

    case "template12":
      return <Template12 data={resumeData} />;

    case "template13":
      return <Template13 data={resumeData} />;

    case "template14":
      return <Template14 data={resumeData} />;

    case "template15":
      return <Template15 data={resumeData} />;

    default:
      return <Template01 data={resumeData} />;
  }
};
  console.log("selectedTemplate =", selectedTemplate);
  // Active configuration based on selected preset
  const activePreset = templatePresets.find(p => p.id === selectedTemplate) || templatePresets[0];
  const themeColor = activePreset.color;
  const activeFont = activePreset.font;
  const layout = activePreset.layout;
  const headerStyle = activePreset.header;

  // Main Resume Data
//   const [certInput, setCertInput] = useState({
//   name: "",
//   issuer: "",
//   date: "",
//   url: ""
// });
  const [resumeData, setResumeData] = useState({
    personal: {
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
      aiSummarySuggestion: "",
    },
    experiences: [
      {
        // id: 1,
        // company: "Tech Corp Inc.",
        // role: "Software Engineer",
        // duration: "2022 - Present",
        // desc: "• Built modern React dashboards reducing initial bundle size by 35%.\n• Collaborated with UX team to integrate fluid Tailwind designs.\n• Led a team of 3 developers to deliver scalable cloud integrations."
        
      id: 1,
      company: "",
      role: "",
      location: "",
      employmentType: "",
      startDate: "",
      endDate: "",
      currentCompany: false,
       desc: ""
        
    }
      
      
    ],
    educations: [
      {
        // id: 1,
        // school: "IIT Delhi",
        // degree: "B.Tech in Computer Science",
        // duration: "2018 - 2022"
      id: 1,
    school: "",
    degree: "",
    fieldOfStudy: "",
    location: "",
    startDate: "",
    endDate: "",
    cgpa: ""
      
      }
    ],
    skills: [],
    achievements: [],
    languages: [],
    activities: [],
    certifications: [
  {
    id: 1,
    name: "",
    issuer: "",
    date: "",
    link: ""
  }
],

projects: [
  {
    id: 1,
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    link: ""
  }
]  
  
  });
    
useEffect(() => {
  if (!parsedResume) return;

  setResumeData({
    personal: {
      fullName: parsedResume.personal?.fullName || "",
      title: "",
      email: parsedResume.personal?.email || "",
      phone: parsedResume.personal?.phone || "",
      location: "",
      summary: parsedResume.personal?.summary || "",
      aiSummarySuggestion: "",
    },

    experiences:
      parsedResume.experiences?.map((exp, index) => ({
        id: index + 1,
        company: exp.company || "",
        role: exp.role || "",
        location: "",
        employmentType: "",
        startDate: "",
        endDate: "",
        currentCompany: false,
        desc: exp.description || "",
      })) || [],

    educations:
      parsedResume.educations?.map((edu, index) => ({
        id: index + 1,
        school: edu.school || "",
        degree: edu.degree || "",
        fieldOfStudy: edu.fieldOfStudy || "",
        location: "",
        startDate: "",
        endDate: "",
        cgpa: "",
      })) || [],

    skills: parsedResume.skills || [],

    
    certifications:
    parsedResume.certifications?.map((cert, index) => ({
    id: index + 1,
    name: cert.name || "",
    issuer: cert.issuer || "",
    date: cert.date || "",
    link: cert.link || "",
  })) || [],
    // certifications:
    //   parsedResume.certifications?.map((cert, index) => ({
    //     id: index + 1,
    //     name: cert,
    //     issuer: "",
    //     date: "",
    //     link: "",
    //   })) || [],

    projects:
      parsedResume.projects?.map((project, index) => ({
        id: index + 1,
        title: project.title || "",
        description: project.description || "",
        startDate: "",
        endDate: "",
        link: "",
      })) || [],

    achievements: [],
    languages: [],
    activities: [],
  });
}, [parsedResume]);  
  


    
  const previewRef = useRef();
  

  const buildPayload = () => ({
  title: resumeData.personal.title || "My Resume",

  template: selectedTemplate,
  full_name: resumeData.personal.fullName,

  email: resumeData.personal.email,

  phone: resumeData.personal.phone,

  summary: resumeData.personal.summary,

  educations: resumeData.educations.map((edu) => ({
  school_name: edu.school,
  degree: edu.degree,
  field_of_study: edu.fieldOfStudy,

  cgpa: edu.cgpa,

  start_date: edu.startDate,
  end_date: edu.endDate,
  description: "",
})),  
  // educations: resumeData.educations.map((edu) => ({
  //   school_name: edu.school,
  //   degree: edu.degree,
  //   field_of_study: edu.fieldOfStudy,
  //   start_date: edu.startDate,
  //   end_date: edu.endDate,
  //   description: "",
  // })),

  
  experiences: resumeData.experiences
  .filter(
    (exp) =>
      exp.company?.trim() &&
      exp.role?.trim() &&
      exp.startDate
  )
  .map((exp) => ({
    company_name: exp.company,
    job_title: exp.role,

    location: exp.location,
    employment_type: exp.employmentType,

    start_date: exp.startDate,
    end_date: exp.endDate || null,

    currently_working: exp.currentCompany,

    description: exp.desc,
  })),
  
  // experiences: resumeData.experiences
  // .filter(
  //   (exp) =>
  //     exp.company?.trim() &&
  //     exp.role?.trim() &&
  //     exp.startDate
  // )
  // .map((exp) => ({
  //   company_name: exp.company,
  //   job_title: exp.role,
  //   start_date: exp.startDate,
  //   end_date: exp.endDate || null,
  //   currently_working: exp.currentCompany,
  //   description: exp.desc,
  // })),
  // experiences: resumeData.experiences.map((exp) => ({
  //   company_name: exp.company,
  //   job_title: exp.role,
  //   start_date: exp.startDate,
  //   end_date: exp.endDate,
  //   currently_working: exp.currentCompany,
  //   description: exp.desc,
  // })),

  skills: resumeData.skills.map((skill) => ({
    name: skill,
  })),

  
  projects: resumeData.projects
  .filter((proj) => proj.title?.trim())
  .map((proj) => ({
    title: proj.title,
    description: proj.description,

    start_date: proj.startDate || null,
    end_date: proj.endDate || null,

    // project_link: proj.link,
    // github_link: "",
  })),
  // projects: resumeData.projects
  // .filter((proj) => proj.title?.trim())
  // .map((proj) => ({
  //   title: proj.title,
  //   description: proj.description,
  //   // project_link: proj.link,
  //   // github_link: "",
  // })),
  // projects: resumeData.projects.map((proj) => ({
  //   title: proj.title,
  //   description: proj.description,
  //   project_link: proj.link,
  //   github_link: "",
  // })),

  certifications: resumeData.certifications
  .filter(
    (cert) =>
      cert.name?.trim() &&
      cert.issuer?.trim()
  )
  .map((cert) => ({
    name: cert.name,
    organization: cert.issuer,
    issue_date: cert.date || null,
    credential_url: cert.link,
  })),
  // certifications: resumeData.certifications.map((cert) => ({
  //   name: cert.name,
  //   organization: cert.issuer,
  //   issue_date: cert.date,
  //   credential_url: cert.link,
  // })),

  languages: resumeData.languages.map((lang) => ({
    name: lang,
    proficiency: "",
  })),

  achievements: resumeData.achievements.map((ach) => ({
    title: ach,
    description: "",
  })),
});

 const handleSaveResume = async () => {
  try {
    setSaving(true);

    const payload = buildPayload();
    console.log("PAYLOAD =>", payload); 

    if (resumeId) {
      await updateResume(resumeId, payload);

      alert("Resume Updated");
    } else {
      const res = await createResume(payload);

      setResumeId(res.data.id);

      alert("Resume Saved");
    }
  } catch (err) {
  console.log(JSON.stringify(err.response?.data, null, 2));

  alert(
    JSON.stringify(err.response?.data, null, 2)
  );
}
};
  


// Handlers
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setResumeData(prev => ({ ...prev, personal: { ...prev.personal, [name]: value } }));
  };
  const generateAISummary = () => {
  if (!resumeData.personal.summary.trim()) {
    alert("Please write profile summary first");
    return;
  }

  setResumeData((prev) => ({
    ...prev,
    personal: {
      ...prev.personal,
      aiSummarySuggestion:
        "Results-driven professional with proven expertise in delivering high-quality solutions, collaborating across teams, and driving measurable business outcomes. Skilled in problem-solving, communication, and continuous improvement."
    }
  }));
};

const useAISuggestion = () => {
  setResumeData((prev) => ({
    ...prev,
    personal: {
      ...prev.personal,
      summary: prev.personal.aiSummarySuggestion
    }
  }));
};
  
  const handleExperienceChange = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      experiences: prev.experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
    }));
  };
  const addExperience = () => {
    // const newExp = { id: Date.now(), company: "", role: "", duration: "", desc: "" };
    const newExp = {
  id: Date.now(),
  company: "",
  role: "",
  location: "",
  employmentType: "",
  startDate: "",
  endDate: "",
  currentCompany: false,
  desc: ""
};
    setResumeData(prev => ({ ...prev, experiences: [...prev.experiences, newExp] }));
  };
  const removeExperience = (id) => {
    setResumeData(prev => ({ ...prev, experiences: prev.experiences.filter(exp => exp.id !== id) }));
  };
  const handleEducationChange = (id, field, value) => {
    setResumeData(prev => ({
      ...prev,
      educations: prev.educations.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
    }));
  };
  const addEducation = () => {
    // const newEdu = { id: Date.now(), school: "", degree: "", duration: "" };
    const newEdu = {
  id: Date.now(),
  school: "",
  degree: "",
  fieldOfStudy: "",
  location: "",
  startDate: "",
  endDate: "",
  cgpa: ""
};
    setResumeData(prev => ({ ...prev, educations: [...prev.educations, newEdu] }));
  };
  const removeEducation = (id) => {
    setResumeData(prev => ({ ...prev, educations: prev.educations.filter(edu => edu.id !== id) }));
  };

  const [skillInput, setSkillInput] = useState('');
  const addSkill = (e) => {
    e.preventDefault();
    if (skillInput.trim() && !resumeData.skills.includes(skillInput.trim())) {
      setResumeData(prev => ({ ...prev, skills: [...prev.skills, skillInput.trim()] }));
      setSkillInput('');
    }
  };
  const removeSkill = (skillToRemove) => {
    setResumeData(prev => ({ ...prev, skills: prev.skills.filter(skill => skill !== skillToRemove) }));
  };

  const [achInput, setAchInput] = useState('');
  const addAchievement = (e) => {
    e.preventDefault();
    if (achInput.trim()) {
      setResumeData(prev => ({ ...prev, achievements: [...prev.achievements, achInput.trim()] }));
      setAchInput('');
    }
  };
  const removeAchievement = (index) => {
    setResumeData(prev => ({ ...prev, achievements: prev.achievements.filter((_, idx) => idx !== index) }));
  };

  const [langInput, setLangInput] = useState('');
  const addLanguage = (e) => {
    e.preventDefault();
    if (langInput.trim()) {
      setResumeData(prev => ({ ...prev, languages: [...prev.languages, langInput.trim()] }));
      setLangInput('');
    }
  };
  const removeLanguage = (index) => {
    setResumeData(prev => ({ ...prev, languages: prev.languages.filter((_, idx) => idx !== index) }));
  };

  const [actInput, setActInput] = useState('');
  const addActivity = (e) => {
    e.preventDefault();
    if (actInput.trim()) {
      setResumeData(prev => ({ ...prev, activities: [...prev.activities, actInput.trim()] }));
      setActInput('');
    }
  };
  const removeActivity = (index) => {
    setResumeData(prev => ({ ...prev, activities: prev.activities.filter((_, idx) => idx !== index) }));
  };
 const handleCertChange = (id, field, value) => {
  setResumeData(prev => ({
    ...prev,
    certifications: prev.certifications.map(cert =>
      cert.id === id
        ? {
            ...cert,
            [field]:
              field === "link" ? normalizeUrl(value) : value,
          }
        : cert
    )
  }));
};
  //   const handleCertChange = (id, field, value) => {
//   setResumeData(prev => ({
//     ...prev,
//     certifications: prev.certifications.map(cert =>
//       cert.id === id ? { ...cert, [field]: value } : cert
//     )
//   }));
// };
   
// const addCertification = () => {
//   setResumeData(prev => ({
//     ...prev,
//     certifications: [
//       ...prev.certifications,
//       { id: Date.now(), name: "", issuer: "", date: "", link: "" }
//     ]
//   }));
// };
const addCertification = (e) => {
  e.preventDefault();

  setResumeData(prev => ({
    ...prev,
    certifications: [
      ...prev.certifications,
      {
        id: Date.now(),
        name: "",
        issuer: "",
        date: "",
        link: ""
      }
    ]
  }));
};
const removeCertification = (id) => {
  setResumeData(prev => ({
    ...prev,
    certifications: prev.certifications.filter(c => c.id !== id)
  }));
};
const handleProjectChange = (id, field, value) => {
  setResumeData(prev => ({
    ...prev,
    projects: prev.projects.map(proj =>
      proj.id === id
        ? {
            ...proj,
            [field]:
              field === "link" ? normalizeUrl(value) : value,
          }
        : proj
    )
  }));
};
//   const handleProjectChange = (id, field, value) => {
//   setResumeData(prev => ({
//     ...prev,
//     projects: prev.projects.map(proj =>
//       proj.id === id ? { ...proj, [field]: value } : proj
//     )
//   }));
// };

// const addProject = () => {
//   setResumeData(prev => ({
//     ...prev,
//     projects: [
//       ...prev.projects,
//       {
//         id: Date.now(),
//         title: "",
//         description: "",
//         startDate: "",
//         endDate: "",
//         link: ""
//       }
//     ]
//   }));
// };
const addProject = () => {
  setResumeData(prev => ({
    ...prev,
    projects: [
      ...prev.projects,
      {
        id: Date.now(),
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        link: ""
      }
    ]
  }));
};

const removeProject = (id) => {
  setResumeData(prev => ({
    ...prev,
    projects: prev.projects.filter(p => p.id !== id)
  }));
};




  

// const downloadPDF = () => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     navigate("/login");   // or open modal
//     return;
//   }

//   // actual download logic
//   const printContent = previewRef.current.innerHTML;
//   document.body.innerHTML = `
//     <html>
//       <head>...</head>
//       <body>${printContent}</body>
//     </html>
//   `;

//   window.print();
//   window.location.reload();
// };
const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await API.post("/accounts/login/", {
      username,
      password,
    });

    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);

    setShowAuthModal(false);

    alert("Login Successful");

    setTimeout(() => {
      downloadPDF();
    }, 300);

  } catch (err) {
    console.error(err);
    alert("Login Failed");
  }
};

const handleRegister = async (e) => {
  e.preventDefault();

  try {
    await API.post("/accounts/register/", {
      username,
      email,
      phone,
      password,
      confirm_password: confirmPassword,
    });

    alert("Account Created");

    setIsLogin(true);

  } catch (err) {
    console.error(err);
    alert("Registration Failed");
  }
};
const handleGoogleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);

    const res = await API.post("/accounts/google-login/", {
      email: result.user.email,
      name: result.user.displayName,
    });

    localStorage.setItem("token", res.data.access);
    localStorage.setItem("refresh", res.data.refresh);
    localStorage.setItem("name", result.user.displayName);

    setShowAuthModal(false);

    alert(`Welcome ${result.user.displayName}`);

    setTimeout(() => {
      downloadPDF();
    }, 300);

  } catch (error) {
    console.error(error);
    alert("Google Login Failed");
  }
};


// const downloadPDF = () => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     setShowAuthModal(true);
//     return;
//   }

//   const printContent = previewRef.current.innerHTML;

//   document.body.innerHTML = `
//     <html>
//       <body>
//         ${printContent}
//       </body>
//     </html>
//   `;

//   window.print();
//   window.location.reload();
// };
const downloadPDF = async () => {
  console.log("REF =>", previewRef.current);

  const token = localStorage.getItem("token");

  if (!token) {
    setShowAuthModal(true);
    return;
  }

  setDownloading(true);

  try {
    let currentResumeId = resumeId;

    const payload = buildPayload();

    if (!currentResumeId) {
      const res = await createResume(payload);

      currentResumeId = res.data.id;

      setResumeId(currentResumeId);
    } else {
      await updateResume(currentResumeId, payload);
    }

    const response = await downloadResume(currentResumeId);

    const url = window.URL.createObjectURL(
      new Blob([response.data])
    );

    const link = document.createElement("a");

    link.href = url;

    link.setAttribute(
      "download",
      `${resumeData.personal.fullName || "resume"}.pdf`
    );

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);

  } catch (err) {
    console.error(err);
    alert("PDF Download Failed");
  } finally {
    setDownloading(false);
  }
};
// const downloadPDF = async () => {
//  console.log("REF =>", previewRef.current);
//   const token = localStorage.getItem("token");

//   if (!token) {
//     setShowAuthModal(true);
//     return;
//   }
  
//   setDownloading(true);
//   try {let currentResumeId = resumeId;

// const payload = buildPayload();

// if (!currentResumeId) {
//   const res = await createResume(payload);

//   currentResumeId = res.data.id;

//   setResumeId(currentResumeId);
// } else {
//   await updateResume(currentResumeId, payload);
// }
//     // if (!resumeId) {
//     //   alert("Please save resume first");
//     //   return;
//     // }

//     // const response = await downloadResume(resumeId);
//    const response = await downloadResume(currentResumeId);
//     const url = window.URL.createObjectURL(
//       new Blob([response.data])
//     );

//     const link = document.createElement("a");

//     link.href = url;

//     link.setAttribute(
//       "download",
//       `${resumeData.personal.fullName || "resume"}.pdf`
//     );

//     document.body.appendChild(link);

//     link.click();

//     link.remove();

//     window.URL.revokeObjectURL(url);

//   } catch (err) {
//     console.error(err);
//     alert("PDF Download Failed");
//   }
//   finally {
//   setDownloading(false);
// }

// };

// const downloadPDF = () => {
  //   const printContent = previewRef.current.innerHTML;
  //   document.body.innerHTML = `
  //     <html>
  //       <head>
  //         <title>Resume_${resumeData.personal.fullName.replace(/\s+/g, '_')}</title>
  //         <link rel="preconnect" href="https://fonts.googleapis.com">
  //         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  //         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Lora:ital,wght@0,400;0,700;1,400&family=Merriweather:wght@400;700&family=Plus+Jakarta+Sans:wght@400;600;800&display=swap" rel="stylesheet">
  //         <style>
  //           @media print {
  //             body { margin: 0; padding: 0; background: white; -webkit-print-color-adjust: exact; }
  //             .no-print { display: none; }
  //           }
  //         </style>
  //       </head>
  //       <body style="padding: 20px;">
  //         ${printContent}
  //       </body>
  //     </html>
  //   `;
  //   window.print();
  //   window.location.reload(); 
  // };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-['Plus_Jakarta_Sans']">
      
      {/* Premium Dynamic Header */}
      <header className="bg-white border-b border-slate-200 px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 sticky top-0 z-50">
        
        {/* Back Button & Logo Group */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack} // Back to Home Trigger!
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-all text-xs font-bold"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </button>
          
          <div className="h-px bg-slate-200 w-4 hidden md:block"></div>
          
          <div className="flex items-center gap-2">
  <img
    src={logoHR09}
    alt="MyHRWA Logo"
    className="h-16 w-auto object-contain"
  />

  {/* <span className="font-extrabold text-sm text-slate-900">
    MyHRWA
    <span className="text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-50">
      Builder
    </span>
  </span> */}
</div>
          {/* <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-base">M</div>
            <span className="font-extrabold text-sm text-slate-900">MyHRWA <span className="text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-blue-50">Builder</span></span>
          </div> */}
        </div>

        {/* Templates Selector Dropdown */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col">
            <label className="text-[9px] font-bold text-slate-400 uppercase mb-0.5">Active Template Layout</label>
            <select 
              value={selectedTemplate} 
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="px-4 py-2 bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              {templatePresets.map((preset) => (
                <option key={preset.id} value={preset.id}>{preset.name}</option>
              ))}
            </select>
          </div>

          {/* <button
  onClick={handleSaveResume}
  className="px-6 py-2.5 bg-green-600 text-white rounded-xl"
>
  {saving ? "Saving..." : "Save Resume"}
</button> */}
          {/* <button 
            onClick={downloadPDF}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-500/15"
          >
            Download PDF
          </button> */}
          <button
  onClick={downloadPDF}
  disabled={downloading}
  className={`px-6 py-2.5 text-white text-xs font-bold rounded-xl transition-all shadow-md
    ${
      downloading
        ? "bg-blue-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/15"
    }`}
>
  {downloading ? "Preparing PDF..." : "Download PDF"}
</button>
        </div>
      </header>

      {/* Workspace Area */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        
        {/* Forms Panel */}
        <div className="lg:col-span-5 bg-white border-r border-slate-200 flex flex-col h-[calc(100vh-73px)]">
         {/* <div className="lg:col-span-5 bg-white border-r border-slate-200 flex flex-col overflow-y-auto max-h-[calc(100vh-73px)]"> */}
          {/* <div className="lg:col-span-4 bg-white border-r border-slate-200 flex flex-col overflow-y-auto max-h-[calc(100vh-73px)] pr-2"> */}
          {/* <div className="flex border-b border-slate-100 sticky top-0 bg-white z-10 px-4 pt-3 overflow-x-auto gap-2">
            {[
              { id: 'personal', name: 'Personal' },
              { id: 'experience', name: 'Experience' },
              { id: 'education', name: 'Education' },
              { id: 'skills', name: 'Skills' },
              { id: 'extra', name: 'Extra Sections' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 px-2 text-xs font-bold uppercase tracking-wider border-b-2 whitespace-nowrap transition-colors ${activeTab === tab.id ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-400 hover:text-slate-600'}`}
              >
                {tab.name}
              </button>
            ))}
          // </div>  */}
          <ResumeTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

<div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* <ResumeTabs activeTab={activeTab} setActiveTab={setActiveTab}/>

          <div className="p-4 space-y-4"> */}
            {/* {activeTab === 'personal' && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">Personal Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
                    <input type="text" name="fullName" value={resumeData.personal.fullName} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Title</label>
                    <input type="text" name="title" value={resumeData.personal.title} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Email</label>
                    <input type="email" name="email" value={resumeData.personal.email} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-400 uppercase">Phone</label>
                    <input type="text" name="phone" value={resumeData.personal.phone} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Location</label>
                  <input type="text" name="location" value={resumeData.personal.location} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Profile Summary</label>
                  <textarea name="summary" rows={5} value={resumeData.personal.summary} onChange={handlePersonalChange} className="w-full px-4 py-2 border border-slate-200 rounded-xl text-sm font-medium leading-relaxed" />
                </div>
              </div>
            )} */}
          {activeTab === 'personal' && (
  <PersonalForm resumeData={resumeData}handlePersonalChange={handlePersonalChange}/>)}     
            
            {/* EXPERIENCE TAB */}
            {/* {activeTab === 'experience' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">Experience</h3>
                  <button onClick={addExperience} className="text-xs font-bold text-blue-600 hover:underline">+ Add Entry</button>
                </div>
                {resumeData.experiences.map((exp, index) => (
                  <div key={exp.id} className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-4 relative">
                    <button onClick={() => removeExperience(exp.id)} className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:underline">Delete</button>
                    <div className="text-[10px] font-black text-slate-400">Position #{index+1}</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Company</label>
                        <input type="text" value={exp.company} onChange={(e) => handleExperienceChange(exp.id, 'company', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Role</label>
                        <input type="text" value={exp.role} onChange={(e) => handleExperienceChange(exp.id, 'role', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Duration</label>
                      <input type="text" value={exp.duration} onChange={(e) => handleExperienceChange(exp.id, 'duration', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Responsibilities (One bullet per line)</label>
                      <textarea rows={4} value={exp.desc} onChange={(e) => handleExperienceChange(exp.id, 'desc', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium" />
                    </div>
                  </div>
                ))}
              </div>
            )} */}
            {activeTab === 'experience' && (
             <ExperienceForm resumeData={resumeData}addExperience={addExperience}removeExperience={removeExperience}handleExperienceChange={handleExperienceChange}/>)}

            {/* EDUCATION TAB */}
            {/* {activeTab === 'education' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">Education</h3>
                  <button onClick={addEducation} className="text-xs font-bold text-blue-600 hover:underline">+ Add Entry</button>
                </div>
                {resumeData.educations.map((edu, index) => (
                  <div key={edu.id} className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-4 relative">
                    <button onClick={() => removeEducation(edu.id)} className="absolute top-4 right-4 text-xs font-bold text-red-500 hover:underline">Delete</button>
                    <div className="text-[10px] font-black text-slate-400">Education #{index+1}</div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">School / University</label>
                        <input type="text" value={edu.school} onChange={(e) => handleEducationChange(edu.id, 'school', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Degree</label>
                        <input type="text" value={edu.degree} onChange={(e) => handleEducationChange(edu.id, 'degree', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Duration</label>
                      <input type="text" value={edu.duration} onChange={(e) => handleEducationChange(edu.id, 'duration', e.target.value)} className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold" />
                    </div>
                  </div>
                ))}
              </div>
            )} */}
            {activeTab === 'education' && (
              <EducationForm resumeData={resumeData}addEducation={addEducation}removeEducation={removeEducation}handleEducationChange={handleEducationChange}/>)}

            {/* SKILLS TAB */}
            {/* {activeTab === 'skills' && (
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-slate-900 border-l-4 border-blue-600 pl-2">Technical Skills</h3>
                <form onSubmit={addSkill} className="flex gap-2">
                  <input type="text" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} placeholder="Add skill (e.g. Node.js)" className="flex-1 px-4 py-2 border border-slate-200 rounded-xl text-sm font-semibold" />
                  <button type="submit" className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-xl">Add</button>
                </form>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      {skill}
                      <button type="button" onClick={() => removeSkill(skill)} className="text-[10px] text-red-500 font-bold ml-1">✕</button>
                    </span>
                  ))}
                </div>
              </div>
            )} */}
            {activeTab === 'certifications' && (
  <CertificationForm
    resumeData={resumeData}
    addCertification={addCertification}
    removeCertification={removeCertification}
    handleCertChange={handleCertChange}
  />
)}

{activeTab === 'projects' && (
  <ProjectForm
    resumeData={resumeData}
    addProject={addProject}
    removeProject={removeProject}
    handleProjectChange={handleProjectChange}
  />
)}





            {activeTab === 'skills' && (
              <SkillsForm resumeData={resumeData}skillInput={skillInput}setSkillInput={setSkillInput}addSkill={addSkill}removeSkill={removeSkill}/>)}

            {/* EXTRA SECTIONS */}
            {/* {activeTab === 'extra' && (
              <div className="space-y-8">
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 border-l-2 border-indigo-600 pl-2 uppercase">Achievements</h4>
                  <form onSubmit={addAchievement} className="flex gap-2">
                    <input type="text" value={achInput} onChange={(e) => setAchInput(e.target.value)} placeholder="e.g. Won Hackathon" className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-xs" />
                    <button type="submit" className="px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg">Add</button>
                  </form>
                  <div className="space-y-1">
                    {resumeData.achievements.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="font-medium text-slate-700">{item}</span>
                        <button onClick={() => removeAchievement(idx)} className="text-[10px] text-red-500 font-bold">✕</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 border-l-2 border-indigo-600 pl-2 uppercase">Languages</h4>
                  <form onSubmit={addLanguage} className="flex gap-2">
                    <input type="text" value={langInput} onChange={(e) => setLangInput(e.target.value)} placeholder="e.g. French (Fluent)" className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-xs" />
                    <button type="submit" className="px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg">Add</button>
                  </form>
                  <div className="space-y-1">
                    {resumeData.languages.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="font-medium text-slate-700">{item}</span>
                        <button onClick={() => removeLanguage(idx)} className="text-[10px] text-red-500 font-bold">✕</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 border-l-2 border-indigo-600 pl-2 uppercase">Activities & Interests</h4>
                  <form onSubmit={addActivity} className="flex gap-2">
                    <input type="text" value={actInput} onChange={(e) => setActInput(e.target.value)} placeholder="e.g. Technical Writing" className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-xs" />
                    <button type="submit" className="px-3 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg">Add</button>
                  </form>
                  <div className="space-y-1">
                    {resumeData.activities.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-xs p-2 bg-slate-50 border border-slate-200 rounded-lg">
                        <span className="font-medium text-slate-700">{item}</span>
                        <button onClick={() => removeActivity(idx)} className="text-[10px] text-red-500 font-bold">✕</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )} */}
          {activeTab === 'extra' && (
  <ExtraForm
    resumeData={resumeData}
    achInput={achInput}
    setAchInput={setAchInput}
    addAchievement={addAchievement}
    removeAchievement={removeAchievement}
    langInput={langInput}
    setLangInput={setLangInput}
    addLanguage={addLanguage}
    removeLanguage={removeLanguage}
    actInput={actInput}
    setActInput={setActInput}
    addActivity={addActivity}
    removeActivity={removeActivity} />)}   
          </div>
        </div>

        {/* Live Preview Panel */}
        {/* <div className="lg:col-span-7 bg-slate-100 flex justify-center p-8 overflow-y-auto max-h-[calc(100vh-73px)]"> */}
       {/* <div className="hidden lg:flex lg:col-span-7 bg-slate-100 justify-center p-8"></div> */}
        {/* Mobile Preview Message */}
<div className="lg:hidden flex flex-col items-center justify-center p-6 text-center bg-slate-100 min-h-[400px]">
  <h3 className="text-xl font-bold text-slate-800">
    Resume Preview is Optimized for Desktop
  </h3>

  <p className="text-sm text-slate-500 mt-3">
    Download your resume as PDF or switch to a desktop device for a full preview experience.
  </p>

  {/* <button
    onClick={downloadPDF}
    className="mt-5 px-5 py-3 bg-blue-600 text-white rounded-lg font-semibold"
  >
    Download PDF
  </button> */}
</div>
        {/* <div className="hidden lg:flex lg:col-span-7 bg-slate-100 justify-center p-8 overflow-y-auto max-h-[calc(100vh-73px)]"> */}
        <div className="hidden lg:flex lg:col-span-7 bg-slate-100 justify-center p-8">
          {/* <div ref={previewRef} style={{ fontFamily: activeFont }} className="w-full max-w-[21cm] min-h-[29.7cm] bg-white shadow-xl p-12 flex flex-col justify-between rounded-lg transition-all duration-300"> */}
           <div ref={previewRef}>
               {renderTemplate()} 
            {/* 1. MODERN LAYOUT
            {layout === 'modern' && (
              <div className="grid grid-cols-12 gap-8 text-slate-800 h-full"> */}
                
                {/* Left Side Column */}
                {/* <div className="col-span-4 border-r border-slate-100 pr-6 space-y-6 flex flex-col">
                  <div className="h-16 w-16 rounded-full flex items-center justify-center text-white text-xl font-black shadow-inner" style={{ backgroundColor: themeColor }}>
                    {resumeData.personal.fullName ? resumeData.personal.fullName.charAt(0) : 'U'}
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400">Contact</h4>
                    <div className="space-y-2 text-[10px] font-semibold text-slate-600">
                      {resumeData.personal.email && <div className="truncate">✉ {resumeData.personal.email}</div>}
                      {resumeData.personal.phone && <div>📞 {resumeData.personal.phone}</div>}
                      {resumeData.personal.location && <div>📍 {resumeData.personal.location}</div>}
                    </div>
                  </div>

                  {resumeData.skills.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400">Core Skills</h4>
                      <div className="flex flex-col gap-1.5">
                        {resumeData.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[10px] font-bold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: themeColor }} />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {resumeData.languages.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-400">Languages</h4>
                      <div className="space-y-1.5">
                        {resumeData.languages.map((lang, idx) => (
                          <div key={idx} className="text-[10px] font-semibold text-slate-600 bg-slate-50 p-1.5 rounded border border-slate-100">
                            ✓ {lang.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div> */}

                {/* Right Side Column */}
                {/* <div className="col-span-8 space-y-6 flex flex-col justify-between h-full"> */}
                  {/* <div className="space-y-6"> */}
                    {/* <div> */}
                      {/* <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none mb-1">{resumeData.personal.fullName || "Your Full Name"}</h1>
                      <p className="text-xs font-bold uppercase tracking-widest" style={{ color: themeColor }}>{resumeData.personal.title || "Your Profession"}</p>
                    </div> */}

                    {/* {resumeData.personal.summary && (
                      <div className="space-y-2">
                        <h3 className="text-[11px] font-black uppercase tracking-wider border-b pb-1 border-slate-100" style={{ color: themeColor }}>Profile Summary</h3>
                        <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{resumeData.personal.summary}</p>
                      </div>
                    )} */}

                    {/* {resumeData.experiences.length > 0 && ( */}
                      {/* <div className="space-y-3"> */}
                        {/* <h3 className="text-[11px] font-black uppercase tracking-wider border-b pb-1 border-slate-100" style={{ color: themeColor }}>Experience</h3>
                        <div className="space-y-3"> */}
                          {/* {resumeData.experiences.map((exp) => ( */}
                            {/* <div key={exp.id} className="space-y-1">
                              <div className="flex justify-between items-center text-[11px]">
                                <span className="font-extrabold text-slate-900">{exp.role || "Role"} at <span className="italic">{exp.company || "Company"}</span></span> */}
                                {/* <span className="text-[9px] font-bold text-slate-400">{exp.duration || "Duration"}</span> */}
                                {/* <span className="text-[9px] font-bold text-slate-400">{exp.currentCompany? `${exp.startDate} - Present`: `${exp.startDate} - ${exp.endDate}`}</span>
                              </div>
                              <p className="text-[10px] text-slate-500 whitespace-pre-line leading-relaxed font-medium pl-1">{exp.desc || "Responsibility details..."}</p>
                            </div>
                          ))} */}
                        {/* </div>
                      </div>
                    )} */}

                    {/* {resumeData.educations.length > 0 && (
  <div className="space-y-3">
    <h3
      className="text-[11px] font-black uppercase tracking-wider border-b pb-1 border-slate-100"
      style={{ color: themeColor }}
    >
      Education
    </h3> */}

    {/* <div className="space-y-2">
      {resumeData.educations.map((edu) => (
        <div key={edu.id} className="flex justify-between items-start text-[11px]">

          <div>
            <span className="font-extrabold text-slate-900">
              {edu.degree || "Degree Name"}
            </span> */}

            {/* <p className="text-[10px] text-slate-500 font-semibold">
              {edu.school || "School / University"}
            </p> */}
{/* 
            {edu.fieldOfStudy && (
              <p className="text-[9px] text-slate-500">
                {edu.fieldOfStudy}
              </p>
            )} */}

            {/* {edu.location && (
              <p className="text-[9px] text-slate-500">
                📍 {edu.location}
              </p>
            )} */}

            {/* {edu.cgpa && (
              <p className="text-[9px] font-semibold text-slate-600">
                CGPA / Score: {edu.cgpa} */}
              {/* </p>
            )} */}
          {/* </div>

          <span className="text-[9px] font-bold text-slate-400">
            {edu.startDate
              ? `${edu.startDate} - ${edu.endDate || "Present"}`
              : "Duration"}
          </span>

        </div> */}
      {/* ))}
    </div>
  </div> */}
{/* )}
 {resumeData.certifications.length > 0 && (
  <div className="space-y-2">
    <h3 className="text-[11px] font-black uppercase" style={{ color: themeColor }}>
      Certifications
    </h3> */}

    {/* {resumeData.certifications.map(cert => (
      <div key={cert.id} className="text-[10px]">
        <div className="font-bold text-slate-900">
          {cert.name || "Certification Name"}
        </div> */}
        {/* <div className="text-slate-500"> */}
         {/* {cert.organization} • {cert.issue_date} */}
          {/* {cert.issuer} • {cert.date} */}
        {/* </div> */}
        {/* {cert.link && (
          <a className="text-blue-600" href={cert.link} target="_blank">
            View Certificate
          </a> */}
        {/* )}
      </div>
    ))}
  </div>
)} */}
{/* {resumeData.projects.length > 0 && (
  <div className="space-y-2">
    <h3 className="text-[11px] font-black uppercase" style={{ color: themeColor }}>
      Projects
    </h3> */}

    {/* {resumeData.projects.map(proj => (
      <div key={proj.id} className="text-[10px]">
        <div className="font-bold text-slate-900">
          {proj.title || "Project Title"}
        </div> */}

        {/* <div className="text-slate-600 whitespace-pre-line">
          {proj.description}
        </div>

        <div className="text-slate-400">
          {proj.startDate} - {proj.endDate || "Present"}
        </div> */}

        {/* {proj.link && (
          <a className="text-blue-600" href={proj.link} target="_blank">
            Live / GitHub
          </a>
        )}
      </div>
    ))}
  </div>
)}                 */}
                    {/* {resumeData.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-[11px] font-black uppercase tracking-wider border-b pb-1 border-slate-100" style={{ color: themeColor }}>Achievements</h3>
                        <ul className="list-disc list-inside text-[10px] text-slate-600 font-semibold space-y-1 pl-1">
                          {resumeData.achievements.map((item, idx) => (
                            // <li key={idx}>{item}</li>
                            <li key={idx}>{item.title}</li>
                          ))}
                        </ul>
                      </div>
                    )} */}

                    {/* {resumeData.activities.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-[11px] font-black uppercase tracking-wider border-b pb-1 border-slate-100" style={{ color: themeColor }}>Activities & Interests</h3>
                        <div className="flex flex-wrap gap-1.5 pl-1">
                          {resumeData.activities.map((item, idx) => (
                            <span key={idx} className="bg-slate-50 border border-slate-100 rounded px-2.5 py-1 text-[9px] font-bold text-slate-500">★ {item}</span>
                          ))}
                        </div>
                      </div> */}
                    {/* )}
                  </div>

                  <div className="text-center border-t border-slate-100 pt-6 mt-12">
                    <p className="text-[9px] text-slate-400 font-bold tracking-wider uppercase">Generated via MyHRWA Premium</p>
                  </div>
                </div>

              </div>
            )} */}

            {/* 2. CLASSIC LAYOUT */}
            {/* {layout === 'classic' && (
              <div className="flex flex-col justify-between h-full text-slate-800 space-y-6"> */}
                
                {/* <div className="space-y-6">
                  <div className={`border-b pb-6 space-y-1.5 ${headerStyle === 'centered' ? 'text-center' : 'text-left'}`} style={{ borderColor: themeColor }}>
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight uppercase leading-none">{resumeData.personal.fullName || "Your Full Name"}</h1>
                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: themeColor }}>{resumeData.personal.title || "Your Profession"}</p> */}
                    
                    {/* <div className={`flex flex-wrap gap-4 text-[10px] font-bold text-slate-500 ${headerStyle === 'centered' ? 'justify-center' : 'justify-start'}`}>
                      {resumeData.personal.email && <span>✉ {resumeData.personal.email}</span>}
                      {resumeData.personal.phone && <span>📞 {resumeData.personal.phone}</span>}
                      {resumeData.personal.location && <span>📍 {resumeData.personal.location}</span>}
                    </div>
                  </div> */}

                  {/* {resumeData.personal.summary && (
                    <div className="space-y-2">
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 border-b pb-1 border-slate-100">Professional Summary</h3>
                      <p className="text-[10px] text-slate-600 leading-relaxed font-semibold">{resumeData.personal.summary}</p>
                    </div>
                  )} */}

                  {/* {resumeData.experiences.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 border-b pb-1 border-slate-100">Employment History</h3>
                      <div className="space-y-4">
                        {resumeData.experiences.map((exp) => (
                          <div key={exp.id} className="space-y-1">
                            <div className="flex justify-between items-center text-[10px]">
                              <span className="font-extrabold text-slate-900">{exp.role || "Role"} — <span className="italic">{exp.company || "Company"}</span></span>
                              <span className="font-semibold text-slate-400">{exp.duration || "Duration"}</span>
                            </div>
                            <p className="text-[10px] text-slate-600 whitespace-pre-line leading-relaxed font-medium pl-1">{exp.desc || "Responsibility details..."}</p>
                          </div>
                        ))} */}
                      {/* </div>
                    </div>
                  )} */}

                  {/* {resumeData.educations.length > 0 && (
                    <div className="space-y-3">
                      <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 border-b pb-1 border-slate-100">Education Background</h3>
                      <div className="space-y-2">
                        {resumeData.educations.map((edu) => (
                          <div key={edu.id} className="flex justify-between items-center text-[10px]">
                            <div>
                              <span className="font-extrabold text-slate-900">{edu.degree || "Degree Name"}</span>, <span className="text-slate-500 font-semibold">{edu.school || "School"}</span>
                            </div>
                            <span className="font-semibold text-slate-400">{edu.duration || "Duration"}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )} */}

                  {/* <div className="grid grid-cols-2 gap-8">
                    {resumeData.skills.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 border-b pb-1 border-slate-100">Technical Skills</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {resumeData.skills.map((skill, idx) => (
                            <span key={idx} className="bg-slate-50 border border-slate-100 rounded px-2 py-0.5 text-[9px] font-bold text-slate-600">{skill}</span>
                          ))}
                        </div>
                      </div>
                    )} */}

                    {/* {resumeData.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 border-b pb-1 border-slate-100">Achievements</h3>
                        <ul className="list-disc list-inside text-[9px] text-slate-600 font-semibold space-y-1">
                          {resumeData.achievements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div> */}

                  {/* <div className="grid grid-cols-2 gap-8 pt-2">
                    {resumeData.languages.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 border-b pb-1 border-slate-100">Languages</h3>
                        <div className="flex flex-wrap gap-2">
                          {resumeData.languages.map((lang, idx) => (
                            <span key={idx} className="text-[9px] font-bold text-slate-600 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded">✓ {lang}</span>
                          ))}
                        </div>
                      </div>
                    )} */}

                    {/* {resumeData.activities.length > 0 && (
                      <div className="space-y-2">
                        <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900 border-b pb-1 border-slate-100">Activities</h3>
                        <ul className="list-disc list-inside text-[9px] text-slate-600 font-semibold space-y-1">
                          {resumeData.activities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div> */}

                {/* </div>

                <div className="text-center border-t border-slate-100 pt-6 mt-12">
                  <p className="text-[9px] text-slate-400 font-bold tracking-wider uppercase">Generated via MyHRWA Premium</p>
                </div>

              </div>
            )} */}
           
          </div>
        </div>

      </div>
  {showAuthModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
    <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">

      {/* <h2 className="text-2xl font-bold mb-4">
        {isLogin ? "Login" : "Create Account"}
      </h2> */}

      <h2 className="text-2xl font-bold mb-4">
  {isLogin ? "Login" : "Create Account"}
</h2>

<button
  onClick={handleGoogleLogin}
  type="button"
  className="w-full border border-slate-300 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-slate-50"
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    className="w-5 h-5"
  />
  Continue with Google
</button>

<div className="relative my-4">
  <div className="absolute inset-0 flex items-center">
    <div className="w-full border-t"></div>
  </div>

  <div className="relative flex justify-center text-sm">
    <span className="bg-white px-3 text-slate-500">
      OR
    </span>
  </div>
</div>

<form
  onSubmit={isLogin ? handleLogin : handleRegister}
  className="space-y-4"
></form>
      <form
        onSubmit={isLogin ? handleLogin : handleRegister}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-lg p-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {!isLogin && (
          <>
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full border rounded-lg p-3"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </>
        )}

        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded-lg p-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border rounded-lg p-3"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          {isLogin ? "Login" : "Register"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-600 font-medium"
        >
          {isLogin
            ? "Create New Account"
            : "Already Have Account?"}
        </button>
      </div>

      <button
        onClick={() => setShowAuthModal(false)}
        className="mt-4 w-full border py-2 rounded-lg"
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
}