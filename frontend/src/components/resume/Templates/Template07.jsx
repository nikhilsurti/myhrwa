// import React from "react";

// export default function Template07({ data }) {
//   const {
//     personal = {},
//     experiences = [],
//     educations = [],
//     skills = [],
//     projects = [],
//   } = data;

//   return (
//     <div className="bg-white text-black w-full max-w-[21cm] min-h-[29.7cm] mx-auto p-10">

//       <div className="text-center border-b-2 border-blue-900 pb-4 mb-6">
//         <h1 className="text-3xl font-bold">
//           {personal.fullName}
//         </h1>

//         <p className="text-sm mt-2">
//           {personal.email} | {personal.phone}
//         </p>
//       </div>

//       <section className="mb-6">
//         <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
//           Education
//         </h2>

//         {educations.map((edu) => (
//           <div key={edu.id} className="mb-3">
//             <strong>{edu.school}</strong>
//             <p>{edu.degree}</p>
//           </div>
//         ))}
//       </section>

//       <section className="mb-6">
//         <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
//           Experience
//         </h2>

//         {experiences.map((exp) => (
//           <div key={exp.id} className="mb-3">
//             <strong>{exp.role}</strong>
//             <p>{exp.company}</p>
//             <p className="text-sm">{exp.desc}</p>
//           </div>
//         ))}
//       </section>

//       <section className="mb-6">
//         <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
//           Skills
//         </h2>

//         <p>{skills.join(", ")}</p>
//       </section>

//       <section>
//         <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
//           Projects
//         </h2>

//         {projects.map((project) => (
//           <div key={project.id}>
//             <strong>{project.title}</strong>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </section>

//     </div>
//   );
// }


import React from "react";

export default function Template07({ data }) {
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
    <div className="bg-white text-black w-full max-w-[21cm] min-h-[29.7cm] mx-auto p-10">

      {/* Header */}
      <div className="text-center border-b-2 border-blue-900 pb-4 mb-6">
        <h1 className="text-3xl font-bold">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="text-sm mt-2">
          {personal.email} {personal.phone && `| ${personal.phone}`}
        </p>

        {personal.title && (
          <p className="text-sm text-gray-600 mt-1">
            {personal.title}
          </p>
        )}

        {personal.location && (
          <p className="text-xs text-gray-500 mt-1">
            {personal.location}
          </p>
        )}
      </div>

      {/* Summary */}
      {personal.summary && (
        <section className="mb-6">
          <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
            Summary
          </h2>
          <p className="text-sm">{personal.summary}</p>
        </section>
      )}

      {/* Education */}
      {educations.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
            Education
          </h2>

          {educations.map((edu) => (
            <div key={edu.id} className="mb-3">
              <strong>{edu.school}</strong>
              <p>{edu.degree}</p>
              <p className="text-xs text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      {experiences.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
            Experience
          </h2>

          {experiences.map((exp) => (
            <div key={exp.id} className="mb-3">
              <strong>{exp.role}</strong>
              <p className="text-sm text-gray-700">{exp.company}</p>
              <p className="text-sm">{exp.desc}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
            Skills
          </h2>

          <p className="text-sm">
            {skills.join(", ")}
          </p>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
            Projects
          </h2>

          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <strong>{project.title}</strong>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
            Certifications
          </h2>

          {certifications.map((cert) => (
            <p key={cert.id} className="text-sm">
              • {cert.name}
            </p>
          ))}
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
            Languages
          </h2>

          <p className="text-sm">
            {languages.map((l) => l.name).join(", ")}
          </p>
        </section>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <section>
          <h2 className="uppercase text-blue-900 font-bold border-b border-blue-900 mb-2">
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
      )}

    </div>
  );
}