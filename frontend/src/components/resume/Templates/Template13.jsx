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
))}
          
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
              <strong>{edu.degree}</strong>
              <p className="text-sm text-gray-400">
                {edu.school}
              </p>
              <p className="text-xs text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
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
            <p key={cert.id} className="text-sm text-gray-300">
              • {cert.name}
            </p>
          ))}
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mt-8">
          <h2 className="uppercase font-bold mb-3">
            Achievements
          </h2>

          <ul className="list-disc pl-5 text-sm text-gray-300">
            {achievements.map((item, index) => (
              <li key={index}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <div className="mt-8">
          <h2 className="uppercase font-bold mb-3">
            Languages
          </h2>

          <p className="text-sm text-gray-300">
            {languages.map((l) => l.name).join(", ")}
          </p>
        </div>
      )}

    </div>
  );
}