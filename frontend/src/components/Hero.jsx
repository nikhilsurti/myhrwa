// import React from 'react';

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
//       {/* Background Blobs (Modern Touch) */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-50">
//         <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px]" />
//         <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-400/10 blur-[120px]" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
//           {/* Left Text Column */}
//           <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
//             <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide">
//               <span>🚀</span> Fast, Simple & Recruiter-Approved
//             </div>
            
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
//               Build a professional resume that gets you <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">promoted.</span>
//             </h1>
            
//             <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0">
//               Only 2% of resumes make it past the initial round. Create an ATS-optimized, beautifully designed resume in just 5 minutes.
//             </p>

//             {/* CTAs */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//               <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-base">
//                 Create My Resume
//               </button>
//               <button className="px-8 py-4 bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-100 hover:border-slate-300 transition-all text-base">
//                 Upload Existing Resume
//               </button>
//             </div>

//             {/* Rating Indicator */}
//             <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
//               <div className="flex -space-x-2">
//                 <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
//                 <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
//                 <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
//               </div>
//               <div className="text-sm text-slate-600 font-semibold text-left">
//                 <div className="flex text-amber-400">★★★★★</div>
//                 4.8/5 Rating by over 10,000+ professionals
//               </div>
//             </div>
//           </div>

//           {/* Right Mockup Column */}
//           <div className="lg:col-span-5 relative">
//             <div className="relative mx-auto max-w-[420px] bg-white rounded-2xl shadow-2xl shadow-slate-300/60 p-5 border border-slate-100">
//               {/* Decorative Elements */}
//               <div className="absolute -top-4 -right-4 bg-indigo-500 text-white font-bold text-xs py-1.5 px-3 rounded-full shadow-lg">
//                 ATS Score: 94%
//               </div>
              
//               {/* Clean Mockup Resume Structure */}
//               <div className="space-y-4">
//                 <div className="flex gap-4 items-center">
//                   <div className="h-14 w-14 rounded-full bg-slate-200 overflow-hidden">
//                     <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Profile" />
//                   </div>
//                   <div>
//                     <div className="h-4 w-32 bg-slate-800 rounded"></div>
//                     <div className="h-3 w-20 bg-slate-400 rounded mt-2"></div>
//                   </div>
//                 </div>
//                 <hr className="border-slate-100" />
//                 <div className="space-y-2">
//                   <div className="h-3 w-16 bg-blue-600 rounded"></div>
//                   <div className="h-3 w-full bg-slate-100 rounded"></div>
//                   <div className="h-3 w-[90%] bg-slate-100 rounded"></div>
//                 </div>
//                 <div className="space-y-2 pt-2">
//                   <div className="h-3 w-24 bg-blue-600 rounded"></div>
//                   <div className="grid grid-cols-2 gap-2">
//                     <div className="h-6 bg-slate-50 border border-slate-100 rounded flex items-center px-2"><div className="h-2 w-12 bg-slate-400 rounded"></div></div>
//                     <div className="h-6 bg-slate-50 border border-slate-100 rounded flex items-center px-2"><div className="h-2 w-16 bg-slate-400 rounded"></div></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import React from "react";
import { FiCheckCircle, FiFileText, FiZap } from "react-icons/fi";
import { HiOutlineTemplate } from "react-icons/hi";


export default function Hero({ onCreateResume }) {
  return (
    // <section className="relative overflow-hidden bg-white pt-20 pb-24 lg:pt-28 lg:pb-32">
    // <section className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-12 lg:pb-20">
    <section className="relative overflow-hidden bg-white pt-4 pb-10 lg:pt-12 lg:pb-20">
    {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-10%] h-[400px] w-[400px] rounded-full bg-blue-100 blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 right-[-10%] h-[450px] w-[450px] rounded-full bg-indigo-100 blur-3xl opacity-70"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="grid lg:grid-cols-2 gap-16 items-center"> */}
        {/* <div className="grid lg:grid-cols-2 gap-10 items-start"> */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* Left Content */}
          <div>
            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-6"> */}
              <div className="inline-flex items-center px-3 py-1.5 rounded-full  bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold mb-6">
              🚀 Trusted HR & Recruitment Partner
            </div>

            {/* <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"> */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Connecting
              <span className="text-blue-600"> Top Talent </span>
              With Leading Companies
            </h1>

            {/* <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl"> */}
            <p className="mt-4 text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
              We help businesses hire exceptional talent and help
              professionals accelerate their careers through recruitment,
              staffing solutions, HR consulting and ATS-friendly resumes.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-4 mt-10"> */}
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <button className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition">
                Find Jobs
              </button>

              {/* <button className="px-8 py-4 rounded-2xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 transition">
                Hire Talent
              </button> */}
            <button onClick={onCreateResume}className="px-8 py-4 rounded-2xl border border-slate-300 font-bold text-slate-700 hover:bg-slate-50 transition">Build Resume</button>
            </div>

            {/* <div className="flex flex-wrap gap-8 mt-10"> */}
            <div className="flex flex-wrap gap-5 mt-6">
              <div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  5000+
                </h3>
                <p className="text-sm text-slate-500">
                  Candidates Placed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  500+
                </h3>
                <p className="text-sm text-slate-500">
                  Hiring Partners
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-extrabold text-slate-900">
                  95%
                </h3>
                <p className="text-sm text-slate-500">
                  Client Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          {/* <div className="relative">
            <div className="bg-white rounded-[32px] border border-slate-200 shadow-2xl p-8">

              <div className="flex items-center justify-between mb-8">
                <h3 className="font-extrabold text-slate-900">
                  Hiring Dashboard
                </h3>

                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                  Active
                </span>
              </div>

              <div className="space-y-5">
                <div className="p-4 border rounded-2xl">
                  <div className="flex justify-between">
                    <span className="font-bold">
                      Frontend Developer
                    </span>

                    <span className="text-green-600 font-bold">
                      120 Applicants
                    </span>
                  </div>
                </div>

                <div className="p-4 border rounded-2xl">
                  <div className="flex justify-between">
                    <span className="font-bold">
                      Python Developer
                    </span>

                    <span className="text-green-600 font-bold">
                      87 Applicants
                    </span>
                  </div>
                </div>

                <div className="p-4 border rounded-2xl">
                  <div className="flex justify-between">
                    <span className="font-bold">
                      HR Executive
                    </span>

                    <span className="text-green-600 font-bold">
                      63 Applicants
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <p className="text-sm text-slate-700 font-semibold">
                  ATS Resume Builder Available
                </p>

                <button
                  onClick={onCreateResume}
                  className="mt-3 bg-blue-600 text-white px-5 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
                >
                  Build Resume
                </button>
              </div>

            </div>
          </div> */}
          
          <div className="relative">
  <div className="bg-white rounded-[32px] border border-slate-200 shadow-2xl overflow-hidden">

    {/* Top Banner */}
    {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white"> */}
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-5 sm:p-8 text-white">
      <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
        ATS Resume Builder
      </span>

      {/* <h3 className="text-3xl font-extrabold mt-4 leading-tight"> */}
      <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 leading-tight">
        Land More Interviews With A Professional Resume
      </h3>

      {/* <p className="mt-3 text-blue-100"> */}
      <p className="mt-2 text-sm sm:text-base text-blue-100">
        Build recruiter-friendly resumes in minutes and stand out from other applicants.
      </p>

      <button
        onClick={onCreateResume}
        className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition"
      >
        Create My Resume
      </button>
    </div>

    {/* Stats */}
    <div className="p-6">

      {/* <div className="grid grid-cols-3 gap-3 mb-6"> */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-blue-50 rounded-2xl p-4 text-center">
          {/* <h4 className="text-2xl font-extrabold text-blue-600"> */}
          <h4 className="text-xl sm:text-2xl font-extrabold text-blue-600">
            5000+
          </h4>

          <p className="text-xs text-slate-600">
            Resumes Built
          </p>
        </div>

        <div className="bg-indigo-50 rounded-2xl p-4 text-center">
          <h4 className="text-2xl font-extrabold text-indigo-600">
            1200+
          </h4>

          <p className="text-xs text-slate-600">
            Hired
          </p>
        </div>

        <div className="bg-green-50 rounded-2xl p-4 text-center">
          <h4 className="text-2xl font-extrabold text-green-600">
            95%
          </h4>

          <p className="text-xs text-slate-600">
            Success
          </p>
        </div>

      </div>

      {/* Benefits */}
      <div className="space-y-3">

        {/* <div className="flex items-center gap-3 p-4 rounded-2xl border"> */}
        <div className="flex items-center gap-3 p-3 rounded-xl border">
          <FiCheckCircle className="text-green-500 text-xl" />
          {/* <span className="font-semibold text-slate-700"> */}
          <span className="text-sm font-semibold text-slate-700">
            Recruiter Approved Resume Layouts
          </span>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-2xl border">
          <FiZap className="text-yellow-500 text-xl" />
          <span className="font-semibold text-slate-700">
            Faster Job Applications
          </span>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-2xl border">
          <FiFileText className="text-blue-500 text-xl" />
          <span className="font-semibold text-slate-700">
            Professional Resume Formatting
          </span>
        </div>

      </div>

      {/* Bottom CTA */}
      {/* <div className="mt-6 bg-slate-50 rounded-2xl p-5 border"> */}
      <div className="mt-4 bg-slate-50 rounded-xl p-4 border">

        <h4 className="font-bold text-slate-900">
          Ready To Build Your Resume?
        </h4>

        <p className="text-sm text-slate-500 mt-1">
          Start now and create a professional resume in minutes.
        </p>

        <button
          onClick={onCreateResume}
          className="w-full mt-4 bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition"
        >
          Start Building
        </button>

      </div>

    </div>

  </div>
</div>
          
        </div>
      </div>
    </section>
  );
}