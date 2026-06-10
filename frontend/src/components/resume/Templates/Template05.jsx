// import React from "react";

// export default function Template05({ data }) {

//   const {
//     personal = {},
//     skills = [],
//     projects = [],
//     experiences = [],
//   } = data;

//   return (
//     <div className="bg-gray-50 max-w-[21cm] min-h-[29.7cm] mx-auto p-8">

//       <div className="mb-8">
//         <h1 className="text-4xl font-bold">
//           {personal.fullName}
//         </h1>

//         <p className="text-gray-600 mt-2">
//           {personal.summary}
//         </p>
//       </div>

//       <section className="mb-8">
//         <h2 className="font-bold text-xl mb-3">
//           Tech Stack
//         </h2>

//         <div className="flex flex-wrap gap-2">
//           {skills.map((skill, index) => (
//             <span
//               key={index}
//               className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
//             >
//               {skill}
//             </span>
//           ))}
//         </div>
//       </section>

//       <section className="mb-8">
//         <h2 className="font-bold text-xl mb-3">
//           Projects
//         </h2>

//         {projects.map((project) => (
//           <div
//             key={project.id}
//             className="bg-white p-4 rounded shadow mb-3"
//           >
//             <h3 className="font-semibold">
//               {project.title}
//             </h3>

//             <p className="text-sm mt-1">
//               {project.description}
//             </p>
//           </div>
//         ))}
//       </section>

//       <section>
//         <h2 className="font-bold text-xl mb-3">
//           Experience
//         </h2>

//         {experiences.map((exp) => (
//           <div
//             key={exp.id}
//             className="mb-4"
//           >
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

export default function Template05({ data }) {
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
    <div className="flex bg-white max-w-[21cm] min-h-[29.7cm] mx-auto">

      {/* LEFT SIDEBAR */}
      <div className="w-1/3 bg-gray-900 text-white p-6">

        <h1 className="text-2xl font-bold">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="text-xs mt-2">
          {personal.email}
        </p>

        <p className="text-xs">
          {personal.phone}
        </p>

        <p className="text-xs mt-3 text-gray-300">
          {personal.summary}
        </p>

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mt-6">
            <h2 className="font-bold mb-2">Skills</h2>
            <ul className="text-xs space-y-1">
              {skills.map((s, i) => (
                <li key={i}>• {s}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <div className="mt-6">
            <h2 className="font-bold mb-2">Languages</h2>
            {languages.map((l, i) => (
              <p key={i} className="text-xs">
                {l.name}
              </p>
            ))}
          </div>
        )}

      </div>

      {/* RIGHT CONTENT */}
      <div className="w-2/3 p-8">

        {/* Experience */}
        {experiences.length > 0 && (
          <section className="mb-5">
            <h2 className="font-bold text-lg mb-2">
              Experience
            </h2>

            {experiences.map((exp) => (
              <div key={exp.id} className="mb-3">
                <strong>{exp.role}</strong>
                <p className="text-sm">{exp.company}</p>
                <p className="text-xs">{exp.desc}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {educations.length > 0 && (
          <section className="mb-5">
            <h2 className="font-bold text-lg mb-2">
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

        {/* Projects */}
        {projects.length > 0 && (
          <section className="mb-5">
            <h2 className="font-bold text-lg mb-2">
              Projects
            </h2>

            {projects.map((p) => (
              <div key={p.id} className="mb-3">
                <strong>{p.title}</strong>
                <p className="text-sm">{p.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section className="mb-5">
            <h2 className="font-bold text-lg mb-2">
              Certifications
            </h2>

            {certifications.map((c) => (
              <p key={c.id} className="text-sm">
                • {c.name}
              </p>
            ))}
          </section>
        )}

        {/* Achievements */}
        {achievements.length > 0 && (
          <section>
            <h2 className="font-bold text-lg mb-2">
              Achievements
            </h2>

            <ul className="list-disc pl-5 text-sm">
              {achievements.map((a, i) => (
                <li key={i}>{a.title}</li>
              ))}
            </ul>
          </section>
        )}

      </div>
    </div>
  );
}