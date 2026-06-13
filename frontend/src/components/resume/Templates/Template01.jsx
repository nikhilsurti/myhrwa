import React from "react";

export default function Template01({ data }) {
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

console.log("LANGUAGES =", languages);
console.log("ACHIEVEMENTS =", achievements);
return ( <div className="bg-white text-black w-full max-w-[21cm] min-h-[29.7cm] mx-auto p-10">


  {/* Header */}
  <div className="border-b-2 pb-4 mb-5">
    <h1 className="text-3xl font-bold">
      {personal.fullName || "Your Name"}
    </h1>

    <p className="text-sm font-medium text-gray-700">
      {personal.title}
    </p>

    <div className="flex flex-wrap gap-4 text-xs mt-2">
      {personal.email && <span>{personal.email}</span>}
      {personal.phone && <span>{personal.phone}</span>}
      {personal.location && <span>{personal.location}</span>}
    </div>
  </div>

  {/* Summary */}
  {personal.summary && (
    <section className="mb-5">
      <h2 className="font-bold text-lg border-b mb-2">
        Professional Summary
      </h2>

      <p className="text-sm leading-relaxed">
        {personal.summary}
      </p>
    </section>
  )}

  {/* Experience */}
  {experiences.length > 0 && (
    <section className="mb-5">
      <h2 className="font-bold text-lg border-b mb-2">
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
    </section>
  )}

  {/* Education */}
  {educations.length > 0 && (
    <section className="mb-5">
      <h2 className="font-bold text-lg border-b mb-2">
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
    </section>
  )}

  {/* Skills */}
  {skills.length > 0 && (
    <section className="mb-5">
      <h2 className="font-bold text-lg border-b mb-2">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="border px-2 py-1 text-xs"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )}

  {/* Projects */}
  {projects.length > 0 && (
    <section className="mb-5">
      <h2 className="font-bold text-lg border-b mb-2">
        Projects
      </h2>

      
      {projects.map((project) => (
  <div key={project.id} className="mb-3">

    <h3 className="font-semibold">
      {project.title}
    </h3>

    <p className="text-sm">
      {project.description}
    </p>

    {(project.startDate || project.endDate) && (
      <p className="text-xs text-gray-500 mt-1">
        {project.startDate}
        {project.endDate && ` - ${project.endDate}`}
      </p>
    )}

  </div>
))}
      {/* {projects.map((project) => (
        <div key={project.id} className="mb-3">
          <h3 className="font-semibold">
            {project.title}
          </h3>

          <p className="text-sm">
            {project.description}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 text-sm"
            >
              Project Link
            </a>
          )}
        </div>
      ))} */}
    </section>
  )}

  {/* Certifications */}
  {certifications.length > 0 && (
    <section className="mb-5">
      <h2 className="font-bold text-lg border-b mb-2">
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
        <div key={cert.id}>
          <p className="text-sm">
            {cert.name}
          </p>
        </div>
      ))} */}
    </section>
  )}

  {/* Languages */}
  {/* {languages.length > 0 && (
    <section className="mb-5">
      <h2 className="font-bold text-lg border-b mb-2">
        Languages
      </h2>

      <div className="flex flex-wrap gap-2">
        {languages.map((lang, index) => (
          <span
            key={index}
            className="text-sm"
          >
            {lang.name}
          </span>
        ))}
      </div>
    </section>
  )} */}

  {/* Achievements */}
  {/* {achievements.length > 0 && (
    <section>
      <h2 className="font-bold text-lg border-b mb-2">
        Achievements
      </h2>

      <ul className="list-disc pl-5">
        {achievements.map((item, index) => (
          <li key={index} className="text-sm">
            {item.title}
          </li>
        ))}
      </ul>
    </section>
  )} */}

{/* Languages */}
{languages.length > 0 && (
  <section className="mb-5">
    <h2 className="font-bold text-lg border-b mb-2">
      Languages
    </h2>

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
    <h2 className="font-bold text-lg border-b mb-2">
      Achievements
    </h2>

    <ul className="list-disc pl-5">
      {achievements.map((item, index) => (
        <li key={index} className="text-sm">
          {typeof item === "string" ? item : item.title}
        </li>
      ))}
    </ul>
  </section>
)}

</div>


);
}