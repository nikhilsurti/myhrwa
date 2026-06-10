// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App




// import React, { useState } from 'react';
// import Navbar from './components/navbar';
// // import Hero from './components/Hero';
// import TrustBadges from './components/TrustBadges';
// import Templates from './components/Templates';
// import Features from './components/Features';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import ResumeEditor from './components/ResumeEditor';

// export default function App() {
//   // State jo manage karega ki user Landing page par hai ya Live Resume Builder par
//   const [isBuilding, setIsBuilding] = useState(false);

//   // Agar user 'Create Resume' par click karta hai, toh use editor screen dikhao
//   if (isBuilding) {
//     return <ResumeEditor />;
//   }

//   // Default: Landing Page (Home Page)
//   return (
//     <div className="min-h-screen bg-white font-sans text-slate-900 scroll-smooth">
//       {/* Humne Navbar me onCreateResume prop pass kiya hai */}
//       <Navbar onCreateResume={() => setIsBuilding(true)} />
      
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
//         {/* Background Blobs (Modern Styling) */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-50">
//           <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px]" />
//           <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-400/10 blur-[120px]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
//             {/* Left Column Text */}
//             <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
//               <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide">
//                 <span>🚀</span> Fast, Simple & Recruiter-Approved
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
//                 Build a professional resume that gets you <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">promoted.</span>
//               </h1>
              
//               <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0">
//                 Only 2% of resumes make it past the initial round. Create an ATS-optimized, beautifully designed resume in just 5 minutes with MyHRWA.
//               </p>

//               {/* CTAs */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//                 <button 
//                   onClick={() => setIsBuilding(true)}
//                   className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-base"
//                 >
//                   Create My Resume
//                 </button>
//                 <button 
//                   onClick={() => setIsBuilding(true)}
//                   className="px-8 py-4 bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-100 hover:border-slate-300 transition-all text-base"
//                 >
//                   Upload Existing Resume
//                 </button>
//               </div>

//               {/* Trust Ratings */}
//               <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
//                 <div className="flex -space-x-2">
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
//                 </div>
//                 <div className="text-sm text-slate-600 font-semibold text-left">
//                   <div className="flex text-amber-400">★★★★★</div>
//                   4.8/5 Rating by over 10,000+ professionals
//                 </div>
//               </div>
//             </div>

//             {/* Right Column Preview Graphic */}
//             <div className="lg:col-span-5 relative">
//               <div className="relative mx-auto max-w-[420px] bg-white rounded-2xl shadow-2xl shadow-slate-300/60 p-5 border border-slate-100">
//                 <div className="absolute -top-4 -right-4 bg-indigo-500 text-white font-bold text-xs py-1.5 px-3 rounded-full shadow-lg">
//                   ATS Score: 94%
//                 </div>
                
//                 <div className="space-y-4">
//                   <div className="flex gap-4 items-center">
//                     <div className="h-14 w-14 rounded-full bg-slate-200 overflow-hidden">
//                       <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Profile" />
//                     </div>
//                     <div>
//                       <div className="h-4 w-32 bg-slate-800 rounded"></div>
//                       <div className="h-3 w-20 bg-slate-400 rounded mt-2"></div>
//                     </div>
//                   </div>
//                   <hr className="border-slate-100" />
//                   <div className="space-y-2">
//                     <div className="h-3 w-16 bg-blue-600 rounded"></div>
//                     <div className="h-3 w-full bg-slate-100 rounded"></div>
//                     <div className="h-3 w-[90%] bg-slate-100 rounded"></div>
//                   </div>
//                   <div className="space-y-2 pt-2">
//                     <div className="h-3 w-24 bg-blue-600 rounded"></div>
//                     <div className="grid grid-cols-2 gap-2">
//                       <div className="h-6 bg-slate-50 border border-slate-100 rounded flex items-center px-2"><div className="h-2 w-12 bg-slate-400 rounded"></div></div>
//                       <div className="h-6 bg-slate-50 border border-slate-100 rounded flex items-center px-2"><div className="h-2 w-16 bg-slate-400 rounded"></div></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Other Sections */}
//       <TrustBadges />
//       <Templates onSelectTemplate={() => setIsBuilding(true)} />
//       <Features />
//       <FAQ />
//       <Footer />
//     </div>
//   );
// }




// import React, { useState, useRef } from 'react';
// import Navbar from './components/navbar';
// import TrustBadges from './components/TrustBadges';
// import Templates from './components/Templates';
// import Features from './components/Features';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import ResumeEditor from './components/ResumeEditor';

// export default function App() {
//   const [isBuilding, setIsBuilding] = useState(false);
//   const fileInputRef = useRef(null);

//   // Hidden PDF input trigger handler
//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       alert(`"${file.name}" uploaded successfully! Importing data into Builder...`);
//       setIsBuilding(true); // File select hone ke baad direct builder open karein
//     }
//   };

//   if (isBuilding) {
//     return <ResumeEditor />;
//   }

//   return (
//     <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans'] text-slate-900 scroll-smooth">
//       {/* Navbar with Action */}
//       <Navbar onCreateResume={() => setIsBuilding(true)} />
      
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
//         {/* Background Blobs */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-50">
//           <div className="absolute top-[-10%] left-[5%] w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[100px]" />
//           <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-400/10 blur-[120px]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
//             {/* Left Column Text */}
//             <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
//               <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide">
//                 <span>🚀</span> Fast, Simple & Recruiter-Approved
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
//                 Build a professional resume that gets you <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">promoted.</span>
//               </h1>
              
//               <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto lg:mx-0">
//                 Only 2% of resumes make it past the initial round. Create an ATS-optimized, beautifully designed resume in just 5 minutes with MyHRWA.
//               </p>

//               {/* Action Buttons with Input File Trigger */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//                 <button 
//                   onClick={() => setIsBuilding(true)}
//                   className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 hover:scale-[1.01] transition-all text-sm"
//                 >
//                   Create My Resume
//                 </button>
                
//                 {/* Hidden input type file */}
//                 <input 
//                   type="file" 
//                   ref={fileInputRef} 
//                   onChange={handleFileChange} 
//                   accept=".pdf,.doc,.docx" 
//                   className="hidden" 
//                 />
                
//                 <button 
//                   onClick={handleUploadClick}
//                   className="px-8 py-4 bg-slate-50 border-2 border-slate-200 text-slate-700 font-bold rounded-2xl hover:bg-slate-100 transition-all text-sm"
//                 >
//                   Upload Existing Resume
//                 </button>
//               </div>

//               {/* Trust badges */}
//               <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
//                 <div className="flex -space-x-2">
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
//                 </div>
//                 <div className="text-xs text-slate-500 font-bold text-left">
//                   <div className="flex text-amber-400 text-xs mb-0.5">★★★★★</div>
//                   4.8/5 Rating by over 10,000+ professionals
//                 </div>
//               </div>
//             </div>

//             {/* Right Column realistic mini resume preview card */}
//             <div className="lg:col-span-5 relative">
//               <div className="relative mx-auto max-w-[400px] bg-white rounded-3xl shadow-2xl shadow-slate-300/60 p-6 border border-slate-100/80">
//                 <div className="absolute -top-4 -right-4 bg-indigo-500 text-white font-extrabold text-xs py-1.5 px-3.5 rounded-full shadow-lg">
//                   ATS Score: 94%
//                 </div>
                
//                 <div className="space-y-4 text-slate-400">
//                   <div className="flex gap-4 items-center">
//                     <div className="h-14 w-14 rounded-full bg-slate-200 overflow-hidden">
//                       <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Profile" />
//                     </div>
//                     <div>
//                       <div className="h-4 w-32 bg-slate-800 rounded"></div>
//                       <div className="h-3 w-20 bg-slate-300 rounded mt-2"></div>
//                     </div>
//                   </div>
//                   <hr className="border-slate-100" />
//                   <div className="space-y-2">
//                     <div className="h-3 w-16 bg-blue-600 rounded"></div>
//                     <div className="h-3 w-full bg-slate-100 rounded"></div>
//                     <div className="h-3 w-[90%] bg-slate-100 rounded"></div>
//                   </div>
//                   <div className="space-y-2 pt-2">
//                     <div className="h-3 w-24 bg-blue-600 rounded"></div>
//                     <div className="grid grid-cols-2 gap-2">
//                       <div className="h-6 bg-slate-50 border border-slate-100 rounded flex items-center px-2"><div className="h-2 w-12 bg-slate-400 rounded"></div></div>
//                       <div className="h-6 bg-slate-50 border border-slate-100 rounded flex items-center px-2"><div className="h-2 w-16 bg-slate-400 rounded"></div></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Sections */}
//       <TrustBadges />
//       <Templates onSelectTemplate={() => setIsBuilding(true)} />
//       <Features />
//       <FAQ />
//       <Footer />
//     </div>
//   );
// }




// import React, { useState, useRef } from 'react';
// import Navbar from './components/navbar';
// import TrustBadges from './components/TrustBadges';
// import Templates from './components/Templates';
// import Features from './components/Features';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import ResumeEditor from './components/ResumeEditor';

// export default function App() {
//   const [isBuilding, setIsBuilding] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       alert(`"${file.name}" uploaded successfully! Importing data into Builder...`);
//       setIsBuilding(true);
//     }
//   };

//   if (isBuilding) {
//     return <ResumeEditor />;
//   }

//   return (
//     <div className="min-h-screen bg-[#fafbfc] font-['Plus_Jakarta_Sans'] text-slate-900 scroll-smooth">
//       {/* Navbar with Action */}
//       <Navbar onCreateResume={() => setIsBuilding(true)} />
      
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
//         {/* Background Blobs */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-40">
//           <div className="absolute top-[-10%] left-[5%] w-[450px] h-[450px] rounded-full bg-blue-300/20 blur-[100px]" />
//           <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] rounded-full bg-indigo-300/10 blur-[120px]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
//             {/* Left Column Text */}
//             <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
//               <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide">
//                 <span>🚀</span> Only 2% of resumes win. Yours will be one of them.
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
//                 This resume builder gets you <span className="text-blue-600 relative inline-block">an interview<span className="absolute left-0 bottom-1 w-full h-[6px] bg-blue-100/80 -z-10 rounded"></span></span>
//               </h1>
              
//               <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto lg:mx-0">
//                 Create recruiter-tested resumes in minutes. Optimized strictly according to ATS guidelines to ensure your profile bypasses automated screening.
//               </p>

//               {/* Action Buttons with Input File Trigger */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//                 <button 
//                   onClick={() => setIsBuilding(true)}
//                   className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all text-sm"
//                 >
//                   Create My Resume
//                 </button>
                
//                 <input 
//                   type="file" 
//                   ref={fileInputRef} 
//                   onChange={handleFileChange} 
//                   accept=".pdf,.doc,.docx" 
//                   className="hidden" 
//                 />
                
//                 <button 
//                   onClick={handleUploadClick}
//                   className="px-8 py-4 bg-blue-50 text-blue-600 border border-blue-100 font-bold rounded-2xl hover:bg-blue-100/50 transition-all text-sm"
//                 >
//                   Upload Existing Resume
//                 </button>
//               </div>

//               {/* Trust badges */}
//               <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
//                 <div className="flex -space-x-2">
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
//                 </div>
//                 <div className="text-xs text-slate-500 font-bold text-left">
//                   <div className="flex text-amber-400 text-xs mb-0.5">★★★★★</div>
//                   <span className="font-extrabold text-slate-800">4.4 out of 5</span> by 37,000+ happy professionals
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Hyper Realistic Resume Mockup (Resume.io Style) */}
//             <div className="lg:col-span-6 relative flex justify-center">
              
//               {/* Main Document Frame */}
//               <div className="relative w-full max-w-[430px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 border border-slate-100 flex flex-col gap-4 font-sans text-left">
                
//                 {/* Header Block with Profile Pic */}
//                 <div className="flex justify-between items-start gap-4">
//                   <div className="flex gap-4 items-center">
//                     <div className="h-16 w-16 rounded-full bg-slate-100 overflow-hidden ring-4 ring-blue-50/50">
//                       <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Anika Kumar" />
//                     </div>
//                     <div>
//                       <h3 className="font-black text-slate-900 text-base">Anika Kumar</h3>
//                       <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-0.5">Senior Teacher</p>
//                     </div>
//                   </div>
                  
//                   {/* Floating Score Badge */}
//                   <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full shadow-sm">
//                     <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
//                     <span className="text-[10px] font-black text-green-700">81% Resume Score</span>
//                   </div>
//                 </div>

//                 <hr className="border-slate-100" />

//                 {/* Grid Content */}
//                 <div className="grid grid-cols-12 gap-4">
                  
//                   {/* Left Column Sidebar */}
//                   <div className="col-span-4 bg-slate-50/80 p-3 rounded-2xl flex flex-col gap-4">
//                     <div className="space-y-2">
//                       <div className="h-2.5 w-10 bg-slate-900 rounded"></div>
//                       <div className="space-y-1 text-[8px] font-semibold text-slate-400">
//                         <div>✉ anika@example.com</div>
//                         <div>📍 New Delhi, India</div>
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <div className="h-2.5 w-12 bg-slate-900 rounded"></div>
//                       <div className="flex flex-wrap gap-1">
//                         {["Mentoring", "Pedagogy", "Planning"].map((skill, i) => (
//                           <span key={i} className="text-[7px] font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded-md">{skill}</span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Right Column Body */}
//                   <div className="col-span-8 space-y-4">
//                     <div className="space-y-1.5">
//                       <div className="h-2.5 w-16 bg-blue-600 rounded"></div>
//                       <p className="text-[8px] text-slate-500 font-medium leading-relaxed">
//                         Passionate educator with over 6 years of experience developing creative curricula. Specialised in fostering student engagement and improving literacy rates by 30%.
//                       </p>
//                     </div>
                    
//                     <div className="space-y-2">
//                       <div className="h-2.5 w-20 bg-blue-600 rounded"></div>
//                       <div className="border-l-2 border-blue-100 pl-2 space-y-1">
//                         <div className="flex justify-between items-center text-[8px] font-bold text-slate-800">
//                           <span>Lead Teacher at DPS</span>
//                           <span className="text-slate-400">2021 - Present</span>
//                         </div>
//                         <p className="text-[7px] text-slate-400 leading-normal">Developed collaborative learning modules for high school groups.</p>
//                       </div>
//                     </div>
//                   </div>
                  
//                 </div>

//                 {/* FLOATING CHAT BUBBLE (Resume.io Style "Ask AI") */}
//                 <div className="absolute -bottom-8 -right-4 bg-white border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.1)] px-4 py-3 rounded-2xl flex items-center gap-2 max-w-[240px] z-10 animate-bounce" style={{ animationDuration: '3s' }}>
//                   <span className="text-base">🤖</span>
//                   <div className="text-left">
//                     <p className="text-[9px] font-black text-slate-900">Ask AI coach anything...</p>
//                     <p className="text-[7px] font-bold text-slate-400 mt-0.5">"Suggest active verbs for my teacher role"</p>
//                   </div>
//                 </div>

//                 {/* FLOATING ATS OPTIMIZATION BADGE */}
//                 <div className="absolute -left-10 top-[40%] bg-blue-600 text-white shadow-lg shadow-blue-500/20 px-3.5 py-2.5 rounded-2xl flex items-center gap-2 z-10 transform -rotate-6">
//                   <span className="text-xs">⚡</span>
//                   <span className="text-[10px] font-extrabold tracking-wide uppercase">ATS Perfect</span>
//                 </div>

//               </div>
//             </div>
            
//           </div>
//         </div>
//       </section>

//       {/* Sections */}
//       <TrustBadges />
//       <Templates onSelectTemplate={() => setIsBuilding(true)} />
//       <Features />
//       <FAQ />
//       <Footer />
//     </div>
//   );
// }




// import React, { useState, useRef } from 'react';
// import Navbar from './components/navbar';
// import TrustBadges from './components/TrustBadges';
// import Templates from './components/Templates';
// import Features from './components/Features';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import ResumeEditor from './components/ResumeEditor';

// export default function App() {
//   const [isBuilding, setIsBuilding] = useState(false);
//   const [selectedTemplateId, setSelectedTemplateId] = useState('t2'); // default template
//   const fileInputRef = useRef(null);

//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       alert(`"${file.name}" uploaded successfully! Importing data into Builder...`);
//       setSelectedTemplateId('t2'); // default to modern tech
//       setIsBuilding(true);
//     }
//   };

//   // Jab user kisi template par click karega:
//   const handleSelectTemplate = (templateId) => {
//     setSelectedTemplateId(templateId); // Selected template store karein
//     setIsBuilding(true); // Builder open karein
//   };

//   if (isBuilding) {
//     // Editor ko template ID aur Back to Home handler pass karenge
//     return (
//       <ResumeEditor 
//         initialTemplateId={selectedTemplateId} 
//         onBack={() => setIsBuilding(false)} 
//       />
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans'] text-slate-900 scroll-smooth">
//       {/* Navbar with Action */}
//       <Navbar onCreateResume={() => handleSelectTemplate('t2')} />
      
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
//         {/* Background Blobs */}
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden opacity-40">
//           <div className="absolute top-[-10%] left-[5%] w-[450px] h-[450px] rounded-full bg-blue-400/20 blur-[100px]" />
//           <div className="absolute top-[20%] right-[-10%] w-[550px] h-[550px] rounded-full bg-indigo-300/10 blur-[120px]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
            
//             {/* Left Column Text */}
//             <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
//               <div className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-wide">
//                 <span>🚀</span> Only 2% of resumes win. Yours will be one of them.
//               </div>
              
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
//                 This resume builder gets you <span className="text-blue-600 relative inline-block">an interview<span className="absolute left-0 bottom-1 w-full h-[6px] bg-blue-100/80 -z-10 rounded"></span></span>
//               </h1>
              
//               <p className="text-slate-600 text-sm sm:text-base font-semibold leading-relaxed max-w-xl mx-auto lg:mx-0">
//                 Create recruiter-tested resumes in minutes. Optimized strictly according to ATS guidelines to ensure your profile bypasses automated screening.
//               </p>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
//                 <button 
//                   onClick={() => handleSelectTemplate('t2')}
//                   className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 transition-all text-sm"
//                 >
//                   Create My Resume
//                 </button>
                
//                 <input 
//                   type="file" 
//                   ref={fileInputRef} 
//                   onChange={handleFileChange} 
//                   accept=".pdf,.doc,.docx" 
//                   className="hidden" 
//                 />
                
//                 <button 
//                   onClick={handleUploadClick}
//                   className="px-8 py-4 bg-blue-50 text-blue-600 border border-blue-100 font-bold rounded-2xl hover:bg-blue-100/50 transition-all text-sm"
//                 >
//                   Upload Existing Resume
//                 </button>
//               </div>

//               {/* Trust badges */}
//               <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
//                 <div className="flex -space-x-2">
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
//                   <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User" />
//                 </div>
//                 <div className="text-xs text-slate-500 font-bold text-left">
//                   <div className="flex text-amber-400 text-xs mb-0.5">★★★★★</div>
//                   <span className="font-extrabold text-slate-800">4.4 out of 5</span> by 37,000+ happy professionals
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Real Preview Mockup */}
//             <div className="lg:col-span-6 relative flex justify-center">
//               <div className="relative w-full max-w-[430px] bg-white rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-6 border border-slate-100 flex flex-col gap-4 font-sans text-left">
//                 <div className="flex justify-between items-start gap-4">
//                   <div className="flex gap-4 items-center">
//                     <div className="h-16 w-16 rounded-full bg-slate-100 overflow-hidden ring-4 ring-blue-50/50">
//                       <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Anika Kumar" />
//                     </div>
//                     <div>
//                       <h3 className="font-black text-slate-900 text-base">Anika Kumar</h3>
//                       <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mt-0.5">Senior Teacher</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full shadow-sm">
//                     <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
//                     <span className="text-[10px] font-black text-green-700">81% Resume Score</span>
//                   </div>
//                 </div>

//                 <hr className="border-slate-100" />

//                 <div className="grid grid-cols-12 gap-4">
//                   <div className="col-span-4 bg-slate-50/80 p-3 rounded-2xl flex flex-col gap-4">
//                     <div className="space-y-2">
//                       <div className="h-2.5 w-10 bg-slate-900 rounded"></div>
//                       <div className="space-y-1 text-[8px] font-semibold text-slate-400">
//                         <div>✉ anika@example.com</div>
//                         <div>📍 New Delhi, India</div>
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <div className="h-2.5 w-12 bg-slate-900 rounded"></div>
//                       <div className="flex flex-wrap gap-1">
//                         {["Mentoring", "Pedagogy", "Planning"].map((skill, i) => (
//                           <span key={i} className="text-[7px] font-bold text-slate-600 bg-white border border-slate-200 px-1.5 py-0.5 rounded-md">{skill}</span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="col-span-8 space-y-4">
//                     <div className="space-y-1.5">
//                       <div className="h-2.5 w-16 bg-blue-600 rounded"></div>
//                       <p className="text-[8px] text-slate-500 font-medium leading-relaxed">
//                         Passionate educator with over 6 years of experience developing creative curricula. Specialised in fostering student engagement and improving literacy rates by 30%.
//                       </p>
//                     </div>
//                     <div className="space-y-2">
//                       <div className="h-2.5 w-20 bg-blue-600 rounded"></div>
//                       <div className="border-l-2 border-blue-100 pl-2 space-y-1">
//                         <div className="flex justify-between items-center text-[8px] font-bold text-slate-800">
//                           <span>Lead Teacher at DPS</span>
//                           <span className="text-slate-400">2021 - Present</span>
//                         </div>
//                         <p className="text-[7px] text-slate-400 leading-normal">Developed collaborative learning modules for high school groups.</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="absolute -bottom-8 -right-4 bg-white border border-slate-100 shadow-[0_10px_25px_rgba(0,0,0,0.1)] px-4 py-3 rounded-2xl flex items-center gap-2 max-w-[240px] z-10 animate-bounce" style={{ animationDuration: '3s' }}>
//                   <span className="text-base">🤖</span>
//                   <div className="text-left">
//                     <p className="text-[9px] font-black text-slate-900">Ask AI coach anything...</p>
//                     <p className="text-[7px] font-bold text-slate-400 mt-0.5">"Suggest active verbs for my teacher role"</p>
//                   </div>
//                 </div>

//                 <div className="absolute -left-10 top-[40%] bg-blue-600 text-white shadow-lg shadow-blue-500/20 px-3.5 py-2.5 rounded-2xl flex items-center gap-2 z-10 transform -rotate-6">
//                   <span className="text-xs">⚡</span>
//                   <span className="text-[10px] font-extrabold tracking-wide uppercase">ATS Perfect</span>
//                 </div>

//               </div>
//             </div>
            
//           </div>
//         </div>
//       </section>

//       {/* Sections */}
//       <TrustBadges />
//       <Templates onSelectTemplate={handleSelectTemplate} />
//       <Features />
//       <FAQ />
//       <Footer />
//     </div>
//   );
// }







//new one okay /

// import React, { useState } from "react";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import TrustedCompanies from "./components/TrustedCompanies";
// import Services from "./components/Services";
// import WhyChooseUs from "./components/WhyChooseUs";
// import ResumeBuilderShowcase from "./components/ResumeBuilderShowcase";
// import FeaturedJobs from "./components/FeaturedJobs";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// import ResumeEditor from "./components/ResumeEditor";

// export default function App() {
//   const [isBuilding, setIsBuilding] = useState(false);

//   if (isBuilding) {
//     return (
//       <ResumeEditor
//         initialTemplateId="t2"
//         onBack={() => setIsBuilding(false)}
//       />
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans']">
//       <Navbar onCreateResume={() => setIsBuilding(true)} />

//       <Hero onCreateResume={() => setIsBuilding(true)} />

//       <TrustedCompanies />

//       <Services />

//       <WhyChooseUs />

//       <ResumeBuilderShowcase
//         onCreateResume={() => setIsBuilding(true)}
//       />

//       <FeaturedJobs />

//       <Testimonials />

//       <Contact />

//       <Footer />
//     </div>
//   );
// }





//latest //

import React, { useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import ResumeBuilderShowcase from "./components/ResumeBuilderShowCase";
import FeaturedJobs from "./components/FeaturedJobs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import ResumeEditor from "./components/ResumeEditor";
// import ResumeEditor from "./components/ResumeEditor";
import ResumeEditor from "./components/resume/ResumeEditor";
import BuildResumeModal from "./components/BuildResumeModal";
import { parseResume } from "./api/resumeService";


export default function App() {
  
  const [parsedResume, setParsedResume] = useState(null);
  console.log("HOME PAGE parsedResume =>", parsedResume);
  const [isBuilding, setIsBuilding] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  const handleCreateResume = () => {
    setShowModal(true);
  };

  const handleCreateFromScratch = () => {
    setShowModal(false);
    setIsBuilding(true);
  };

  // const handleUploadResume = (file) => {
  //   alert(`${file.name} uploaded successfully`);

  //   setShowModal(false);
  //   setIsBuilding(true);
  // };
  const handleUploadResume = async (file) => {
  try {
    const formData = new FormData();

    formData.append("resume", file);

    const res = await parseResume(formData);

console.log("PARSED DATA =>", res.data);

setParsedResume(res.data);

console.log("STATE BEFORE BUILD =>", res.data);

setShowModal(false);

setTimeout(() => {
  setIsBuilding(true);
}, 100);
    // const res = await parseResume(formData);

    // console.log("PARSED DATA =>", res.data);

    // alert("Resume parsed successfully");

    // setShowModal(false);
    // setIsBuilding(true);

  } catch (error) {
    console.error("PARSE ERROR =>", error);
    setParsedResume(res.data);

    alert("Resume parsing failed");
  }
};
if (isBuilding) {
  return (
    <ResumeEditor
      initialTemplateId="template2"
      parsedResume={parsedResume}
      onBack={() => setIsBuilding(false)}
    />
  );
}  
// if (isBuilding) {
  //   return (
  //     <ResumeEditor
  //       initialTemplateId="template2"
  //       onBack={() => setIsBuilding(false)}
  //     />
  //   );
  // }

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans']">

      <BuildResumeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onCreateFromScratch={handleCreateFromScratch}
        onUploadResume={handleUploadResume}
      />

      <Navbar onCreateResume={handleCreateResume} />

      <Hero onCreateResume={handleCreateResume} />

      <TrustedCompanies />

      <Services />

      <WhyChooseUs />

      <ResumeBuilderShowcase
        onCreateResume={handleCreateResume}
      />

      <FeaturedJobs />

      <Testimonials />

      <Contact />

      <Footer />
    </div>
  );
}