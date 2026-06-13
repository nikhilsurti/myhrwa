// import React from "react";

// export default function Template12({ data }) {

//   const {
//     personal = {},
//     projects = [],
//     skills = [],
//   } = data;

//   return (
//     <div className="bg-pink-50 max-w-[21cm] min-h-[29.7cm] mx-auto p-8">

//       <h1 className="text-5xl font-extrabold text-pink-700">
//         {personal.fullName}
//       </h1>

//       <p className="mt-2">
//         Creative Designer
//       </p>

//       <div className="mt-8">
//         <h2 className="text-pink-700 text-2xl font-bold">
//           About Me
//         </h2>

//         <p className="mt-2">
//           {personal.summary}
//         </p>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-pink-700 text-2xl font-bold">
//           Design Skills
//         </h2>

//         <div className="flex flex-wrap gap-2 mt-3">
//           {skills.map((skill, index) => (
//             <span
//               key={index}
//               className="bg-pink-200 px-3 py-1 rounded-full"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="mt-8">
//         <h2 className="text-pink-700 text-2xl font-bold">
//           Portfolio Projects
//         </h2>

//         {projects.map((project) => (
//           <div key={project.id} className="mt-4">
//             <strong>{project.title}</strong>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }



import React from "react";

export default function Template12({ data }) {

  const {
    personal = {},
    experiences = [],
    educations = [],
    projects = [],
    skills = [],
    certifications = [],
    achievements = [],
    languages = [],
  } = data;

  return (
    <div className="bg-pink-50 max-w-[21cm] min-h-[29.7cm] mx-auto p-8">

      {/* Header */}
      <div>
        <h1 className="text-5xl font-extrabold text-pink-700">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="mt-2 text-sm text-gray-700">
          Creative Designer
        </p>

        <p className="mt-1 text-sm text-gray-500">
          {personal.email} {personal.phone && `| ${personal.phone}`}
        </p>
      </div>

      {/* About */}
      {personal.summary && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
            About Me
          </h2>

          <p className="mt-2 text-sm leading-relaxed">
            {personal.summary}
          </p>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
            Design Skills
          </h2>

          <div className="flex flex-wrap gap-2 mt-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-pink-200 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
             Project
          </h2>

          {projects.map((project) => (
            <div key={project.id} className="mt-4">
              <strong className="text-lg">
                {project.title}
              </strong>

              <p className="text-sm text-gray-700">
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

      {/* Experience (added) */}
      
    
       {experiences.length > 0 && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
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
  <div key={exp.id} className="mt-4">
    <strong>{exp.role}</strong>

    <p className="text-sm text-gray-700">
      {exp.company}
    </p>

    <p className="text-xs text-gray-500">
      {exp.currentCompany
        ? `${exp.startDate} - Present`
        : `${exp.startDate} - ${exp.endDate}`}
    </p>

    <p className="text-sm">
      {exp.desc}
    </p>
  </div>
))} */}

          
        </div>
      )} 

      {/* Education */}
      {educations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
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
            <div key={edu.id} className="mt-3">
              <strong>{edu.degree}</strong>
              <p className="text-sm">{edu.school}</p>
            </div>
          ))} */}
        </div>
      )}

      {/* Optional Add-ons */}
      {certifications.length > 0 && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
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
            <p key={cert.id} className="text-sm">
              • {cert.name}
            </p>
          ))} */}
        </div>
      )}
      
       {/* LANGUAGES */}
{languages.length > 0 && (
  <div className="mt-8">
    <h2 className="text-pink-700 text-2xl font-bold">
      Languages
    </h2>

    <div className="flex flex-wrap gap-2 mt-2">
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
    <h2 className="text-pink-700 text-2xl font-bold">
      Achievements
    </h2>

    <ul className="list-disc pl-5 mt-2">
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