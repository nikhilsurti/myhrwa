import React, { useState, useRef } from 'react';

// 31 Premium Templates Database with specific metadata
const templatesData = [
  { id: 't1', cardHeader: 'Entry Level', name: 'Avery Carter', category: 'creative', color: '#eab308', nameText: 'Avery Carter', titleText: 'Junior Product Designer', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', layout: 'entry-level' },
  { id: 't2', cardHeader: 'Classic Cascade', name: 'John Smith', category: 'traditional', color: '#0f4c81', nameText: 'John Smith', titleText: 'Senior Sales Associate', photo: null, layout: 'cascade' },
  { id: 't3', cardHeader: 'Traditional Serif', name: 'Tiffany Giroux', category: 'traditional', color: '#1e293b', nameText: 'Tiffany Giroux', titleText: 'Freight & Logistics Analyst', photo: null, layout: 'traditional' },
  { id: 't4', cardHeader: 'Professional Teal', name: 'Sophie Walton', category: 'professional', color: '#0f766e', nameText: 'Sophie Walton', titleText: 'PR Director', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', layout: 'professional' },
  { id: 't5', cardHeader: 'Prime ATS', name: 'Herman Walton', category: 'modern', color: '#0f172a', nameText: 'Herman Walton', titleText: 'Financial Analyst', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', layout: 'prime-ats' },
  { id: 't6', cardHeader: 'Modern Developer', name: 'Karthik Chaudhary', category: 'modern', color: '#0d9488', nameText: 'Karthik Chaudhary', titleText: 'Senior Software Engineer', photo: null, layout: 'modern-tech' },
  { id: 't7', cardHeader: 'Academic Minimal', name: 'Robert Vance', category: 'traditional', color: '#111827', nameText: 'Robert Vance', titleText: 'Operations Director', photo: null, layout: 'academic' },
  { id: 't8', cardHeader: 'Startup Creative', name: 'Anika Kumar', category: 'creative', color: '#7c3aed', nameText: 'Anika Kumar', titleText: 'Art Director', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', layout: 'designer' },
  { id: 't9', cardHeader: 'Technical Elite', name: 'Daniel Johnson', category: 'modern', color: '#2563eb', nameText: 'Daniel Johnson', titleText: 'Full Stack Engineer', photo: null, layout: 'modern-tech' },
  { id: 't10', cardHeader: 'Corporate Leader', name: 'Linda Harrison', category: 'professional', color: '#4f46e5', nameText: 'Linda Harrison', titleText: 'Marketing Manager', photo: null, layout: 'corporate-leader' },
  { id: 't11', cardHeader: 'Research Scholar', name: 'William Thompson', category: 'traditional', color: '#1e293b', nameText: 'William Thompson', titleText: 'Academic Researcher', photo: null, layout: 'traditional' },
  { id: 't12', cardHeader: 'UI Specialist', name: 'Olivia Martinez', category: 'creative', color: '#db2777', nameText: 'Olivia Martinez', titleText: 'UX Designer', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', layout: 'designer' },
  { id: 't13', cardHeader: 'Project Director', name: 'David Miller', category: 'professional', color: '#0369a1', nameText: 'David Miller', titleText: 'Project Manager', photo: null, layout: 'prime-ats' },
  { id: 't14', cardHeader: 'HR Coordinator', name: 'Sophia Taylor', category: 'professional', color: '#0891b2', nameText: 'Sophia Taylor', titleText: 'HR Specialist', photo: null, layout: 'classic' },
  { id: 't15', cardHeader: 'Corporate Executive', name: 'James Anderson', category: 'traditional', color: '#0f172a', nameText: 'James Anderson', titleText: 'Sales Director', photo: null, layout: 'traditional' },
  { id: 't16', cardHeader: 'Data Scientist', name: 'Emily Thomas', category: 'modern', color: '#0d9488', nameText: 'Emily Thomas', titleText: 'Data Scientist', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', layout: 'professional' },
  { id: 't17', cardHeader: 'Operations Lead', name: 'Michael Jackson', category: 'professional', color: '#4f46e5', nameText: 'Michael Jackson', titleText: 'Operations Manager', photo: null, layout: 'prime-ats' },
  { id: 't18', cardHeader: 'Creative Writer', name: 'Elizabeth White', category: 'creative', color: '#ec4899', nameText: 'Elizabeth White', titleText: 'Creative Writer', photo: null, layout: 'creative-writer' },
  { id: 't19', cardHeader: 'Network Pro', name: 'Richard Harris', category: 'modern', color: '#1e3a8a', nameText: 'Richard Harris', titleText: 'Network Engineer', photo: null, layout: 'modern-tech' },
  { id: 't20', cardHeader: 'Product Director', name: 'Barbara Martin', category: 'professional', color: '#111827', nameText: 'Barbara Martin', titleText: 'Product Director', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80', layout: 'professional' },
  { id: 't21', cardHeader: 'Legal Counsel', name: 'Joseph Clark', category: 'traditional', color: '#1e3a8a', nameText: 'Joseph Clark', titleText: 'Legal Consultant', photo: null, layout: 'traditional' },
  { id: 't22', cardHeader: 'Financial Advisor', name: 'Susan Lewis', category: 'traditional', color: '#0369a1', nameText: 'Susan Lewis', titleText: 'Financial Advisor', photo: null, layout: 'concept' },
  { id: 't23', cardHeader: 'Cloud Architect', name: 'Thomas Robinson', category: 'modern', color: '#0f766e', nameText: 'Thomas Robinson', titleText: 'Software Architect', photo: null, layout: 'modern-tech' },
  { id: 't24', cardHeader: 'Lead Designer', name: 'Jessica Walker', category: 'creative', color: '#7c3aed', nameText: 'Jessica Walker', titleText: 'Graphic Designer', photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80', layout: 'designer' },
  { id: 't25', cardHeader: 'PR Expert', name: 'Charles Young', category: 'professional', color: '#0d9488', nameText: 'Charles Young', titleText: 'PR Manager', photo: null, layout: 'prime-ats' },
  { id: 't26', cardHeader: 'Clinical Assistant', name: 'Margaret Allen', category: 'traditional', color: '#4f46e5', nameText: 'Margaret Allen', titleText: 'Clinical Assistant', photo: null, layout: 'traditional' },
  { id: 't27', cardHeader: 'DevOps Engineer', name: 'Christopher King', category: 'modern', color: '#0891b2', nameText: 'Christopher King', titleText: 'DevOps Engineer', photo: null, layout: 'modern-tech' },
  { id: 't28', cardHeader: 'Event Planner', name: 'Sarah Wright', category: 'creative', color: '#db2777', nameText: 'Sarah Wright', titleText: 'Event Planner', photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80', layout: 'designer' },
  { id: 't29', cardHeader: 'Business Analyst', name: 'Daniel Scott', category: 'modern', color: '#1e293b', nameText: 'Daniel Scott', titleText: 'Business Analyst', photo: null, layout: 'concept' },
  { id: 't30', cardHeader: 'Executive Assistant', name: 'Nancy Green', category: 'traditional', color: '#1e40af', nameText: 'Nancy Green', titleText: 'Executive Assistant', photo: null, layout: 'traditional' },
  { id: 't31', cardHeader: 'Supply Chain Pro', name: 'Karen Baker', category: 'professional', color: '#0f766e', nameText: 'Karen Baker', titleText: 'Supply Specialist', photo: null, layout: 'corporate-leader' }
];

const categoryDetails = {
  all: { title: 'All Templates', subtitle: 'Explore over 30+ highly-optimized recruiter designs' },
  traditional: { title: 'Traditional', subtitle: '2,400,000+ users chose this template style' },
  modern: { title: 'Modern', subtitle: '1,850,000+ tech and business professionals chose this style' },
  professional: { title: 'Professional', subtitle: '3,100,000+ executive users chose this corporate style' },
  creative: { title: 'Creative', subtitle: '950,000+ design and marketing leaders chose this creative style' }
};

// HELPER TO GENERATE HIGH-FIDELITY COMPREHENSIVE TEXT FOR EACH TEMPLATE SPECIFIC PROFESSION
function getTemplateDynamicContent(tpl) {
  const title = tpl.titleText || "Specialist";
  const name = tpl.nameText || "Candidate";
  const initials = name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase();
  
  // Default / General
  let summary = `Result-driven and highly motivated ${title} with over 5+ years of experience in managing corporate scale tasks, directing strategic client negotiations, and building responsive horizontal workflows. Proven track record of optimizing page processes and reducing turnaround cycle limits by 35%.`;
  
  let exp1 = {
    role: `Lead ${title}`,
    company: "ZARA International Ltd.",
    date: "2022 - Present",
    desc: [
      "Supervised regional operations, boosting productivity metrics by 22% through lean workflow designs.",
      "Directed a team of 12 personnel to execute monthly corporate strategy campaigns."
    ]
  };
  
  let exp2 = {
    role: `Senior ${title}`,
    company: "Dunkin' Donuts Inc.",
    date: "2018 - 2022",
    desc: [
      "Optimized resource channels across 5 active branches, reducing overhead waste by 15% consistently.",
      "Maintained strict quality control protocols, earning the local Branch Excellence Award."
    ]
  };

  let edu1 = { degree: "M.Sc. in Operations Management", school: "Delhi University", date: "2016 - 2018" };
  let edu2 = { degree: "B.Sc. in Business Admin", school: "Amity University", date: "2013 - 2016" };

  let achievements = [
    "Winner of National Smart India Hackathon Award for Operational Innovation.",
    "Engineered strategic inventory workflow that cut regional transport delays by 20%."
  ];

  let skills = ["Project Planning", "Client Relations", "Team Leadership", "Budget Control", "Six Sigma", "CRM Systems"];
  let languages = ["English (Professional)", "Hindi (Native)"];
  let interests = ["Technical Writer — Medium (5k+ readers)", "Open Source Contributor — Ecosystem"];

  // Tech Profiles (Engineers / Architects / DevOps / Scientists)
  if (title.toLowerCase().includes("architect") || title.toLowerCase().includes("engineer") || title.toLowerCase().includes("developer") || title.toLowerCase().includes("technical") || title.toLowerCase().includes("devops") || title.toLowerCase().includes("scientist")) {
    summary = `Result-driven Software Engineer with 4+ years of experience in building modern web applications. Specialized in React, Node.js, and cloud technologies. Proven track record of optimizing page load speed by 40%.`;
    exp1 = {
      role: `Software Engineer`,
      company: "Tech Corp Inc.",
      date: "2022 - Present",
      desc: [
        "Built modern React dashboards reducing initial bundle size by 35%.",
        "Collaborated with UX team to integrate fluid Tailwind designs.",
        "Led a team of 3 developers to deliver scalable cloud integrations."
      ]
    };
    exp2 = {
      role: `Junior Developer`,
      company: "ByteCraft Developer Corp",
      date: "2019 - 2022",
      desc: [
        "Maintained database stability and integrated automated backend APIs.",
        "Created optimized frontend components following modern design systems."
      ]
    };
    edu1 = { degree: "B.Tech in Computer Science", school: "IIT Delhi", date: "2018 - 2022" };
    edu2 = { degree: "Diploma in Information Tech", school: "NSIT Delhi", date: "2015 - 2018" };
    achievements = [
      "Winner of National Smart India Hackathon 2021.",
      "Optimized enterprise product rendering performance by 40%."
    ];
    skills = ["React", "JavaScript", "Tailwind CSS", "Node.js", "SQL", "Git"];
    interests = ["Technical Writer — Medium (5k+ readers)", "Open Source Contributor — React ecosystem"];
  } 
  // Analyst / Finance
  else if (title.toLowerCase().includes("analyst") || title.toLowerCase().includes("finance") || title.toLowerCase().includes("logistics")) {
    summary = `Detail-oriented ${title} specialized in quantitative data modeling, budget forecasting, and converting complex analytical metrics into direct business growth.`;
    exp1 = {
      role: `Senior Financial ${title}`,
      company: "Apex Analytics Group",
      date: "2022 - Present",
      desc: [
        "Developed robust projection models helping secure $2.5M Series-A venture funds.",
        "Conducted client market risk assessments, reducing investment loss rates by 14%."
      ]
    };
    exp2 = {
      role: `Logistics & Financial Associate`,
      company: "Core Consulting Corp",
      date: "2019 - 2022",
      desc: [
        "Optimized route planning coordinates, saving company transport fuel costs by 18%.",
        "Prepared variance reports and monthly operational summaries for executive reviews."
      ]
    };
    edu1 = { degree: "MBA in Finance", school: "FMS Delhi", date: "2017 - 2019" };
    edu2 = { degree: "B.Com (Honours)", school: "SRCC Delhi", date: "2014 - 2017" };
    achievements = [
      "Identified redundant regional channels, cutting quarterly corporate waste by $35,000.",
      "Designed analytical targets tracking sheets used by 3 major enterprise business units."
    ];
    skills = ["Financial Modeling", "PowerBI & Tableau", "SAS Analytics", "Advanced Excel", "SQL Queries", "Risk Planning"];
    interests = ["Stock Trading Club Member", "Charity Fundraiser Organizer", "Economic Blog Writer — Substack"];
  } 
  // Creative / Design
  else if (title.toLowerCase().includes("designer") || title.toLowerCase().includes("art") || title.toLowerCase().includes("creative") || title.toLowerCase().includes("writer")) {
    summary = `Award-winning Creative ${title} focused on crafting seamless user experiences, defining detailed layout guidelines, and directing cohesive digital branding solutions.`;
    exp1 = {
      role: `Senior UI/UX ${title}`,
      company: "Pixel Perfect Digital Agency",
      date: "2021 - Present",
      desc: [
        "Directed product design revamp of 5 global e-commerce portals, boosting signups by 24%.",
        "Designed and maintained unified interactive libraries used by 45+ engineers."
      ]
    };
    exp2 = {
      role: `Creative Visual ${title}`,
      company: "Studio Next Creative Inc.",
      date: "2018 - 2021",
      desc: [
        "Designed high-impact visual banners, typography guidelines, and vector assets.",
        "Prepared marketing design decks that helped close 4 premium enterprise contracts."
      ]
    };
    edu1 = { degree: "M.Des in Communication", school: "NID Ahmedabad", date: "2016 - 2018" };
    edu2 = { degree: "B.Des in Graphic Design", school: "NIFT Delhi", date: "2012 - 2016" };
    achievements = [
      "Secured nomination for Best Interface Design at the Regional Design Impact Awards.",
      "Developed interactive funnel flow that increased active monthly users by 20%."
    ];
    skills = ["Figma & Sketch", "Adobe Creative Suite", "Design Systems", "Prototyping", "Typography", "HTML & Tailwind"];
    interests = ["Photography Hobbyist", "Fine Arts Volunteer Work", "UI Typography Workshops"];
  }

  return { name, title, initials, summary, exp1, exp2, edu1, edu2, achievements, skills, languages, interests };
}

export default function Templates({ onSelectTemplate }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedColors, setSelectedColors] = useState({});
  const [zoomedTemplateId, setZoomedTemplateId] = useState(null);
  const scrollRef = useRef(null);

  const filteredTemplates = activeCategory === 'all' 
    ? templatesData 
    : templatesData.filter(t => t.category === activeCategory);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - 300 : scrollLeft + 300;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const colorSwatches = ['#1e3a8a', '#0d9488', '#7c3aed', '#be123c', '#0f766e'];

  return (
    <section id="templates" className="py-24 lg:py-32 bg-[#f8fafc] border-t border-slate-100 font-['Plus_Jakarta_Sans'] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Categories Pills Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['all', 'traditional', 'modern', 'professional', 'creative'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat 
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10' 
                  : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Category Big Header & Social Proof */}
        <div className="text-center mb-16 space-y-2 pt-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            {categoryDetails[activeCategory]?.title}
          </h2>
          <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
            {categoryDetails[activeCategory]?.subtitle}
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="relative group px-4">
          
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-[45%] -translate-y-1/2 bg-white border border-slate-200 shadow-lg h-11 w-11 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all z-20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-[45%] -translate-y-1/2 bg-white border border-slate-200 shadow-lg h-11 w-11 rounded-full flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-105 active:scale-95 transition-all z-20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Sliding Track - Elongated column widths to support super-sized cards */}
          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none pb-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredTemplates.map((tpl) => {
              const info = getTemplateDynamicContent(tpl);
              const activeColor = selectedColors[tpl.id] || tpl.color;

              const renderLayoutContent = (isZoomed = false) => {
                const textSizeClass = isZoomed ? 'text-[9.5px] leading-relaxed' : 'text-[2.8px] leading-[1.25]';
                const headerSizeClass = isZoomed ? 'text-[24px]' : 'text-[7.5px]';
                const subtitleSizeClass = isZoomed ? 'text-[12px]' : 'text-[4px]';
                const secTitleClass = isZoomed ? 'text-[11px] font-black border-b pb-1 mb-1.5' : 'text-[3.8px] font-black uppercase border-b pb-0.5';

                return (
                  <>
                    {/* layout: CASCADE */}
                    {tpl.layout === 'cascade' && (
                      <div className={`grid grid-cols-12 gap-2 h-full ${isZoomed ? '-m-6' : '-m-3.5'}`}>
                        <div className="col-span-4 p-4 flex flex-col justify-between text-white" style={{ backgroundColor: activeColor || '#0f4c81' }}>
                          <div className={isZoomed ? "space-y-6" : "space-y-3.5"}>
                            <div className={`${isZoomed ? 'h-24 w-24 text-[24px]' : 'h-10 w-10 text-[10px]'} rounded-full bg-white/10 border border-white/25 flex items-center justify-center font-bold mx-auto text-white/95 leading-none shadow-sm`}>
                              {info.initials}
                            </div>
                            <div className="space-y-1">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.2px]'} font-bold uppercase tracking-wider text-white/60`}>Contact</div>
                              <div className={`${isZoomed ? 'text-[9px] space-y-1' : 'text-[2.5px] space-y-0.5'} text-white/90 font-medium`}>
                                <div>✉ info@domain.com</div>
                                <div>📞 +91 98765 43210</div>
                                <div>📍 New Delhi, India</div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.2px]'} font-bold uppercase tracking-wider text-white/60`}>Skills</div>
                              <div className={`flex flex-col gap-0.5 ${isZoomed ? 'text-[9px] gap-1' : 'text-[2.4px]'} font-medium text-white/95`}>
                                {info.skills.map((sk, idx) => (
                                  <div key={idx} className="bg-white/10 px-1 py-0.5 rounded border border-white/5">• {sk}</div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className={`${isZoomed ? 'text-[10px]' : 'text-[2.5px]'} text-white/40 font-bold tracking-wider text-center uppercase`}>Cascade</div>
                        </div>
                        <div className={`col-span-8 flex flex-col justify-between h-full ${isZoomed ? 'pt-8 pr-8 pl-4 pb-6' : 'pt-4 pr-3.5 pl-2 pb-2.5'}`}>
                          <div className={isZoomed ? "space-y-4 text-left" : "space-y-1.5 text-left"}>
                            <div>
                              <div className={`${headerSizeClass} font-black text-slate-950 leading-none`}>{info.name}</div>
                              <div className={`${subtitleSizeClass} font-bold tracking-wider uppercase mt-1 text-slate-600`}>{info.title}</div>
                            </div>
                            <div className="space-y-0.5">
                              <div className={`${secTitleClass} text-slate-800`}>Profile Summary</div>
                              <p className={`${textSizeClass} text-slate-500 font-semibold`}>{info.summary}</p>
                            </div>
                            <div className="space-y-0.5">
                              <div className={`${secTitleClass} text-slate-800`}>Work History</div>
                              <div className={`relative border-l border-slate-200 pl-3 ml-1 ${isZoomed ? 'space-y-4' : 'space-y-2'}`}>
                                <div>
                                  <span className="absolute -left-[3.5px] mt-1 h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                                  <div className={`flex justify-between items-center ${isZoomed ? 'text-[10.5px]' : 'text-[3.2px]'} font-bold text-slate-900 leading-none`}>
                                    <span>{info.exp1.role}</span>
                                    <span className="text-slate-400 text-[2.5px]">{info.exp1.date}</span>
                                  </div>
                                  <div className="text-[2.6px] font-semibold text-slate-400 leading-none mt-0.5">{info.exp1.company}</div>
                                  <p className={`${textSizeClass} text-slate-500 font-medium mt-0.5`}>• {info.exp1.desc[0]}</p>
                                </div>
                                <div>
                                  <span className="absolute -left-[3.5px] mt-1 h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                                  <div className={`flex justify-between items-center ${isZoomed ? 'text-[10.5px]' : 'text-[3.2px]'} font-bold text-slate-900 leading-none`}>
                                    <span>{info.exp2.role}</span>
                                    <span className="text-slate-400 text-[2.5px]">{info.exp2.date}</span>
                                  </div>
                                  <div className="text-[2.6px] font-semibold text-slate-400 leading-none mt-0.5">{info.exp2.company}</div>
                                  <p className={`${textSizeClass} text-slate-500 font-medium mt-0.5`}>• {info.exp2.desc[0]}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-0.5">
                              <div className={`${secTitleClass} text-slate-800`}>Education</div>
                              <div className={`flex justify-between items-center ${isZoomed ? 'text-[10px]' : 'text-[3.1px]'} font-bold text-slate-800 leading-none mt-0.5`}>
                                <span>{info.edu1.degree}</span>
                                <span className="text-slate-400 text-[2.5px]">{info.edu1.date}</span>
                              </div>
                              <p className={`${isZoomed ? 'text-[9.5px]' : 'text-[2.7px]'} text-slate-400 leading-none font-semibold`}>{info.edu1.school}</p>
                            </div>
                          </div>
                          <div className={`${isZoomed ? 'text-[9px] pt-2' : 'text-[2.6px]'} text-slate-300 font-bold tracking-widest text-center border-t border-slate-50 uppercase leading-none`}>MYHRWA PREMIUM</div>
                        </div>
                      </div>
                    )}

                    {/* layout: CONCEPT */}
                    {tpl.layout === 'concept' && (
                      <div className={`space-y-2 h-full flex flex-col justify-between pt-0.5 ${isZoomed ? 'p-4' : ''}`}>
                        <div className="space-y-2 text-left">
                          <div className="flex justify-between items-start border-b pb-1.5 border-slate-100">
                            <div>
                              <div className={`${headerSizeClass} font-black leading-none`} style={{ color: activeColor || '#be123c' }}>{info.name}</div>
                              <div className={`${subtitleSizeClass} font-bold tracking-wider uppercase mt-1 text-slate-500`}>{info.title}</div>
                            </div>
                            <div className={`${isZoomed ? 'text-[9.5px]' : 'text-[2.6px]'} text-slate-400 font-bold leading-normal text-right`}>
                              <div>✉ karthik@example.com</div>
                              <div>📞 +91 98765 43210</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-12 gap-2">
                            <div className="col-span-4 space-y-3 pr-1 border-r border-slate-100">
                              <div className="space-y-1">
                                <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.4px]'} font-black uppercase tracking-wider text-slate-800`}>Skills</div>
                                <div className="flex flex-col gap-0.5">
                                  {info.skills.map((sk, i) => (
                                    <span key={i} className={`${textSizeClass} text-slate-500 font-semibold`}>• {sk}</span>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-1">
                                <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.4px]'} font-black uppercase tracking-wider text-slate-800`}>Languages</div>
                                <div className={`flex flex-col gap-0.5 ${isZoomed ? 'text-[9.5px]' : 'text-[2.5px]'} text-slate-500 font-semibold leading-none`}>
                                  <div>✓ {info.languages[0]}</div>
                                  <div>✓ {info.languages[1]}</div>
                                </div>
                              </div>
                            </div>
                            <div className="col-span-8 pl-1 space-y-1.5">
                              <div className="space-y-0.5">
                                <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.5px]'} font-black uppercase text-slate-800`}>Profile Pitch</div>
                                <p className={`${textSizeClass} text-slate-500 leading-relaxed font-semibold`}>{info.summary}</p>
                              </div>
                              <div className="space-y-0.5">
                                <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.5px]'} font-black uppercase text-slate-800`}>Experience</div>
                                <div className={isZoomed ? 'space-y-3' : 'space-y-1'}>
                                  <div>
                                    <div className={`flex justify-between ${isZoomed ? 'text-[10px]' : 'text-[3px]'} font-bold text-slate-800`}>
                                      <span>{info.exp1.role}</span>
                                      <span className="text-slate-400">{info.exp1.date}</span>
                                    </div>
                                    <p className={`${textSizeClass} text-slate-500 font-semibold`}>• {info.exp1.desc[0]}</p>
                                  </div>
                                  <div>
                                    <div className={`flex justify-between ${isZoomed ? 'text-[10px]' : 'text-[3px]'} font-bold text-slate-800`}>
                                      <span>{info.exp2.role}</span>
                                      <span className="text-slate-400">{info.exp2.date}</span>
                                    </div>
                                    <p className={`${textSizeClass} text-slate-500 font-semibold`}>• {info.exp2.desc[0]}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${isZoomed ? 'text-[9px]' : 'text-[2.6px]'} text-slate-300 font-bold tracking-widest text-center border-t pt-0.5 border-slate-50 uppercase`}>MYHRWA PREMIUM</div>
                      </div>
                    )}

                    {/* layout: MODERN TECH */}
                    {tpl.layout === 'modern-tech' && (
                      <div className={`grid grid-cols-12 gap-2 h-full ${isZoomed ? '-m-6' : '-m-3.5'}`}>
                        <div className="col-span-4 p-2.5 flex flex-col justify-between text-slate-700 bg-slate-50/70 border-r border-slate-100">
                          <div className={isZoomed ? 'space-y-6' : 'space-y-3.5'}>
                            <div className={`${isZoomed ? 'h-24 w-24 text-[24px]' : 'h-10 w-10 text-[14px]'} rounded-full bg-teal-600 flex items-center justify-center font-bold mx-auto text-white shadow-sm leading-none`}>
                              {info.initials[0]}
                            </div>
                            <div className="space-y-1">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.3px]'} font-black uppercase text-slate-400`}>Contact</div>
                              <div className={`${isZoomed ? 'text-[9px] space-y-1' : 'text-[2.6px] space-y-0.5'} text-slate-500 font-semibold leading-tight`}>
                                <div>✉ {info.name.toLowerCase().replace(" ", "")}@example.com</div>
                                <div>📞 +91 98765 43210</div>
                                <div>📍 New Delhi, India</div>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.3px]'} font-black uppercase text-slate-400`}>Core Skills</div>
                              <div className={`flex flex-col ${isZoomed ? 'gap-1.5' : 'gap-0.5'}`}>
                                {info.skills.map((sk, idx) => (
                                  <span key={idx} className={`bg-white border border-slate-200/60 px-1 py-0.5 rounded ${isZoomed ? 'text-[9px]' : 'text-[2.5px]'} font-bold text-slate-600 flex items-center gap-0.5`}>
                                    <span className="h-1 w-1 rounded-full bg-teal-500"></span>
                                    {sk}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-1">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.3px]'} font-black uppercase text-slate-400`}>Languages</div>
                              <div className="flex flex-col gap-0.5">
                                {info.languages.map((ln, idx) => (
                                  <span key={idx} className={`bg-white border border-slate-200/60 px-1 py-0.5 rounded ${isZoomed ? 'text-[9px]' : 'text-[2.4px]'} font-bold text-slate-600`}>
                                    ✓ {ln}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className={`${isZoomed ? 'text-[9px]' : 'text-[2.5px]'} text-slate-300 font-bold tracking-wider text-center uppercase leading-none`}>MyHRWA</div>
                        </div>
                        <div className={`col-span-8 flex flex-col justify-between h-full ${isZoomed ? 'pt-8 pr-8 pl-4 pb-6' : 'pt-4 pr-3.5 pl-2 pb-2.5'}`}>
                          <div className={isZoomed ? "space-y-4 text-left" : "space-y-2 text-left"}>
                            <div>
                              <div className={`${headerSizeClass} font-black text-slate-950 leading-none`}>{info.name}</div>
                              <div className={`${subtitleSizeClass} font-bold mt-1 text-teal-600 leading-none tracking-wide`}>{info.title}</div>
                            </div>
                            <div className="space-y-0.5">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.8px]'} font-black uppercase text-teal-600 border-b pb-0.5`}>Profile Summary</div>
                              <p className={`${textSizeClass} text-slate-500 font-semibold`}>{info.summary}</p>
                            </div>
                            <div className="space-y-0.5">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.8px]'} font-black uppercase text-teal-600 border-b pb-0.5`}>Experience</div>
                              <div className="space-y-0.5">
                                <div className={`flex justify-between items-center ${isZoomed ? 'text-[10px]' : 'text-[3.2px]'} font-bold text-slate-900 leading-none`}>
                                  <span>{info.exp1.role} at {info.exp1.company}</span>
                                  <span className="text-slate-400 text-[2.5px]">{info.exp1.date}</span>
                                </div>
                                <p className={`${textSizeClass} text-slate-500 font-semibold mt-0.5`}>• {info.exp1.desc[0]}</p>
                                <p className={`${textSizeClass} text-slate-500 font-semibold`}>• {info.exp1.desc[1]}</p>
                              </div>
                            </div>
                            <div className="space-y-0.5">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.8px]'} font-black uppercase text-teal-600 border-b pb-0.5`}>Education</div>
                              <div className={`flex justify-between items-center ${isZoomed ? 'text-[10px]' : 'text-[3.1px]'} font-bold text-slate-800 leading-none`}>
                                <span>{info.edu1.degree}</span>
                                <span className="text-slate-400 text-[2.5px]">{info.edu1.date}</span>
                              </div>
                              <p className={`${isZoomed ? 'text-[9px]' : 'text-[2.7px]'} text-slate-400 leading-none font-semibold`}>{info.edu1.school}</p>
                            </div>
                            <div className="space-y-0.5">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.8px]'} font-black uppercase text-teal-600 border-b pb-0.5`}>Achievements</div>
                              <div className={`pt-0.5 space-y-0.5 ${textSizeClass} text-slate-500 font-semibold leading-none`}>
                                <div>• {info.achievements[0]}</div>
                                <div>• {info.achievements[1]}</div>
                              </div>
                            </div>
                            <div className="space-y-0.5">
                              <div className={`${isZoomed ? 'text-[11px]' : 'text-[3.8px]'} font-black uppercase text-teal-600 border-b pb-0.5`}>Activities & Interests</div>
                              <div className="flex flex-wrap gap-1">
                                {info.interests.map((it, idx) => (
                                  <span key={idx} className={`bg-teal-50 border border-teal-100 text-teal-700 px-1 py-0.5 rounded ${isZoomed ? 'text-[8.5px]' : 'text-[2.4px]'} font-bold flex items-center gap-0.5 leading-none`}>
                                    ★ {it}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className={`${isZoomed ? 'text-[9px]' : 'text-[2.6px]'} text-slate-300 font-bold tracking-widest text-center border-t pt-0.5 border-slate-50 uppercase leading-none`}>MYHRWA PREMIUM</div>
                        </div>
                      </div>
                    )}

                    {/* Fallback support for other layouts to be fully stuffed */}
                    {tpl.layout !== 'cascade' && tpl.layout !== 'concept' && tpl.layout !== 'modern-tech' && (
                      <div className="space-y-1 h-full flex flex-col justify-between pt-1 border-t-[3px]" style={{ borderColor: activeColor || '#eab308' }}>
                        <div className="space-y-1 text-left">
                          <div>
                            <div className="text-[8px] font-black text-slate-950 leading-none">{info.name}</div>
                            <div className="text-[2.8px] text-slate-400 font-bold mt-1 tracking-wide leading-none">
                              New Delhi, India • +91 999 123 4567 • {info.name.toLowerCase().replace(" ", "")}@email.com
                            </div>
                          </div>
                          <hr className="border-slate-100 my-0.5" />
                          <div className="space-y-0.5">
                            <div className="text-[4px] font-bold uppercase text-slate-800 tracking-wider">Qualifications Summary</div>
                            <p className="text-[2.8px] text-slate-500 font-medium">{info.summary}</p>
                          </div>
                          <div className="space-y-0.5 pt-0.5">
                            <div className="text-[4px] font-bold uppercase text-slate-800 tracking-wider">Professional Experience</div>
                            <div className="flex justify-between items-center text-[3.2px] font-bold text-slate-800">
                              <span>{info.exp1.role} — {info.exp1.company}</span>
                              <span className="text-slate-400 text-[2.6px]">{info.exp1.date}</span>
                            </div>
                            <p className="text-[2.8px] text-slate-500 leading-relaxed font-semibold">• {info.exp1.desc[0]}</p>
                          </div>
                          <div className="space-y-0.5 pt-0.5">
                            <div className="text-[4px] font-bold uppercase text-slate-800 tracking-wider">Education</div>
                            <p className="text-[2.9px] text-slate-500 font-semibold">{info.education}</p>
                          </div>
                          <div className="space-y-0.5 pt-0.5">
                            <div className="text-[4px] font-bold uppercase text-slate-800 tracking-wider">Core Expertise</div>
                            <div className="flex flex-wrap gap-1">
                              {info.skills.map((sk, idx) => (
                                <span key={idx} className="bg-slate-50 px-1 py-0.5 rounded text-[2.5px] font-bold text-slate-600 flex items-center gap-0.5 border border-slate-200/50">
                                  <span className="h-1 w-1 rounded-full bg-green-500"></span>
                                  {sk}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-[2.6px] text-slate-300 font-bold tracking-widest text-center border-t pt-0.5 border-slate-50 uppercase">MYHRWA PREMIUM</div>
                      </div>
                    )}
                  </>
                );
              };

              return (
                <div 
                  key={tpl.id} 
                  className="w-[290px] shrink-0 snap-center group flex flex-col items-center gap-4 transition-transform duration-300"
                >
                  {/* Dynamic Card Header */}
                  <div className="text-center h-6 flex items-center">
                    <span className="text-xs font-black text-slate-500 uppercase tracking-wider">
                      {tpl.cardHeader}
                    </span>
                  </div>

                  {/* Pure Resume Sheet Card - Clicking anywhere selects it! */}
                  <div 
                    onClick={() => onSelectTemplate(tpl.id)}
                    className="relative w-[265px] h-[375px] bg-white rounded-md shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.14)] border border-slate-200/70 p-3.5 flex flex-col justify-between text-[2.8px] leading-[1.25] text-slate-900 font-sans text-left overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none"
                  >
                    {renderLayoutContent(false)}

                    {/* FLOATING ZOOM SEARCH BUTTON */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents triggers selection
                        setZoomedTemplateId(tpl.id);
                      }}
                      className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full h-7 w-7 flex items-center justify-center shadow-md border border-white z-20 transition-all hover:scale-110 active:scale-90"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                      </svg>
                    </button>

                    {/* HOVER USE TEMPLATE OVERLAY */}
                    <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center z-10 duration-300 rounded-md">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); // Safe execution
                          onSelectTemplate(tpl.id);
                        }}
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl shadow-lg transition-all hover:scale-105 text-[10px]"
                      >
                        Use this template
                      </button>
                    </div>

                  </div>

                  {/* Color Swatch Dots with Live Color Customization */}
                  <div className="flex gap-1.5 mt-2 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {colorSwatches.map((color) => (
                      <button
                        key={color}
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent template selection
                          setSelectedColors(prev => ({ ...prev, [tpl.id]: color }));
                        }}
                        className="w-2.5 h-2.5 rounded-full border border-slate-200 cursor-pointer shadow-sm hover:scale-125 transition-transform active:scale-95"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* FULL SCREEN HIGH-FIDELITY ZOOM MODAL */}
      {zoomedTemplateId && (() => {
        const zoomedTpl = templatesData.find(t => t.id === zoomedTemplateId);
        const info = getTemplateDynamicContent(zoomedTpl);
        const activeColor = selectedColors[zoomedTpl.id] || zoomedTpl.color;

        return (
          <div className="fixed inset-0 bg-slate-950/65 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto relative flex flex-col p-6 animate-fade-in border border-slate-100">
              
              {/* Close icon */}
              <button 
                onClick={() => setZoomedTemplateId(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 h-9 w-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-all font-bold text-lg"
              >
                ✕
              </button>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-800">{zoomedTpl.cardHeader} Template View</h3>
                <p className="text-xs text-slate-400 font-medium">Click "Choose template" to apply this format.</p>
              </div>

              {/* High Fidelity Large Representation Container */}
              <div className="bg-white rounded-lg border border-slate-200/80 p-6 flex flex-col justify-between text-[10px] leading-relaxed text-slate-900 shadow-sm relative">
                
                {/* Dynamic zoomed layout */}
                {zoomedTpl.layout === 'cascade' && (
                  <div className="grid grid-cols-12 gap-4 -m-6 min-h-[460px]">
                    <div className="col-span-4 p-5 flex flex-col justify-between text-white" style={{ backgroundColor: activeColor || '#0f4c81' }}>
                      <div className="space-y-6">
                        <div className="h-16 w-16 rounded-full bg-white/10 border border-white/25 flex items-center justify-center font-bold text-[18px] mx-auto text-white/95 leading-none shadow-sm">
                          {info.initials}
                        </div>
                        <div className="space-y-2 text-left">
                          <div className="text-[12px] font-bold uppercase tracking-wider text-white/60">Contact</div>
                          <div className="text-[9px] space-y-1 text-white/90 font-medium">
                            <div>✉ info@domain.com</div>
                            <div>📞 +91 98765 43210</div>
                            <div>📍 New Delhi, India</div>
                          </div>
                        </div>
                        <div className="space-y-2 text-left">
                          <div className="text-[12px] font-bold uppercase tracking-wider text-white/60">Skills</div>
                          <div className="flex flex-col gap-1 text-[9px] font-medium text-white/95">
                            {info.skills.map((sk, idx) => (
                              <div key={idx} className="bg-white/10 px-2 py-1 rounded border border-white/5">• {sk}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-[9px] text-white/40 font-bold tracking-wider text-center uppercase mt-6">Cascade</div>
                    </div>
                    <div className="col-span-8 flex flex-col justify-between h-full pt-8 pr-8 pl-4 pb-6">
                      <div className="space-y-4 text-left">
                        <div>
                          <div className="text-[22px] font-black text-slate-950 leading-none">{info.name}</div>
                          <div className="text-[11px] font-bold tracking-wider uppercase mt-1 text-slate-600">{info.title}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-slate-800 border-b pb-1 mb-2">Profile Summary</div>
                          <p className="text-[9.5px] text-slate-500 font-semibold leading-relaxed">{info.summary}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-slate-800 border-b pb-1 mb-2">Work History</div>
                          <div className="relative border-l border-slate-200 pl-4 ml-1 space-y-4">
                            <div>
                              <span className="absolute -left-[4.5px] mt-1.5 h-2 w-2 rounded-full bg-slate-300"></span>
                              <div className="flex justify-between items-center text-[10.5px] font-bold text-slate-900 leading-none">
                                <span>{info.exp1.role}</span>
                                <span className="text-slate-400 text-[9px]">{info.exp1.date}</span>
                              </div>
                              <div className="text-[9.5px] font-semibold text-slate-400 mt-0.5 leading-none">{info.exp1.company}</div>
                              <p className="text-[9px] text-slate-500 font-medium leading-relaxed mt-1">• {info.exp1.desc[0]}</p>
                            </div>
                            <div>
                              <span className="absolute -left-[4.5px] mt-1.5 h-2 w-2 rounded-full bg-slate-300"></span>
                              <div className="flex justify-between items-center text-[10.5px] font-bold text-slate-900 leading-none">
                                <span>{info.exp2.role}</span>
                                <span className="text-slate-400 text-[9px]">{info.exp2.date}</span>
                              </div>
                              <div className="text-[9.5px] font-semibold text-slate-400 mt-0.5 leading-none">{info.exp2.company}</div>
                              <p className="text-[9px] text-slate-500 font-medium leading-relaxed mt-1">• {info.exp2.desc[0]}</p>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-slate-800 border-b pb-1 mb-2">Education</div>
                          <div className="flex justify-between items-center text-[10px] font-bold text-slate-800 leading-none mt-1">
                            <span>{info.edu1.degree}</span>
                            <span className="text-slate-400 text-[9px]">{info.edu1.date}</span>
                          </div>
                          <p className="text-[9px] text-slate-400 leading-none font-semibold mt-1">{info.edu1.school}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {zoomedTpl.layout === 'concept' && (
                  <div className="space-y-4 p-4 text-left min-h-[460px]">
                    <div className="flex justify-between items-start border-b pb-3 border-slate-100">
                      <div>
                        <div className="text-[24px] font-black leading-none" style={{ color: activeColor || '#be123c' }}>{info.name}</div>
                        <div className="text-[12px] font-bold tracking-wider uppercase mt-1 text-slate-500">{info.title}</div>
                      </div>
                      <div className="text-[9.5px] text-slate-400 font-bold leading-normal text-right">
                        <div>✉ karthik@example.com</div>
                        <div>📞 +91 98765 43210</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-4 space-y-4 pr-2 border-r border-slate-100">
                        <div className="space-y-2">
                          <div className="text-[11px] font-black uppercase tracking-wider text-slate-800">Skills</div>
                          <div className="flex flex-col gap-1">
                            {info.skills.map((sk, i) => (
                              <span key={i} className="text-[9.5px] text-slate-500 font-semibold">• {sk}</span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="text-[11px] font-black uppercase tracking-wider text-slate-800">Languages</div>
                          <div className="flex flex-col gap-1 text-[9.5px] text-slate-500 font-semibold leading-none">
                            <div>✓ {info.languages[0]}</div>
                            <div>✓ {info.languages[1]}</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-span-8 pl-2 space-y-4">
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-slate-800">Profile Summary</div>
                          <p className="text-[9.5px] text-slate-500 leading-relaxed font-semibold">{info.summary}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-slate-800">Experience</div>
                          <div className="space-y-3">
                            <div>
                              <div className="flex justify-between text-[10px] font-bold text-slate-800">
                                <span>{info.exp1.role}</span>
                                <span className="text-slate-400">{info.exp1.date}</span>
                              </div>
                              <p className="text-[9.5px] text-slate-500 font-semibold mt-1">• {info.exp1.desc[0]}</p>
                            </div>
                            <div>
                              <div className="flex justify-between text-[10px] font-bold text-slate-800">
                                <span>{info.exp2.role}</span>
                                <span className="text-slate-400">{info.exp2.date}</span>
                              </div>
                              <p className="text-[9.5px] text-slate-500 font-semibold mt-1">• {info.exp2.desc[0]}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {zoomedTpl.layout === 'modern-tech' && (
                  <div className="grid grid-cols-12 gap-4 -m-6 min-h-[460px]">
                    <div className="col-span-4 p-5 flex flex-col justify-between text-slate-700 bg-slate-50/70 border-r border-slate-100">
                      <div className="space-y-6">
                        <div className="h-16 w-16 rounded-full bg-teal-600 flex items-center justify-center font-bold mx-auto text-white shadow-sm leading-none text-[18px]">
                          {info.initials[0]}
                        </div>
                        <div className="space-y-2 text-left">
                          <div className="text-[11px] font-black uppercase text-slate-400">Contact</div>
                          <div className="text-[9px] space-y-1 text-slate-500 font-semibold leading-tight">
                            <div>✉ {info.name.toLowerCase().replace(" ", "")}@example.com</div>
                            <div>📞 +91 98765 43210</div>
                            <div>📍 New Delhi, India</div>
                          </div>
                        </div>
                        <div className="space-y-2 text-left">
                          <div className="text-[11px] font-black uppercase text-slate-400">Core Skills</div>
                          <div className="flex flex-col gap-1.5">
                            {info.skills.map((sk, idx) => (
                              <span key={idx} className="bg-white border border-slate-200/60 px-2 py-1 rounded text-[9px] font-bold text-slate-600 flex items-center gap-1">
                                <span className="h-1.5 w-1.5 rounded-full bg-teal-500"></span>
                                {sk}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2 text-left">
                          <div className="text-[11px] font-black uppercase text-slate-400">Languages</div>
                          <div className="flex flex-col gap-1">
                            {info.languages.map((ln, idx) => (
                              <span key={idx} className="bg-white border border-slate-200/60 px-2 py-1 rounded text-[9px] font-bold text-slate-600">
                                ✓ {ln}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-8 flex flex-col justify-between h-full pt-8 pr-8 pl-4 pb-6">
                      <div className="space-y-4 text-left">
                        <div>
                          <div className="text-[22px] font-black text-slate-950 leading-none">{info.name}</div>
                          <div className="text-[11px] font-bold mt-1 text-teal-600 leading-none tracking-wide">{info.title}</div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-teal-600 border-b pb-1">Profile Summary</div>
                          <p className="text-[9.5px] text-slate-500 font-semibold leading-relaxed">{info.summary}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-teal-600 border-b pb-1">Experience</div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center text-[10px] font-bold text-slate-900 leading-none">
                              <span>{info.exp1.role} at {info.exp1.company}</span>
                              <span className="text-slate-400 text-[9px]">{info.exp1.date}</span>
                            </div>
                            <p className="text-[9px] text-slate-500 font-semibold mt-1">• {info.exp1.desc[0]}</p>
                            <p className="text-[9px] text-slate-500 font-semibold">• {info.exp1.desc[1]}</p>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-teal-600 border-b pb-1">Education</div>
                          <div className="flex justify-between items-center text-[10px] font-bold text-slate-800 leading-none">
                            <span>{info.edu1.degree}</span>
                            <span className="text-slate-400 text-[9px]">{info.edu1.date}</span>
                          </div>
                          <p className="text-[9px] text-slate-400 leading-none font-semibold mt-1">{info.edu1.school}</p>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-teal-600 border-b pb-1">Achievements</div>
                          <div className="pt-1 space-y-1 text-[9.5px] text-slate-500 font-semibold leading-relaxed">
                            <div>• {info.achievements[0]}</div>
                            <div>• {info.achievements[1]}</div>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="text-[11px] font-black uppercase text-teal-600 border-b pb-1">Activities & Interests</div>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {info.interests.map((it, idx) => (
                              <span key={idx} className="bg-teal-50 border border-teal-100 text-teal-700 px-2 py-1 rounded text-[8.5px] font-bold flex items-center gap-1 leading-none shadow-sm">
                                ★ {it}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {zoomedTpl.layout !== 'cascade' && zoomedTpl.layout !== 'concept' && zoomedTpl.layout !== 'modern-tech' && (
                  <div className="space-y-4 p-4 text-left min-h-[460px]">
                    <div>
                      <div className="text-[22px] font-black text-slate-950 leading-none">{info.name}</div>
                      <div className="text-[10px] text-slate-400 font-bold mt-1.5 tracking-wide leading-none">
                        New Delhi, India • +91 999 123 4567 • {info.name.toLowerCase().replace(" ", "")}@email.com
                      </div>
                    </div>
                    <hr className="border-slate-100" />
                    <div className="space-y-1">
                      <div className="text-[12px] font-bold uppercase text-slate-800 tracking-wider">Qualifications Summary</div>
                      <p className="text-[9.5px] text-slate-500 font-medium leading-relaxed">{info.summary}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[12px] font-bold uppercase text-slate-800 tracking-wider">Professional Experience</div>
                      <div className="flex justify-between items-center text-[10.5px] font-bold text-slate-800">
                        <span>{info.exp1.role} — {info.exp1.company}</span>
                        <span className="text-slate-400 text-[9px]">{info.exp1.date}</span>
                      </div>
                      <p className="text-[9.5px] text-slate-500 leading-relaxed font-semibold">• {info.exp1.desc[0]}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[12px] font-bold uppercase text-slate-800 tracking-wider">Education</div>
                      <p className="text-[9.5px] text-slate-500 font-semibold leading-relaxed">{info.education}</p>
                    </div>
                  </div>
                )}

              </div>

              {/* Action trigger button */}
              <div className="mt-6 flex justify-end gap-2">
                <button 
                  onClick={() => setZoomedTemplateId(null)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg text-sm transition-all"
                >
                  Close
                </button>
                <button 
                  onClick={() => {
                    onSelectTemplate(zoomedTpl.id);
                    setZoomedTemplateId(null);
                  }}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-lg text-sm transition-all shadow-md"
                >
                  Choose this template
                </button>
              </div>

            </div>
          </div>
        );
      })()}

    </section>
  );
}