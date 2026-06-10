import React from "react";

const stats = [
  {
    number: "5000+",
    title: "Candidates Placed",
  },
  {
    number: "500+",
    title: "Hiring Partners",
  },
  {
    number: "95%",
    title: "Success Rate",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-4xl font-extrabold text-slate-900 leading-tight">
              Helping Businesses Hire Better Talent Faster
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Our experienced recruitment team works closely with
              organizations and job seekers to create successful hiring
              outcomes. We combine industry expertise, technology and
              personalized support to deliver exceptional results.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="font-semibold text-slate-700">
                  Industry Experienced Recruiters
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="font-semibold text-slate-700">
                  Fast Hiring Process
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="font-semibold text-slate-700">
                  ATS Optimized Resume Solutions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-green-600 text-xl">✓</span>
                <span className="font-semibold text-slate-700">
                  Dedicated Candidate Support
                </span>
              </div>
            </div>
          </div>

          {/* Right Stats */}
          <div className="grid grid-cols-2 gap-6">

            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all"
              >
                <h3 className="text-4xl font-extrabold text-blue-600">
                  {item.number}
                </h3>

                <p className="mt-3 font-semibold text-slate-600">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}