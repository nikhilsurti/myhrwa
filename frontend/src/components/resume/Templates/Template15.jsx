// import React from "react";

// export default function Template15({ data }) {

//   const {
//     personal = {},
//     experiences = [],
//     educations = [],
//   } = data;

//   return (
//     <div className="bg-white max-w-[21cm] min-h-[29.7cm] mx-auto p-10 border-8 border-yellow-700">

//       <div className="text-center mb-10">

//         <h1 className="text-5xl font-serif text-yellow-700">
//           {personal.fullName}
//         </h1>

//         <p className="mt-3 text-gray-600">
//           Executive Professional
//         </p>

//       </div>

//       <section className="mb-8">

//         <h2 className="text-yellow-700 text-2xl font-serif mb-3">
//           Executive Summary
//         </h2>

//         <p>{personal.summary}</p>

//       </section>

//       <section className="mb-8">

//         <h2 className="text-yellow-700 text-2xl font-serif mb-3">
//           Experience
//         </h2>

//         {experiences.map((exp) => (
//           <div key={exp.id} className="mb-4">
//             <strong>{exp.role}</strong>
//             <p>{exp.company}</p>
//           </div>
//         ))}

//       </section>

//       <section>

//         <h2 className="text-yellow-700 text-2xl font-serif mb-3">
//           Education
//         </h2>

//         {educations.map((edu) => (
//           <div key={edu.id}>
//             <strong>{edu.degree}</strong>
//             <p>{edu.school}</p>
//           </div>
//         ))}

//       </section>

//     </div>
//   );
// }


import React from "react";

export default function Template15({ data }) {

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
    <div className="bg-white max-w-[21cm] min-h-[29.7cm] mx-auto p-10 border-8 border-yellow-700">

      {/* Header */}
      <div className="text-center mb-10">

        <h1 className="text-5xl font-serif text-yellow-700">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="mt-3 text-gray-600">
          Executive Professional
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {personal.email} {personal.phone && `| ${personal.phone}`}
        </p>

      </div>

      {/* Summary */}
      {personal.summary && (
        <section className="mb-8">

          <h2 className="text-yellow-700 text-2xl font-serif mb-3">
            Executive Summary
          </h2>

          <p className="text-sm leading-relaxed">
            {personal.summary}
          </p>

        </section>
      )}

      {/* Experience */}
      
      
       {experiences.length > 0 && (
        <section className="mb-8">

          <h2 className="text-yellow-700 text-2xl font-serif mb-3">
            Experience
          </h2>
        {experiences.map((exp) => (
  <div key={exp.id} className="mb-4">
    <strong>{exp.role}</strong>

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
))}
          

        </section>
      )} 

      {/* Education */}
      {educations.length > 0 && (
        <section className="mb-8">

          <h2 className="text-yellow-700 text-2xl font-serif mb-3">
            Education
          </h2>

          {educations.map((edu) => (
            <div key={edu.id} className="mb-3">
              <strong>{edu.degree}</strong>
              <p className="text-sm">{edu.school}</p>
            </div>
          ))}

        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section className="mb-8">

          <h2 className="text-yellow-700 text-2xl font-serif mb-3">
            Skills
          </h2>

          <p className="text-sm text-gray-700">
            {skills.join(" • ")}
          </p>

        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mb-8">

          <h2 className="text-yellow-700 text-2xl font-serif mb-3">
            Projects
          </h2>

          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <strong>{project.title}</strong>
              <p className="text-sm text-gray-700">
                {project.description}
              </p>
            </div>
          ))}

        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-8">

          <h2 className="text-yellow-700 text-2xl font-serif mb-3">
            Certifications
          </h2>

          {certifications.map((cert) => (
            <p key={cert.id} className="text-sm">
              • {cert.name}
            </p>
          ))}

        </section>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <section className="mb-8">

          <h2 className="text-yellow-700 text-2xl font-serif mb-3">
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

      {/* Languages */}
      {languages.length > 0 && (
        <section>

          <h2 className="text-yellow-700 text-2xl font-serif mb-3">
            Languages
          </h2>

          <p className="text-sm">
            {languages.map((l) => l.name).join(", ")}
          </p>

        </section>
      )}

    </div>
  );
}