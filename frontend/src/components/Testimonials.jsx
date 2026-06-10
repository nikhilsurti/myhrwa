import React from "react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    review:
      "The resume review service helped me get shortlisted by multiple companies. I received 3 interview calls within two weeks.",
  },
  {
    name: "Priya Mehta",
    role: "HR Manager",
    review:
      "Professional recruitment support and excellent communication throughout the hiring process. Highly recommended.",
  },
  {
    name: "Amit Verma",
    role: "Backend Developer",
    review:
      "The ATS-friendly resume builder made a huge difference. My profile started getting noticed by recruiters.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            Trusted by professionals across industries
          </h2>

          <p className="mt-4 text-slate-500 font-medium">
            See what our candidates and clients have to say about their
            experience working with us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 text-yellow-400 text-lg mb-5">
                ★★★★★
              </div>

              <p className="text-slate-600 leading-relaxed">
                "{item.review}"
              </p>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="font-extrabold text-slate-900">
                  {item.name}
                </h4>

                <p className="text-sm text-slate-500 font-medium">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-blue-600">5000+</h3>
            <p className="text-slate-500 font-medium">Candidates Placed</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-blue-600">500+</h3>
            <p className="text-slate-500 font-medium">Hiring Partners</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-blue-600">95%</h3>
            <p className="text-slate-500 font-medium">Success Rate</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-extrabold text-blue-600">4.9/5</h3>
            <p className="text-slate-500 font-medium">Client Rating</p>
          </div>

        </div>

      </div>
    </section>
  );
}