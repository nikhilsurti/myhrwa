// import React from "react";

// export default function Template11({ data }) {

//   const {
//     personal = {},
//     experiences = [],
//     projects = [],
//     skills = [],
//   } = data;

//   return (
//     <div className="bg-white max-w-[21cm] min-h-[29.7cm] mx-auto p-8">

//       <h1 className="text-5xl font-bold">
//         {personal.fullName}
//       </h1>

//       <p className="text-lg text-gray-600 mt-2">
//         Startup Founder / Entrepreneur
//       </p>

//       <div className="mt-8">
//         <h2 className="font-bold text-2xl mb-3">
//           Vision
//         </h2>

//         <p>{personal.summary}</p>
//       </div>

//       <div className="mt-8">
//         <h2 className="font-bold text-2xl mb-3">
//           Ventures & Projects
//         </h2>

//         {projects.map((project) => (
//           <div key={project.id} className="mb-4">
//             <strong>{project.title}</strong>
//             <p>{project.description}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8">
//         <h2 className="font-bold text-2xl mb-3">
//           Leadership Experience
//         </h2>

//         {experiences.map((exp) => (
//           <div key={exp.id} className="mb-4">
//             <strong>{exp.role}</strong>
//             <p>{exp.company}</p>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }



import React from "react";

export default function Template11({ data }) {

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
    <div className="bg-white max-w-[21cm] min-h-[29.7cm] mx-auto p-8">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="text-lg text-gray-600 mt-2">
          Startup Founder / Entrepreneur
        </p>

        <p className="text-sm text-gray-500 mt-2">
          {personal.email} {personal.phone && `| ${personal.phone}`}
        </p>
      </div>

      {/* Vision */}
      {personal.summary && (
        <div className="mb-10">
          <h2 className="font-bold text-2xl mb-3">
            Vision
          </h2>

          <p className="text-sm leading-relaxed">
            {personal.summary}
          </p>
        </div>
      )}

      {/* Skills (important for founders) */}
      {skills.length > 0 && (
        <div className="mb-10">
          <h2 className="font-bold text-2xl mb-3">
            Core Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="border px-3 py-1 text-sm rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Ventures & Projects */}
      {projects.length > 0 && (
        <div className="mb-10">
          <h2 className="font-bold text-2xl mb-3">
            Ventures & Projects
          </h2>

          {projects.map((project) => (
            <div key={project.id} className="mb-5">
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

      {/* Leadership Experience */}
      
      
       {experiences.length > 0 && (
        <div className="mb-10">
          <h2 className="font-bold text-2xl mb-3">
            Leadership Experience
          </h2>
        {experiences.map((exp) => (
  <div key={exp.id} className="mb-5">
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

      {/* Education */}
      {educations.length > 0 && (
        <div className="mb-10">
          <h2 className="font-bold text-2xl mb-3">
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
        </div>
      )}

      {/* Optional Add-ons */}
      {certifications.length > 0 && (
        <div className="mb-10">
          <h2 className="font-bold text-2xl mb-3">
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
        <div className="mb-10">
          <h2 className="font-bold text-2xl mb-3">
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
        <div>
          <h2 className="font-bold text-2xl mb-3">
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