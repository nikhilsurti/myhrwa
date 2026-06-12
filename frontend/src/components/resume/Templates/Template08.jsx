// import React from "react";

// export default function Template08({ data }) {
//   const {
//     personal = {},
//     experiences = [],
//     projects = [],
//     skills = [],
//   } = data;

//   return (
//     <div className="bg-gray-50 max-w-[21cm] min-h-[29.7cm] mx-auto p-8">

//       <div className="bg-cyan-600 text-white rounded-xl p-6 mb-8">
//         <h1 className="text-4xl font-bold">
//           {personal.fullName}
//         </h1>

//         <p className="mt-2">
//           {personal.email}
//         </p>

//         <p>{personal.phone}</p>
//       </div>

//       <section className="mb-8">
//         <h2 className="text-cyan-700 text-xl font-bold mb-3">
//           Skills
//         </h2>

//         <div className="flex flex-wrap gap-2">
//           {skills.map((skill, index) => (
//             <span
//               key={index}
//               className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </section>

//       <section className="mb-8">
//         <h2 className="text-cyan-700 text-xl font-bold mb-3">
//           Projects
//         </h2>

//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white rounded-lg shadow-sm p-4 mb-3"
//           >
//             <h3 className="font-semibold">
//               {project.title}
//             </h3>

//             <p className="text-sm">
//               {project.description}
//             </p>
//           </div>
//         ))}
//       </section>

//       <section>
//         <h2 className="text-cyan-700 text-xl font-bold mb-3">
//           Experience
//         </h2>

//         {experiences.map((exp) => (
//           <div key={exp.id} className="mb-4">
//             <h3 className="font-semibold">
//               {exp.role}
//             </h3>

//             <p>{exp.company}</p>

//             <p className="text-sm">
//               {exp.desc}
//             </p>
//           </div>
//         ))}
//       </section>

//     </div>
//   );
// }


import React from "react";

export default function Template08({ data }) {
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
    <div className="bg-gray-50 max-w-[21cm] min-h-[29.7cm] mx-auto p-8">

      {/* Header */}
      <div className="bg-cyan-600 text-white rounded-xl p-6 mb-8">
        <h1 className="text-4xl font-bold">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="mt-2 text-sm">
          {personal.email} {personal.phone && `| ${personal.phone}`}
        </p>

        {personal.title && (
          <p className="text-sm mt-1 text-cyan-100">
            {personal.title}
          </p>
        )}

        {personal.location && (
          <p className="text-xs mt-1 text-cyan-200">
            {personal.location}
          </p>
        )}
      </div>

      {/* Summary */}
      {personal.summary && (
        <section className="mb-8">
          <h2 className="text-cyan-700 text-xl font-bold mb-3">
            Summary
          </h2>

          <p className="text-sm">
            {personal.summary}
          </p>
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">
          <h2 className="text-cyan-700 text-xl font-bold mb-3">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-cyan-700 text-xl font-bold mb-3">
            Projects
          </h2>

          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-sm p-4 mb-3"
            >
              <h3 className="font-semibold">
                {project.title}
              </h3>

              <p className="text-sm">
                {project.description}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Experience */}
      
      
       {experiences.length > 0 && (
        <section className="mb-8">
          <h2 className="text-cyan-700 text-xl font-bold mb-3">
            Experience
          </h2>
         {experiences.map((exp) => (
  <div key={exp.id} className="mb-4">
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

    <p className="text-sm">
      {exp.desc}
    </p>
  </div>
))}
          
          
        </section>
      )} 

      {/* Education */}
      {educations.length > 0 && (
        <section className="mb-8">
          <h2 className="text-cyan-700 text-xl font-bold mb-3">
            Education
          </h2>

          {educations.map((edu) => (
            <div key={edu.id} className="mb-3">
              <strong>{edu.degree}</strong>
              <p className="text-sm">{edu.school}</p>
              <p className="text-xs text-gray-500">
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-8">
          <h2 className="text-cyan-700 text-xl font-bold mb-3">
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
        <section className="mb-8">
          <h2 className="text-cyan-700 text-xl font-bold mb-3">
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
          <h2 className="text-cyan-700 text-xl font-bold mb-3">
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