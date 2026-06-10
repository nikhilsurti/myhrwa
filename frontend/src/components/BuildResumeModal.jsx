import React, { useRef } from "react";

export default function BuildResumeModal({
  isOpen,
  onClose,
  onCreateFromScratch,
  onUploadResume,
}) {
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      onUploadResume(file);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl p-8 relative animate-in fade-in zoom-in">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-slate-400 hover:text-slate-700 text-xl"
        >
          ✕
        </button>

        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-4">
            ATS Resume Builder
          </div>

          <h2 className="text-3xl font-extrabold text-slate-900">
            Choose How To Start
          </h2>

          <p className="text-slate-500 mt-3 text-sm">
            Create a brand-new ATS resume or upload an existing one.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">

          {/* Create From Scratch */}
          <button
            onClick={onCreateFromScratch}
            className="w-full p-5 rounded-2xl border border-blue-100 bg-blue-50 hover:bg-blue-100 transition-all text-left"
          >
            <h3 className="font-extrabold text-slate-900">
              Create From Scratch
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              Build a professional ATS-friendly resume from the beginning.
            </p>
          </button>

          {/* Upload Resume */}
          <button
            onClick={handleUploadClick}
            className="w-full p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:bg-slate-50 transition-all text-left"
          >
            <h3 className="font-extrabold text-slate-900">
              Upload Existing Resume
            </h3>

            <p className="text-xs text-slate-500 mt-1">
              Import your existing PDF or DOCX resume.
            </p>
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
}