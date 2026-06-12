// import React from "react";

// export default function Template14({ data }) {

//   const {
//     personal = {},
//     experiences = [],
//     projects = [],
//   } = data;

//   return (
//     <div className="bg-white max-w-[21cm] min-h-[29.7cm] mx-auto p-8">

//       <h1 className="text-4xl font-bold">
//         {personal.fullName}
//       </h1>

//       <p className="text-gray-600 mt-2">
//         Product Manager
//       </p>

//       <div className="mt-8">
//         <h2 className="font-bold text-xl">
//           Product Summary
//         </h2>

//         <p>{personal.summary}</p>
//       </div>

//       <div className="mt-8">
//         <h2 className="font-bold text-xl">
//           Product Experience
//         </h2>

//         {experiences.map((exp) => (
//           <div key={exp.id} className="mt-4">
//             <strong>{exp.role}</strong>
//             <p>{exp.company}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8">
//         <h2 className="font-bold text-xl">
//           Key Products
//         </h2>

//         {projects.map((project) => (
//           <div key={project.id} className="mt-3">
//             <strong>{project.title}</strong>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }



import React from "react";

export default function Template14({ data }) {

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
    <div className="bg-white max-w-[21cm] min-h-[29.7cm] mx-auto p-8">

      {/* Header */}
      <h1 className="text-4xl font-bold">
        {personal.fullName || "Your Name"}
      </h1>

      <p className="text-gray-600 mt-2">
        Product Manager
      </p>

      <p className="text-sm text-gray-500 mt-1">
        {personal.email} {personal.phone && `| ${personal.phone}`}
      </p>

      {/* Summary */}
      {personal.summary && (
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Product Summary
          </h2>

          <p className="text-sm mt-2">
            {personal.summary}
          </p>
        </div>
      )}

      {/* Experience */}
      
      
       {experiences.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Product Experience
          </h2>
        {experiences.map((exp) => (
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

    <p className="text-sm mt-1">
      {exp.desc}
    </p>
  </div>
))}
          
        </div>
      )} 

      {/* Projects / Products */}
      {projects.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Key Products
          </h2>

          {projects.map((project) => (
            <div key={project.id} className="mt-3">
              <strong>{project.title}</strong>
              <p className="text-sm text-gray-700">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {educations.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Education
          </h2>

          {educations.map((edu) => (
            <div key={edu.id} className="mt-3">
              <strong>{edu.degree}</strong>
              <p className="text-sm">{edu.school}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Skills
          </h2>

          <p className="text-sm text-gray-700">
            {skills.join(" • ")}
          </p>
        </div>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Certifications
          </h2>

          {certifications.map((cert) => (
            <p key={cert.id} className="text-sm">
              • {cert.name}
            </p>
          ))}
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mt-8">
          <h2 className="font-bold text-xl">
            Achievements
          </h2>

          <ul className="list-disc pl-5 text-sm">
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
          <h2 className="font-bold text-xl">
            Languages
          </h2>

          <p className="text-sm">
            {languages.map((l) => l.name).join(", ")}
          </p>
        </div>
      )}

    </div>
  );
}