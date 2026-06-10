import React from "react";

const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova Solutions",
    location: "Mumbai, India",
    salary: "₹8-12 LPA",
    type: "Full Time",
  },
  {
    title: "Python Backend Developer",
    company: "CloudEdge",
    location: "Remote",
    salary: "₹10-15 LPA",
    type: "Remote",
  },
  {
    title: "HR Executive",
    company: "TalentSphere",
    location: "Pune, India",
    salary: "₹4-6 LPA",
    type: "Full Time",
  },
];

export default function FeaturedJobs() {
  return (
    <section
      id="jobs"
      className="py-24 bg-slate-50 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">
            Featured Opportunities
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            Explore the latest job openings
          </h2>

          <p className="mt-4 text-slate-500 font-medium">
            Discover curated opportunities from trusted employers and
            accelerate your career growth.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-xs font-bold">
                  {job.type}
                </span>

                <span className="text-xs font-bold text-slate-400">
                  New
                </span>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900">
                {job.title}
              </h3>

              <p className="mt-2 text-slate-500 font-semibold">
                {job.company}
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  📍 {job.location}
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">
                  💰 {job.salary}
                </div>
              </div>

              <button className="w-full mt-8 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <button className="px-8 py-4 rounded-2xl border border-slate-300 font-bold text-slate-700 hover:bg-white transition-all">
            View All Jobs
          </button>
        </div>

      </div>
    </section>
  );
}