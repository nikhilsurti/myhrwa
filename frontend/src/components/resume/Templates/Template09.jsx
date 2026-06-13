// import React from "react";

// export default function Template09({ data }) {

//   const {
//     personal = {},
//     experiences = [],
//     skills = [],
//     projects = [],
//   } = data;

//   return (
//     <div className="bg-white max-w-[21cm] min-h-[29.7cm] mx-auto">

//       <div className="bg-purple-700 text-white p-8">
//         <h1 className="text-4xl font-bold">
//           {personal.fullName}
//         </h1>

//         <p className="mt-2">
//           {personal.email}
//         </p>
//       </div>

//       <div className="p-8">

//         <section className="mb-8">
//           <h2 className="text-purple-700 text-xl font-bold mb-3">
//             Professional Summary
//           </h2>

//           <p>{personal.summary}</p>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-purple-700 text-xl font-bold mb-3">
//             Skills
//           </h2>

//           <div className="flex flex-wrap gap-2">
//             {skills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="border border-purple-600 rounded-full px-3 py-1 text-sm"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </section>

//         <section className="mb-8">
//           <h2 className="text-purple-700 text-xl font-bold mb-3">
//             Experience
//           </h2>

//           {experiences.map((exp) => (
//             <div
//               key={exp.id}
//               className="bg-purple-50 rounded-lg p-4 mb-3"
//             >
//               <h3 className="font-semibold">
//                 {exp.role}
//               </h3>

//               <p>{exp.company}</p>

//               <p className="text-sm mt-1">
//                 {exp.desc}
//               </p>
//             </div>
//           ))}
//         </section>

//         <section>
//           <h2 className="text-purple-700 text-xl font-bold mb-3">
//             Projects
//           </h2>

//           {projects.map((project) => (
//             <div key={project.id} className="mb-3">
//               <strong>{project.title}</strong>
//               <p>{project.description}</p>
//             </div>
//           ))}
//         </section>

//       </div>
//     </div>
//   );
// }


import React from "react";

export default function Template09({ data }) {

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
    <div className="bg-white max-w-[21cm] min-h-[29.7cm] mx-auto">

      {/* Header */}
      <div className="bg-purple-700 text-white p-8">
        <h1 className="text-4xl font-bold">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="mt-2 text-sm">
          {personal.email} {personal.phone && `| ${personal.phone}`}
        </p>

        {personal.title && (
          <p className="text-sm mt-1 text-purple-200">
            {personal.title}
          </p>
        )}

        {personal.location && (
          <p className="text-xs mt-1 text-purple-200">
            {personal.location}
          </p>
        )}
      </div>

      <div className="p-8">

        {/* Summary */}
        {personal.summary && (
          <section className="mb-8">
            <h2 className="text-purple-700 text-xl font-bold mb-3">
              Professional Summary
            </h2>

            <p className="text-sm">
              {personal.summary}
            </p>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-8">
            <h2 className="text-purple-700 text-xl font-bold mb-3">
              Skills
            </h2>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="border border-purple-600 rounded-full px-3 py-1 text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        
        
         {experiences.length > 0 && (
          <section className="mb-8">
            <h2 className="text-purple-700 text-xl font-bold mb-3">
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
  <div
    key={exp.id}
    className="bg-purple-50 rounded-lg p-4 mb-3"
  >
    <h3 className="font-semibold">
      {exp.role}
    </h3>

    <p className="text-sm text-gray-700">
      {exp.company}
    </p>

    <p className="text-xs text-gray-500">
      {exp.currentCompany
        ? `${exp.startDate} - Present`
        : `${exp.startDate} - ${exp.endDate}`}
    </p>

    <p className="text-sm mt-1">
      {exp.desc}
    </p>
  </div>
))} */}
            
            
          </section>
        )} 

        {/* Education */}
        {educations.length > 0 && (
          <section className="mb-8">
            <h2 className="text-purple-700 text-xl font-bold mb-3">
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
                <p className="text-sm">{edu.school}</p>
                <p className="text-xs text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </p>
              </div>
            ))} */}
          </section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mb-8">
            <h2 className="text-purple-700 text-xl font-bold mb-3">
              Projects
            </h2>

            {projects.map((project) => (
              <div key={project.id} className="mb-3">
                <strong>{project.title}</strong>
                <p className="text-sm">{project.description}</p>
              {(project.startDate || project.endDate) && (
  <p className="text-xs text-gray-500">
    {project.startDate}
    {project.endDate && ` - ${project.endDate}`}
  </p>
)}
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section className="mb-8">
            <h2 className="text-purple-700 text-xl font-bold mb-3">
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
{/* 
            {certifications.map((cert) => (
              <p key={cert.id} className="text-sm">
                • {cert.name}
              </p>
            ))} */}
          </section>
        )}
        

         {languages.length > 0 && (
          <section className="mb-8">
            <h2 className="text-purple-700 text-xl font-bold mb-3">
              Languages
            </h2>
        {/* {languages.length > 0 && (
  <section className="mb-5">
    <h2 className="font-bold text-lg border-b mb-2">
      Languages
    </h2> */}

    <div className="flex flex-wrap gap-2">
      {languages.map((lang, index) => (
        <span
          key={index}
          className="text-sm"
        >
          {typeof lang === "string" ? lang : lang.name}
        </span>
      ))}
    </div>
  </section>
)}

{/* Achievements */}
{achievements.length > 0 && (
          <section>
            <h2 className="text-purple-700 text-xl font-bold mb-3">
              Achievements
            </h2>
{/* {achievements.length > 0 && (
  <section>
    <h2 className="font-bold text-lg border-b mb-2">
      Achievements
    </h2> */}

    <ul className="list-disc pl-5">
      {achievements.map((item, index) => (
        <li key={index} className="text-sm">
          {typeof item === "string" ? item : item.title}
        </li>
      ))}
    </ul>
  </section>
)}
        {/* Languages */}
        {/* {languages.length > 0 && (
          <section className="mb-8">
            <h2 className="text-purple-700 text-xl font-bold mb-3">
              Languages
            </h2>

            <p className="text-sm">
              {languages.map((l) => l.name).join(", ")}
            </p>
          </section>
        )} */}

        {/* Achievements */}
        {/* {achievements.length > 0 && (
          <section>
            <h2 className="text-purple-700 text-xl font-bold mb-3">
              Achievements
            </h2>

            <ul className="list-disc pl-5 text-sm">
              {achievements.map((item, index) => (
                <li key={index}>
                  {item.title}
                </li>
              ))}
            </ul>
          </section>
        )} */}

      </div>
    </div>
  );
}