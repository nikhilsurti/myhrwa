// import React from "react";

// export default function Template13({ data }) {

//   const {
//     personal = {},
//     experiences = [],
//     skills = [],
//   } = data;

//   return (
//     <div className="bg-black text-white max-w-[21cm] min-h-[29.7cm] mx-auto p-10">

//       <h1 className="text-4xl font-light">
//         {personal.fullName}
//       </h1>

//       <div className="h-[2px] bg-white my-6" />

//       <p>{personal.summary}</p>

//       <div className="mt-8">
//         <h2 className="uppercase font-bold mb-3">
//           Experience
//         </h2>

//         {experiences.map((exp) => (
//           <div key={exp.id} className="mb-3">
//             <strong>{exp.role}</strong>
//             <p>{exp.company}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8">
//         <h2 className="uppercase font-bold mb-3">
//           Skills
//         </h2>

//         <p>{skills.join(" • ")}</p>
//       </div>

//     </div>
//   );
// }


import React from "react";

export default function Template13({ data }) {

  const {
    personal = {},
    experiences = [],
    educations = [],
    skills = [],
    projects = [],
    certifications = [],
    achievements = [],
    languages = [],
  } = data;

  return (
    <div className="bg-black text-white max-w-[21cm] min-h-[29.7cm] mx-auto p-10">

      {/* Header */}
      <h1 className="text-4xl font-light">
        {personal.fullName || "Your Name"}
      </h1>

      <p className="text-sm text-gray-400 mt-1">
        {personal.email} {personal.phone && `| ${personal.phone}`}
      </p>

      <div className="h-[2px] bg-white my-6" />

      {/* Summary */}
      {personal.summary && (
        <section>
          <p className="text-sm text-gray-300 leading-relaxed">
            {personal.summary}
          </p>
        </section>
      )}

      {/* Experience */}
      
      
       {experiences.length > 0 && (
        <div className="mt-8">
          <h2 className="uppercase font-bold mb-3">
            Experience
          </h2>
        
        {experiences.map((exp) => (
        <div key={exp.id} className="mb-4">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              {exp.role}
            </h3>

            <span className="text-sm">
              {exp.currentCompany
                ? `${exp.startDate} - Present`
                : `${exp.startDate} - ${exp.endDate}`}
            </span>
          </div>

          <p className="font-medium text-sm">
            {exp.company}
          </p>
         {exp.location && (
  <p className="text-xs text-gray-500">
    📍 {exp.location}
  </p>
)}

{exp.employmentType && (
  <p className="text-xs text-gray-500">
    {exp.employmentType}
  </p>
)}
          <p className="text-sm whitespace-pre-line mt-1">
            {exp.desc}
          </p>
        </div>
      ))}
        {/* {experiences.map((exp) => (
  <div key={exp.id} className="mb-4">
    <strong>{exp.role}</strong>

    <p className="text-gray-400 text-sm">
      {exp.company}
    </p>

    <p className="text-xs text-gray-500">
      {exp.currentCompany
        ? `${exp.startDate} - Present`
        : `${exp.startDate} - ${exp.endDate}`}
    </p>

    <p className="text-sm text-gray-300 mt-1">
      {exp.desc}
    </p>
  </div>
))} */}
          
        </div>
      )} 

      {/* Education */}
      {educations.length > 0 && (
        <div className="mt-8">
          <h2 className="uppercase font-bold mb-3">
            Education
          </h2>
          {educations.map((edu) => (
        <div key={edu.id} className="mb-3">
          <div className="flex justify-between">
            <h3 className="font-semibold">
              {edu.degree}
            </h3>

            <span className="text-sm">
              {edu.startDate} - {edu.endDate}
            </span>
          </div>

          <p className="text-sm">
            {edu.school}
          </p>

          {edu.cgpa && (
            <p className="text-sm">
              CGPA: {edu.cgpa}
            </p>
          )}
        </div>
      ))}
          {/* {educations.map((edu) => (
            <div key={edu.id} className="mb-3">
              <strong>{edu.degree}</strong>
              <p className="text-sm text-gray-400">
                {edu.school}
              </p>
              <p className="text-xs text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))} */}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mt-8">
          <h2 className="uppercase font-bold mb-3">
            Skills
          </h2>

          <p className="text-sm text-gray-300">
            {skills.join(" • ")}
          </p>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mt-8">
          <h2 className="uppercase font-bold mb-3">
            Projects
          </h2>

          {projects.map((project) => (
            <div key={project.id} className="mb-4">
              <strong>{project.title}</strong>
              <p className="text-sm text-gray-300">
                {project.description}
              </p>
            {(project.startDate || project.endDate) && (
  <p className="text-xs text-gray-500">
    {project.startDate}
    {project.endDate && ` - ${project.endDate}`}
  </p>
)}
            </div>
          ))}
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mt-8">
          <h2 className="uppercase font-bold mb-3">
            Certifications
          </h2>
          {certifications.map((cert) => (
  <div key={cert.id} className="mb-2">

    <p className="text-sm font-medium">
      {cert.name}
    </p>

    {cert.issuer && (
      <p className="text-xs text-gray-600">
        {cert.issuer}
      </p>
    )}

    {cert.date && (
      <p className="text-xs text-gray-500">
        {cert.date}
      </p>
    )}

    {cert.link && (
      <p className="text-xs break-all text-blue-600">
        {cert.link}
      </p>
    )}

  </div>
))}
          {/* {certifications.map((cert) => (
            <p key={cert.id} className="text-sm text-gray-300">
              • {cert.name}
            </p>
          ))} */}
        </div>
      )}

      
       {/* LANGUAGES */}
{languages.length > 0 && (
  <div className="mt-8">
    <h2 className="uppercase font-bold mb-3">
      Languages
    </h2>

    <div className="flex flex-wrap gap-2">
      {languages.map((lang, index) => (
        <span key={index} className="text-sm">
          {typeof lang === "string" ? lang : lang.name}
        </span>
      ))}
    </div>
  </div>
)}

{/* ACHIEVEMENTS */}
{achievements.length > 0 && (
  <div className="mt-8">
    <h2 className="uppercase font-bold mb-3">
      Achievements
    </h2>

    <ul className="list-disc pl-5">
      {achievements.map((item, index) => (
        <li key={index} className="text-sm">
          {typeof item === "string" ? item : item.title}
        </li>
      ))}
    </ul>
  </div>
)}
    </div>
  );
}