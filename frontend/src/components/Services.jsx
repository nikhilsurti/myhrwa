// import React from "react";

// const services = [
//   {
//     title: "Recruitment Services",
//     description:
//       "We connect businesses with highly qualified professionals across multiple industries.",
//     icon: "👨‍💼",
//   },
//   {
//     title: "Staffing Solutions",
//     description:
//       "Flexible staffing services to help organizations scale quickly and efficiently.",
//     icon: "🏢",
//   },
//   {
//     title: "HR Consulting",
//     description:
//       "Expert HR guidance to improve workforce management and business performance.",
//     icon: "📊",
//   },
//   {
//     title: "Resume Builder",
//     description:
//       "Create ATS-friendly resumes that increase your chances of getting shortlisted.",
//     icon: "📄",
//   },
//   {
//     title: "Career Guidance",
//     description:
//       "Professional career consulting, interview preparation and job search support.",
//     icon: "🚀",
//   },
//   {
//     title: "Talent Acquisition",
//     description:
//       "End-to-end hiring solutions designed to attract and retain top talent.",
//     icon: "🎯",
//   },
// ];

// export default function Services() {
//   return (
//     <section
//       id="services"
//       className="py-20 lg:py-28 bg-white border-t border-slate-100"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Heading */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
//             Our Services
//           </span>

//           <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
//             Complete HR & Career Solutions
//           </h2>

//           <p className="mt-4 text-slate-600 text-lg">
//             Helping organizations hire better talent and helping professionals
//             build successful careers.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
//             >
//               <div className="text-4xl mb-5">
//                 {service.icon}
//               </div>

//               <h3 className="text-xl font-extrabold text-slate-900 mb-3">
//                 {service.title}
//               </h3>

//               <p className="text-slate-600 leading-relaxed">
//                 {service.description}
//               </p>

//               <button className="mt-6 text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
//                 Learn More →
//               </button>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";

import {
  FaUserTie,
  FaBuilding,
  FaChartLine,
  FaFileAlt,
  FaRocket,
  FaBullseye,
  FaSearch,
} from "react-icons/fa";

const services = [
  {
    title: "Recruitment Services",
    description:
      "We connect businesses with highly qualified professionals across multiple industries.",
    icon: FaUserTie,
  },
  {
    title: "Staffing Solutions",
    description:
      "Flexible staffing services to help organizations scale quickly and efficiently.",
    icon: FaBuilding,
  },
  {
    title: "HR Consulting",
    description:
      "Expert HR guidance to improve workforce management and business performance.",
    icon: FaChartLine,
  },
  {
    title: "Resume Builder",
    description:
      "Create ATS-friendly resumes that increase your chances of getting shortlisted.",
    icon: FaFileAlt,
  },
  // {
  //   title: "Career Guidance",
  //   description:
  //     "Professional career consulting, interview preparation and job search support.",
  //   icon: FaRocket,
  // },
  {
    title:  "Headhunting Services",
    description:
       "We proactively identify and engage highly qualified professionals for specialized and leadership positions.",
    icon:  FaSearch
  },
  {
    title: "Talent Acquisition",
    description:
      "End-to-end hiring solutions designed to attract and retain top talent.",
    icon: FaBullseye,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-white border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-slate-900">
            Complete HR & Career Solutions
          </h2>

          <p className="mt-4 text-slate-600 text-lg">
            Helping organizations hire better talent and helping professionals
            build successful careers.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
              >
                <Icon className="text-4xl text-blue-600 mb-5" />

                <h3 className="text-xl font-extrabold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <button className="mt-6 text-blue-600 font-bold group-hover:translate-x-1 transition-transform">
                  Learn More →
                </button>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}