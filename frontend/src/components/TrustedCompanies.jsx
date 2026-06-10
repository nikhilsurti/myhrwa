import React from "react";

import google from "../assets/company-logos/google.svg";
import accenture from "../assets/company-logos/accenture.svg";
import meta from "../assets/company-logos/meta.svg";
import netflix from "../assets/company-logos/netflix.svg";
import wipro from "../assets/company-logos/wipro.svg";
import tcs from "../assets/company-logos/tcs.svg";

export default function TrustedCompanies() {
  const companies = [
    { name: "Google", logo: google },
    { name: "Accenture", logo: accenture },
    { name: "Meta", logo: meta },
    { name: "Netflix", logo: netflix },
    { name: "Wipro", logo: wipro },
    { name: "TCS", logo: tcs },
  ];

  const duplicatedCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10">
          <p className="text-sm font-bold uppercase tracking-[4px] text-slate-500">
            Trusted By Candidates Applying To
          </p>

          <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
            Leading Global Companies
          </h3>
        </div>

        <div className="overflow-hidden">
          <div className="trusted-scroll flex gap-20 w-max items-center">

            {duplicatedCompanies.map((company, index) => (
              <div key={index} className="flex items-center gap-3 min-w-max">

                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition duration-300"
                />

                <span className="font-bold text-slate-700 text-lg">
                  {company.name}
                </span>

              </div>
            ))}

          </div>
        </div>
      </div>

      <style>
        {`
          .trusted-scroll {
            animation: scroll 30s linear infinite;
          }

          .trusted-scroll:hover {
            animation-play-state: paused;
          }

          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
    </section>
  );
}