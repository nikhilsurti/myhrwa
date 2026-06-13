import React from "react";

export default function Template02({ data }) {
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
    <div className="bg-white w-full max-w-[21cm] min-h-[29.7cm] mx-auto flex text-gray-900">

      {/* Sidebar */}
      <div className="w-[32%] bg-slate-800 text-white p-6">
        <h1 className="text-2xl font-bold">
          {personal.fullName || "Your Name"}
        </h1>

        <p className="text-sm mt-1 opacity-90">
          {personal.title}
        </p>

        <div className="mt-8">
          <h2 className="font-bold border-b border-slate-500 pb-1 mb-3">
            Contact
          </h2>

          {personal.email && (
            <p className="text-xs mb-2">{personal.email}</p>
          )}

          {personal.phone && (
            <p className="text-xs mb-2">{personal.phone}</p>
          )}

          {personal.location && (
            <p className="text-xs">{personal.location}</p>
          )}
        </div>

        {skills.length > 0 && (
          <div className="mt-8">
            <h2 className="font-bold border-b border-slate-500 pb-1 mb-3">
              Skills
            </h2>

            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="text-xs bg-slate-700 px-2 py-1 rounded"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        )}

        
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
        {/* {languages.length > 0 && (
          <div className="mt-8">
            <h2 className="font-bold border-b border-slate-500 pb-1 mb-3">
              Languages
            </h2>

            {languages.map((lang, index) => (
              <p
                key={index}
                className="text-xs mb-2"
              >
                {lang.name}
              </p>
            ))}
          </div>
        )} */}

        
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
        {/* {certifications.length > 0 && (
          <div className="mt-8">
            <h2 className="font-bold border-b border-slate-500 pb-1 mb-3">
              Certifications
            </h2>

            {certifications.map((cert) => (
              <p
                key={cert.id}
                className="text-xs mb-2"
              >
                {cert.name}
              </p>
            ))}
          </div>
        )} */}
      </div>

      {/* Main Content */}
      <div className="w-[68%] p-8">

        {personal.summary && (
          <section className="mb-6">
            <h2 className="text-lg font-bold border-b mb-2">
              Professional Summary
            </h2>

            <p className="text-sm leading-relaxed">
              {personal.summary}
            </p>
          </section>
        )}

        {experiences.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold border-b mb-3">
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
                className="mb-4"
              >
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

                <p className="text-sm font-medium">
                  {exp.company}
                </p>

                <p className="text-sm mt-1 whitespace-pre-line">
                  {exp.desc}
                </p>
              </div>
            ))} */}
          </section>
        )}

        {educations.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold border-b mb-3">
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
              <div
                key={edu.id}
                className="mb-3"
              >
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
              </div>
            ))} */}
          </section>
        )}

        {projects.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold border-b mb-3">
              Projects
            </h2>

            {projects.map((project) => (
              <div
                key={project.id}
                className="mb-3"
              >
                <h3 className="font-semibold">
                  {project.title}
                </h3>

                <p className="text-sm">
                  {project.description}
                </p>
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
        {/* {achievements.length > 0 && (
          <section>
            <h2 className="text-lg font-bold border-b mb-3">
              Achievements
            </h2>

            <ul className="list-disc pl-5">
              {achievements.map((item, index) => (
                <li
                  key={index}
                  className="text-sm"
                >
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