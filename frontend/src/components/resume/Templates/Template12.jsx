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
            Portfolio Projects
          </h2>

          {projects.map((project) => (
            <div key={project.id} className="mt-4">
              <strong className="text-lg">
                {project.title}
              </strong>

              <p className="text-sm text-gray-700">
                {project.description}
              </p>
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
            <div key={exp.id} className="mt-4">
              <strong>{exp.role}</strong>
              <p className="text-sm text-gray-700">
                {exp.company}
              </p>
              <p className="text-sm">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Education */}
      {educations.length > 0 && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
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

      {/* Optional Add-ons */}
      {certifications.length > 0 && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
            Certifications
          </h2>

          {certifications.map((cert) => (
            <p key={cert.id} className="text-sm">
              • {cert.name}
            </p>
          ))}
        </div>
      )}

      {achievements.length > 0 && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
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

      {languages.length > 0 && (
        <div className="mt-8">
          <h2 className="text-pink-700 text-2xl font-bold">
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